import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

//? Provider : reducer의 state를 어떤 컴포넌트들에게 전달하고 싶은가에 대한 설정.

//? useSelector :reducer의 state의 값을 사용하고 싶을때 useSelector가 사용된다. 함수를 인자로 받는다.

//? useDispatch : reducer의 state의 값을 변경하고 싶을때 action에게 전달하여 state의 값을 바꾸는데 사용된다.

import '../ReactReduxNote/propsChaining.css';

function reducer(state, action) {
  // redux는 각각의 state의 변화를 불변하게 유지해야한다.
  const newState = { ...state }; //새로운 state를 만드는데 과거의 state를 복제한다. 복제본을 수정하면 불변성을 유지할 수 있다.
  console.log(newState.number);
  if (state === undefined) {
    return { number: 1 };
  }

  switch (action.type) {
    case 'INCREASE':
      newState.number++;
      return newState;
    default:
      return newState;
  }
}

const store = createStore(reducer);

function PropsChaining() {
  return (
    <div id="container">
      <h1>ROOT </h1>
      <div id="grid">
        <Provider store={store}>
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  );
}

function Left1() {
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Left1 : {number}</h1>
      <Left2></Left2>
      <button
        onClick={() => {
          dispatch({ type: 'INCREASE' });
        }}
      >
        +
      </button>
    </div>
  );
}

function Left2() {
  const number = useSelector((state) => state.number);
  return (
    <div>
      <h1>Left2 : {number + 5}</h1>
      <Left3></Left3>
    </div>
  );
}

function Left3() {
  return (
    <div>
      <h1>Left3 </h1>
    </div>
  );
}

function Right1() {
  return (
    <div>
      <h1>Right1 </h1>
      <Right2></Right2>
    </div>
  );
}

function Right2() {
  return (
    <div>
      <h1>Right2 </h1>
      <Right3></Right3>
    </div>
  );
}

function Right3() {
  return (
    <div>
      <h1>Right3 </h1>
    </div>
  );
}

export default PropsChaining;
