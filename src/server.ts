import express, { request, response } from 'express';

const app = express();

app.get('/', (request, response) => {
	return response.json({ message: 'olá da response' });
});

app.post('/users', (request, response) => {
	return response.json({ message: 'usuário salvo aham' });
});

app.listen(3333, () => console.log('Oi 3333'));
