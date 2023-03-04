import { useEffect, useState } from 'react';
import { fetchOneContest } from '../api-client';
import Header from './header';

const Contest = ({ id }) => {
  const [contest, setContest] = useState({});

  useEffect(() => {
    // fetchSingleContest(id)
    fetchOneContest(id).then((contest) => {
      setContest(contest);
    });
  }, [id]);

  return (
    <>
      <Header message={contest.contestName} />
      <div className="contest">
        <div className="title">Contest Description</div>
        <div className="description">{contest.description}</div>
      </div>
    </>
  );
};

export default Contest;
