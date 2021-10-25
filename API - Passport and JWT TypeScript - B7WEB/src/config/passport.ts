import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { BasicStrategy } from 'passport-http';

import { User } from '../models/User';

const notAuthorizedJSON = { status: 401, message: 'not authorized'}

passport.use(new BasicStrategy(async (email, password, done) => {
	if(email && password) {
		const user = await User.findOne({
			where: { email, password }
		})

		if(user){
			return done(null, user);
		}
	}

	return done(notAuthorizedJSON, false);
}))

export const privateRoute = (req: Request, res: Response, next: NextFunction) => {

	const authFunction = passport.authenticate('basic', (error, user) => {
		req.user = user;
		return user ? next() : next(notAuthorizedJSON)
	})(req, res, next);
}


export default passport;