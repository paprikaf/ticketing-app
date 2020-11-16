import express from 'express';

const router = express.Router();

router.post('/api/users/signin', (req, res) => {
  res.send('choufo chbih');
});

export { router as signinRouter };
