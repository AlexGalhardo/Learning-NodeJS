import { Request, Response, NextFunction } from 'express'
import { User } from '../models/User'

export const Auth = {
	private: async (req: Request, res: Response, next:NextFunction) => {
		// Fazer verificação de auth
		let success = false;

		// YWRtaW5AZ21haWwuY29tOmFkbWluMTIz
		// console.log(req.headers.authorization)
		if(req.headers.authorization){
			let hash: string = req.headers.authorization.substring(6)
			// console.log(hash)
			let decode: string = Buffer.from(hash, 'base64').toString()
			// console.log(decode)
			
			let data: string[] = decode.split(':')
			
			if(data.length === 2){
				let hasUser = await User.findOne({
					where: {
						email: data[0],
						password: data[1]
					}
				})
				console.log(hasUser)
				if(hasUser){
					success = true
				}
			}
		}

		if(success){
			next()
		} else {
			return res.status(403).json({error: 'Não autorizado'})
		}
	}
}