import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

function Detail({ toDos }) {
  const params = useParams().id;
  const toDo = toDos.find((toDo) => toDo.id === parseInt(params));

  return (
    <>
      <h1>{toDo.text}</h1>
      <h5>Created At : {toDo.id}</h5>
    </>
  );
}

const mapStateToProps = (state) => {
  return { toDos: state };
};

export default connect(mapStateToProps)(Detail);
