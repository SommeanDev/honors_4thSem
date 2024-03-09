import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('Received request');
  res.json({
    message: 'You called root!'
  });
});

router.get('/create', (req, res, next) => {
  console.log('Received request');
  res.json({
    message: 'You called create!'
  });
});

router.get('/update', (req, res, next) => {
  console.log('Received request');
  res.json({
    message: 'You called update!'
  });
});

export default router;