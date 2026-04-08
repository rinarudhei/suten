import { Routes, Route } from 'react-router';
import './App.scss';
import SutenGame from './components/templates/SutenGame';
import GameResult from './components/molecules/GameResult';

function App() {
  return (
    <Routes>
      <Route path='/' element={<SutenGame />} />
      <Route path='/big-bang-theory' element={<></>} />
      {import.meta.env.DEV && (
        <Route path='/playground' element={<GameResult />} />
      )}
    </Routes>
  );
}

export default App;
