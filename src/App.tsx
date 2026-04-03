import { Routes, Route } from 'react-router';
import './App.scss';
import Header from './components/organisms/Header';

function App() {
  return (
    <Routes>
      <Route path='/' element={<></>} />
      <Route path='/big-bang-theory' element={<></>} />
      {import.meta.env.DEV && <Route path='/playground' element={<Header />} />}
    </Routes>
  );
}

export default App;
