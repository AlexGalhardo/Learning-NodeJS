import dotenv from 'dotenv'
import app from './app'

dotenv.config();

app.listen(process.env.PORT, () => {
    console.log("B7WEB JEST running on port 4000...")
});