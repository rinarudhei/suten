import { Routes, Route } from 'react-router';
import './App.scss';
import SutenGame from './components/templates/SutenGame';
import PieceCard from './components/atoms/PieceCard';
import GamePiece from './components/atoms/GamePiece';

function App() {
  return (
    <Routes>
      <Route path='/' element={<SutenGame />} />
      <Route path='/big-bang-theory' element={<></>} />
      {import.meta.env.DEV && (
        <Route path='/playground' element={<SutenGame />} />
      )}
    </Routes>
  );
}

export default App;
