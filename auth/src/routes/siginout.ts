import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
  res.send('youjaa fih');
});

export { router as signoutRouter };
