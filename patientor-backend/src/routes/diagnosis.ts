import express from 'express';
import diagnosisService from '../services/diagnosisService';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(diagnosisService.getEntries());
})

router.get('/:code', (req, res) => {
  const code = req.params.code
  res.send(diagnosisService.findByCode(code));
})

router.post('/', (_req, res) => {
    res.send('Saving a diagnosis!');
  })

export default router;