import React from 'react';
import AppHeader from './app-header'
import TodoList from './todo-list'
import TodoInput from './todo-input'

export default React.createClass({
  getInitialState: function () {
    return {
      todos: []
    };
  },

  addTodo: function (task) {
    var newTodo = {task: task, done: false};
    var todos = [
      ...this.state.todos,
      newTodo
    ];
    this.setState({todos: todos})
  },

  toggleDone: function (index) {
    var todos = this.state.todos;
    todos[index].done = !todos[index].done;
    this.setState({todos: todos});
  },

  render: function () {
    return (
      <div className="app">
        <AppHeader
          title="T/D/A"
          tagline=">> reinventing todos <<"
        />
        <TodoInput onSubmit={this.addTodo}/>
        <br/><br/>
        <TodoList
          todos={this.state.todos}
          onTodoClick={this.toggleDone}
        />
      </div>
    );
  }
});
