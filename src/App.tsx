import { Routes, Route } from 'react-router';
import './App.scss';
import GameStepOne from './components/templates/GameStepOne';

function App() {
  return (
    <Routes>
      <Route path='/' element={<GameStepOne />} />
      <Route path='/big-bang-theory' element={<></>} />
      {import.meta.env.DEV && (
        <Route path='/playground' element={<GameStepOne />} />
      )}
    </Routes>
  );
}

export default App;
