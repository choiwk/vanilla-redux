import { createStore } from 'redux';

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const number = document.querySelector('span');
number.innerHTML = 0;

//TODO: reducer, action 생성
//! const reducer 은 유일하게 data를 수정할 수 있는 공간 !
const reducer = (count = 0, action) => {
  // state값을 수정함
  if (action.type === 'ADD') {
    return count + 1;
  } else if (action.type === 'MINUS') {
    return count - 1;
  }
  return count;
};

const store = createStore(reducer);

const onChangeCount = () => {
  number.innerText = store.getState(number);
};
store.subscribe(onChangeCount);
//TODO: reducer 버튼 기능 부여

const add = document.getElementById('add');
const minus = document.getElementById('minus');

// add.addEventListener('click', () => store.dispatch({ type: 'ADD' }));
// minus.addEventListener('clcik', () => store.dispatch({ type: 'MINUS' }));

const handleAdd = () => {
  store.dispatch({ type: 'ADD' });
};
console.log(add);
const handleMinus = () => {
  store.dispatch({ type: 'MINUS' });
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
