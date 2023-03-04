import { useState, useEffect } from 'react';
//***  Components  ***//
// import Header from './header';
import ContestList from './contest-list';
import Contest from './Contest';

const App = ({ initialData }) => {
  const [page, setPage] = useState<'contestList' | 'contest'>(
    'contestList'
  );
  const [currentContestId, setCurrentContestId] = useState<
    string | undefined
  >();

  useEffect(() => {
    window.onpopstate = (event) => {
      console.log(event);
    };
  }, []);

  const navigateToContest = (contestId) => {
    window.history.pushState(
      { contestId },
      '',
      `/contest/${contestId}`
    );
    setPage('contest');
    setCurrentContestId(contestId);
  };

  const pageContent = () => {
    switch (page) {
      case 'contestList':
        return (
          <ContestList
            initialContests={initialData.contests}
            onContestClick={navigateToContest}
          />
        );

      case 'contest':
        return <Contest id={currentContestId} />;
    }
  };

  return <div className="container">{pageContent()}</div>;
};

export default App;
