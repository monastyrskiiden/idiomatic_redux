import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleTodo } from '../actions';
import { getVisibleTodos } from '../reducers/index';
import { fetchTodos } from '../api/index';
import TodoList from './TodoList';

class VisibleTodoList extends Component {
  componentDidMount() {
    fetchTodos(this.props.filter).then(todos => {
      console.log(this.props.filter, todos);
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      fetchTodos(this.props.filter).then(todos => {
        console.log(todos);
      });
    }
  }

  render() {
    return <TodoList {...this.props} />;
  }
}

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all';
  return {
    filter,
    todos: getVisibleTodos(state, filter)
  };
};

const mapDispatchToProps = {
  onTodoClick: toggleTodo
};

VisibleTodoList = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(VisibleTodoList)
);

export default VisibleTodoList;
