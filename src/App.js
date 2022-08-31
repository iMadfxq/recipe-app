import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route index element={<p>Hola</p>} />
    </Routes>
  );
}

export default App;
