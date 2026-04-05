import { Routes, Route } from 'react-router';
import './App.scss';
import GamePiece from './components/atoms/GamePiece';

function App() {
  return (
    <Routes>
      <Route path='/' element={<></>} />
      <Route path='/big-bang-theory' element={<></>} />
      {import.meta.env.DEV && (
        <Route
          path='/playground'
          element={<GamePiece type='spock' isHoverable size='lg-3' />}
        />
      )}
    </Routes>
  );
}

export default App;
