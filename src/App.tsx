import { Routes, Route } from 'react-router';
import './App.scss';
import GameStepOne from './components/molecules/GameStepOne';

function App() {
  return (
    <Routes>
      <Route path='/' element={<></>} />
      <Route path='/big-bang-theory' element={<></>} />
      {import.meta.env.DEV && (
        <Route path='/playground' element={<GameStepOne />} />
      )}
    </Routes>
  );
}

export default App;
