import express from 'express';
import cors from 'cors';

/// mock data ///
import testData from '../test-data.json';

const router = express.Router();
router.use(cors());

/// mock API end point ///
router.get('/contests', (req, res) => {
  res.send(testData);
});

export default router;
