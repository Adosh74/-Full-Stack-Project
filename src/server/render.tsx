import ReactDOMServer from 'react-dom/server';
import App from '../components/app';

import { fetchContests } from '../api-client';

const serverRender = async () => {
  const contests = await fetchContests();

  const initialMarkup = ReactDOMServer.renderToString(
    <App initialData={{ contests }} />
  );

  return { initialMarkup, initialData: { contests } };
};

export default serverRender;
