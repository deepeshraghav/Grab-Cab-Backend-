const app = require('../app');
module.exports = app;

export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from Vercel Serverless!' });
}
