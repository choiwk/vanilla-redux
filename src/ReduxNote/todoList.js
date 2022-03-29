import { createStore } from 'redux';

function todoList() {
  const ADD_TODO = 'ADD_TODO';
  const DELETE_TODO = 'DELETE_TODO';
  const DO_NOT_MUTATE = 'DO_NOT_MUTATE';

  const todoReducer = (state = [], action) => {
    //TODO : store의 state를 수정할 수 있는 방법은 action을 보내는 것 뿐!
    switch (action.type) {
      case DO_NOT_MUTATE:
        return state.push(action.text); //! X push로 기존에 있던 state값 변경 하지 말 것 !
      case ADD_TODO:
        return [...state, { text: action.text, id: Date.now() }]; //? 새로운 state를 만들고 return할 것 !
      case DELETE_TODO:
        return [];
      default:
        return state;
    }
  };

  const todoStore = createStore(todoReducer);
  //   todoStore.subscribe(() => console.log(todoStore.getState()));

  const paintTodos = () => {
    const toDos = todoStore.getState();
    const ul = document.getElementById('todoList');
    ul.innerHTML = '';
    toDos.forEach((el) => {
      const li = document.createElement('li');
      li.id = el.id;
      li.innerText = el.text;
      ul.appendChild(li);
    });
  };

  todoStore.subscribe(paintTodos);

  const addTodo = (text) => {
    todoStore.dispatch({ type: ADD_TODO, text });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const toDo = input.value;
    input.value = '';
    addTodo(toDo);
  };
  return (
    <>
      <h1>TodoList</h1>
      <input />
      <button onClick={onSubmit}>등록하기</button>
      <ul id="todoList"></ul>
    </>
  );
}

export default todoList;
