import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
import { getVisibleTodos } from '../reducers/index';
import { fetchTodos } from '../api/index';
import TodoList from './TodoList';

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, recieveTodos } = this.props;
    fetchTodos(filter).then(todos => recieveTodos(filter, todos));
  }

  render() {
    const { toggleTodo, ...rest } = this.props;
    return <TodoList {...rest} onTodoClick={toggleTodo} />;
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
  ...actions
};

VisibleTodoList = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(VisibleTodoList)
);

export default VisibleTodoList;
