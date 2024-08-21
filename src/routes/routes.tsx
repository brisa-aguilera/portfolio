import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout';
import Home from '../pages/Home';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<h1>About</h1>} />
        <Route path='/contact' element={<h1>Contact</h1>} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </Layout>
  );
}

export default App;
