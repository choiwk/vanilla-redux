import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import CountNumber from './ReduxNote/countNumber';
import TodoList from './ReduxNote/todoList';

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
