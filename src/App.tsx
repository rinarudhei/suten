import { Routes, Route } from 'react-router';
import './App.scss';
import SutenGame from './components/templates/SutenGame';
import PreStepTwo from './components/organisms/PreStepTwo';

function App() {
  return (
    <Routes>
      <Route path='/' element={<SutenGame />} />
      <Route path='/big-bang-theory' element={<></>} />
      {import.meta.env.DEV && (
        <Route
          path='/playground'
          element={<PreStepTwo selectedPiece='paper' />}
        />
      )}
    </Routes>
  );
}

export default App;
