import React, { useState } from 'react';
import { connect } from 'react-redux';

function Home(props) {
  console.log(props);
  const [text, setText] = useState();

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    setText('');
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text || ''} onChange={onChange}></input>
      </form>
      <ul></ul>
    </>
  );
}

function getCurrentState(state) {
  //TODO: getCurrentState()을 이용해 store로 부터 state를 가져다 줄 것이다.
  return { toDos: state };
}

export default connect(getCurrentState)(Home);
//TODO: store와 component를 connect하기
//? mapStateToProps를 사용한다는 것은 Redux의 store로 부터 무엇을 가져오기 위함이다.
