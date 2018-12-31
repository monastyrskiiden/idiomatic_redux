import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleTodo } from '../actions';
import { getVisibleTodos } from '../reducers/index';
import TodoList from './TodoList';

const mapStateToProps = (state, { match }) => ({
  todos: getVisibleTodos(state, match.params.filter || 'all')
});

const mapDispatchToProps = {
  onTodoClick: toggleTodo
};

const VisibleTodoList = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoList)
);

export default VisibleTodoList;
