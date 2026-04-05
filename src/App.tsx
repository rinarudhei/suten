import { Routes, Route } from 'react-router';
import './App.scss';
import Button from './components/atoms/Button';

function App() {
  return (
    <Routes>
      <Route path='/' element={<></>} />
      <Route path='/big-bang-theory' element={<></>} />
      {import.meta.env.DEV && (
        <Route
          path='/playground'
          element={<Button variant='primary'>PLAY AGAIN</Button>}
        />
      )}
    </Routes>
  );
}

export default App;
