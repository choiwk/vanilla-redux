import { createStore } from 'redux';

function countNumber() {
  const reducer = (count = 0, action) => {
    switch (action.type) {
      case 'ADD':
        return count + 1;
      case 'MINUS':
        return count - 1;
      default:
        return count;
    }
  };

  const store = createStore(reducer);

  const onChange = () => {
    const number = document.getElementById('countNumber');
    number.innerHTML = 0;
    number.innerText = store.getState();
  };
  store.subscribe(onChange);

  const handleAdd = () => {
    store.dispatch({ type: 'ADD' });
  };

  const handleMinus = () => {
    store.dispatch({ type: 'MINUS' });
  };

  return (
    <>
      <h1>Redux countNumber</h1>
      <section>
        <div>
          <button onClick={() => handleAdd()}>PLUS</button>
          <span id="countNumber">0</span>
          <button onClick={() => handleMinus()}>MINUS</button>
        </div>
      </section>
    </>
  );
}

export default countNumber;
