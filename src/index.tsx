import {createRoot} from 'react-dom/client'
import App from './components/app';
import axios from 'axios';
import { API_SERVER_URL } from './public-config';

const container = document.getElementById("app");
const root = createRoot(container)


const fetch = async () => {
   const data = await axios.get(`${API_SERVER_URL}/contests`)
   console.log(data.data);
   
}

fetch()
root.render(<App />);