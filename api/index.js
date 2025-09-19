const serverless = require('serverless-http');
const app = require('../app');

export default async function handler(req, res) {
	try {
		await serverless(app)(req, res);
	} catch (error) {
		console.error('Serverless function error:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
}