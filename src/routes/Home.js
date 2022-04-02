import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import ReactTodo from '../components/ReactTodo';

function Home({ toDos, addToDo }) {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setText('');
    } else {
      addToDo(text);
      setText('');
    }
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text || ''} onChange={onChange} />
        <button>ADD</button>
      </form>
      <ul>
        {toDos.length === 0
          ? ''
          : toDos.map((toDo, id) => <ReactTodo {...toDo} key={id} />)}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  //TODO: getCurrentState()을 이용해 store로 부터 state를 가져다 줄 것이다.
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
//TODO: store와 component를 connect하기
//? mapStateToProps를 사용한다는 것은 Redux의 store로 부터 무엇을 가져오기 위함이다.
