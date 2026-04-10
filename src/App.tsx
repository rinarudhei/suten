import { Routes, Route } from 'react-router-dom';
import './App.scss';
import SutenGame from './components/templates/SutenGame';

function App() {
  return (
    <Routes>
      <Route path='/' element={<SutenGame />} />
    </Routes>
  );
}

export default App;
