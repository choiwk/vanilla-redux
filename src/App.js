import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import CountNumber from './VanillaReduxNote/countNumber';
import TodoList from './VanillaReduxNote/todoList';
import Detail from './routes/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/count" element={<CountNumber />} />
        <Route path="todo" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
