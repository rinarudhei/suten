import { Routes, Route } from 'react-router';
import './App.scss';
import GameStepOne from './components/molecules/GameStepOne';
import GameContainer from './components/organisms/GameContainer';

function App() {
  return (
    <Routes>
      <Route path='/' element={<></>} />
      <Route path='/big-bang-theory' element={<></>} />
      {import.meta.env.DEV && (
        <Route
          path='/playground'
          element={
            <GameContainer>
              <GameStepOne />
            </GameContainer>
          }
        />
      )}
    </Routes>
  );
}

export default App;
