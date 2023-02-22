import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { API_SERVER_URL } from '../public-config';

import ContestPreview from './contest-preview';
// import { fetchContests } from '../api-client';

const ContestList = ({ initialContests }) => {
  const [contests, setContests] = useState(initialContests);

  useEffect(() => {
    // fetchContests().then((contests) => {
    //   setContests(contests);
    // });
  }, []);

  return (
    <div className="contests-list">
      {contests.map((contest) => {
        return (
          <ContestPreview key={contest.id} contest={contest} />
        );
      })}
    </div>
  );
};

export default ContestList;
