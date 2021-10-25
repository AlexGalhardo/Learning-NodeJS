import { Math } from './Math';


describe('Testing math library', () => {

	// execute essa função antes de cada teste
	beforeEach(() => {})

	// execute essa função depois de cada teste
	afterEach(() => {})

	// execute antes de qualquer teste
	beforeAll(() => {})

	// execute depois de todos os testes
	afterAll(() => {})


	it('should sum two numbers correctly', () => {
		const response = Math.sum(5, 10)

		expect(response).toBe(15);
	})


	it('should less two numbers correctly', () => {
		const response = Math.sub(10, 5)

		expect(response).toBe(5);
	})


	it('should divide two numbers correctly', () => {
		const response = Math.div(20, 10)
		expect(response).toBe(2);

		const response2 = Math.div(3, 0)
		expect(response2).toBe(false);
		expect(response2).toBeFalsy();
		// expect(response2).toBeTruthy();
	})


	it('should multiply two numbers correctly', () => {
		const response = Math.mult(5, 10)
		expect(response).toBe(50);

		const response2 = Math.mult(0, 3)
		expect(response2).toBe(0);
	})

	// toBe()
	// toEqual()
	// toHaveLength()
	// toBeGreaterThan(15)
	// toBeGreaterThanOrEqual(15)
	// toBeLessThan()
	// toBeLessThanOrEqual()

	// toMatch(/regexaqui/);
	// toThrow(new Errror('Não divide por 0'))

	// it.only()

	it('contar quantos caracteres tem na string bonieky', () => {
		const response = 'bonieky'
		expect(response).toHaveLength(7);
	})

	it('contar quantos caracteres tem na string galhardo', () => {
		const response = 'galhardo'
		expect(response).toHaveLength(8);
	})

	it('se possui a propriedade EMAIL', () => {
		const response = {
			name: 'Bonieky',
			email: 'suporte@b7web.com.br'
		}

		expect(response).toHaveProperty('email');
		// expect(response).toBeUndefined();
		expect(response).not.toBeUndefined();
		expect(response).not.toBeNull();
	})
})

