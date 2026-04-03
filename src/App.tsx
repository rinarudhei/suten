import { Routes, Route } from 'react-router';
import './App.scss';
import ScoreBox from './components/atoms/ScoreBox';

function App() {
  return (
    <Routes>
      <Route path='/' element={<></>} />
      <Route path='/big-bang-theory' element={<></>} />
      {import.meta.env.DEV && (
        <Route path='/playground' element={<ScoreBox />} />
      )}
    </Routes>
  );
}

export default App;
