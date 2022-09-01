import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home.component';
import CreateRecipe from './routes/CreateRecipe/CreateRecipe.component';
import Recipe from './routes/Recipe/Recipe.component';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/CreateRecipe" element={<CreateRecipe />} />
      <Route path="/Recipe/:id" element={<Recipe />} />
    </Routes>
  );
}

export default App;
