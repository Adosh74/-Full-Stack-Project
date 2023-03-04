import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { API_SERVER_URL } from '../public-config';

import ContestPreview from './contest-preview';
import Header from './header';
// import { fetchContests } from '../api-client';

const ContestList = ({ initialContests, onContestClick }) => {
  const [contests, setContests] = useState(initialContests);

  useEffect(() => {
    // fetchContests().then((contests) => {
    //   setContests(contests);
    // });
  }, []);

  return (
    <>
      <Header message="Header Message" />
      <div className="contests-list">
        {contests.map((contest) => {
          return (
            <ContestPreview
              key={contest.id}
              contest={contest}
              onClick={onContestClick}
            />
          );
        })}
      </div>
    </>
  );
};

export default ContestList;
