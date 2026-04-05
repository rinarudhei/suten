import { Routes, Route } from 'react-router';
import './App.scss';
import GamePiece from './components/atoms/GamePiece';
import PiecesConnector from './components/atoms/PiecesConnector';

function App() {
  return (
    <Routes>
      <Route path='/' element={<></>} />
      <Route path='/big-bang-theory' element={<></>} />
      {import.meta.env.DEV && (
        <Route
          path='/playground'
          element={<PiecesConnector connectorType='triangle' />}
        />
      )}
    </Routes>
  );
}

export default App;
