import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import CountNumber from './VanillaReduxNote/countNumber';
import TodoList from './VanillaReduxNote/todoList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/count" element={<CountNumber />} />
        <Route path="todo" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
