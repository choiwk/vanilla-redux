import { act } from 'react-dom/test-utils';
import { createStore } from 'redux';

function todoList() {
  const ADD_TODO = 'ADD_TODO';
  const DELETE_TODO = 'DELETE_TODO';

  const todoReducer = (state = [], action) => {
    console.log(action);
    switch (action.type) {
      case ADD_TODO:
        return [];
      case DELETE_TODO:
        return [];
      default:
        return state;
    }
  };

  const todoStore = createStore(todoReducer);

  const onSubmit = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const toDo = input.value;
    input.value = '';
    todoStore.dispatch({ type: ADD_TODO, text: toDo });
  };
  return (
    <>
      <h1>TodoList</h1>
      <input />
      <button onClick={onSubmit}>등록하기</button>
    </>
  );
}

export default todoList;
