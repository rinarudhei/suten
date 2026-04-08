import { Routes, Route } from 'react-router';
import './App.scss';
import SutenGame from './components/templates/SutenGame';

function App() {
  return (
    <Routes>
      <Route path='/' element={<SutenGame />} />
      <Route path='/big-bang-theory' element={<></>} />
    </Routes>
  );
}

export default App;
