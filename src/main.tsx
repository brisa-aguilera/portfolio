import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { App } from './routes/routes';
import './index.scss';

const root = document.getElementById('root');
const app = createRoot(root!);

app.render(
  <BrowserRouter basename='/'>
    <App />
  </BrowserRouter>
)
