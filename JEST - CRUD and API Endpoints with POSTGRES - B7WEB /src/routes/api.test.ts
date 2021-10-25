import request from 'supertest'
import app from '../app'
import { User } from '../models/User'

describe('Testing api routes', () => {

	let email = 'test@gmail.com'
	let password = '1234'

	beforeAll(async () => {
		await User.sync({ force: true })
	})

	it('should ping pong', (done) => {
		request(app)
			.get('/ping')
			.then(response => {
				// response.header
				// response.body
				expect(response.body.pong).toBeTruthy()
				return done();
			})
	})

	it('should ping pong ASYNC AWAIT', async () => {
		const response = await request(app).get('/ping')
		expect(response.body.pong).toBeTruthy()		
	})


	it('should register a new user', async () => {
		const response = await request(app)
			.post('/register')
			.send(`email=${email}&password=${password}`)

		expect(response.body.error).toBeUndefined()
		expect(response.body).toHaveProperty('id')		
	})


	it('should NOT allow register with existing email', async () => {
		const response = await request(app)
			.post('/register')
			.send(`email=${email}&password=${password}`)

		expect(response.body.error).not.toBeUndefined()	
	})


	it('should NOT allow register without password', async () => {
		const response = await request(app)
			.post('/register')
			.send(`email=${email}`)

		expect(response.body.error).not.toBeUndefined()	
	})


	it('should NOT allow register without email', async () => {
		const response = await request(app)
			.post('/register')
			.send(`password=${password}`)

		expect(response.body.error).not.toBeUndefined()	
	})


	it('should NOT allow register without any data', async () => {
		const response = await request(app)
			.post('/register')
			.send(``)

		expect(response.body.error).not.toBeUndefined()	
	})


	it('should login correctly', async () => {
		const response = await request(app)
			.post('/login')
			.send(`email=${email}&password=${password}`)

		expect(response.body.error).toBeUndefined()	
		expect(response.body.status).toBeTruthy()	
	})


	it('should NOT login with incorrect data', async () => {
		const response = await request(app)
			.post('/login')
			.send(`email=${email}&password=invalid`)

		expect(response.body.error).toBeUndefined()	
		expect(response.body.status).toBeFalsy()	
	})


	it('should list users', async () => {
		const response = await request(app)
			.get('/list')

		expect(response.body.error).toBeUndefined()	
		expect(response.body.list.length).toBeGreaterThanOrEqual(1)
		expect(response.body.list).toContain(email)
	})
})