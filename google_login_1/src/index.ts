import express from 'express';
import dotenv from 'dotenv';
import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9092;

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());

const { CLIENT_ID, JWT_SECRET } = process.env;
if(!CLIENT_ID)
    throw new Error("CLIENT_ID não encontrado");

if(!JWT_SECRET)
    throw new Error("JWT_SECRET não encontrado");


const client = new OAuth2Client(CLIENT_ID);

const unauthorized = (res: express.Response) => res.sendStatus(401);

const authMiddleware = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if(!token)
        return unauthorized(res);

    return jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if(err)
            return unauthorized(res);

        console.log(decoded);
        res.locals['userid'] = (decoded as any).sub;
        return next();
    });
}

app.post('/login', async (req: express.Request, res: express.Response) => {
    const token = req.body.token?.replace('Bearer ', '');
    if(!token)
        return unauthorized(res);

    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID  
    })
    .catch(() => {
        return null;
    })

    if(!ticket)
        return unauthorized(res);

    const payload = ticket.getPayload();
    if(!payload)
        return unauthorized(res);

    const userid = payload['sub']

    const accessToken = jwt.sign({
        sub: userid
    }, JWT_SECRET, { expiresIn: '2 minutes' });

    return res.json({
        accessToken
    })
})

app.get('/values2', authMiddleware,  ({}: express.Request, res: express.Response) => {
    const userId = res.locals['userid'];

    res.json({
        value: 'Teste método protegido 2',
        userId
    })
});


app.get('/values', authMiddleware,  ({}: express.Request, res: express.Response) => {
    const userId = res.locals['userid'];

    res.json({
        value: 'Teste método protegido',
        userId
    })
});

app.get('/', ({}: express.Request, res: express.Response) => {
    res.sendFile('index.html');
})

app.listen(PORT, () => console.log('Servidor iniciado na porta ' + PORT));
