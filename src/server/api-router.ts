import express from 'express';
import cors from 'cors';
import * as db from './db';

/// mock data ///
// import testData from '../test-data.json';

const router = express.Router();
router.use(cors());

router.get('/contests', async (req, res) => {
  const client = await db.connectClient();

  const contests = await client
    .collection('contests')
    .find()
    .project({
      id: 1,
      categoryName: 1,
      contestName: 1,
    })
    .toArray();

  res.send({ contests });
});

// router.get('/contests/:contestId', async (req, res) => {

// });

/// mock API end point ///
// router.get('/contests', (req, res) => {
//   res.send({ contests: testData });
// });

export default router;
