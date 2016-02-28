import React from 'react';
import AppHeader from './app-header'
import TodoList from './todo-list'
import TodoInput from './todo-input'
import ToggleButton from './toggle-button'

export default React.createClass({
  getInitialState: function () {
    return {
      todos: [],
      displayComplete : true
    };
  },

  addTodo: function (task) {
    var newTodo = {task: task, done: false};
    var todos = [
      newTodo,
      ...this.state.todos
    ];
    this.setState({todos: todos, displayComplete: this.state.displayComplete})
  },

  toggleDone: function (index) {
    var todos = this.state.todos;
    todos[index].done = !todos[index].done;
    this.setState({todos: todos, displayComplete: this.state.displayComplete});
  },

  toggleDisplayComplete: function () {
    var displayComplete = !this.state.displayComplete;
    this.setState({todos: this.state.todos, displayComplete: displayComplete})
  },

  render: function () {
    return (
      <div className="app">
        <AppHeader title="T\D/A" tagline=">> unabashedly monospace <<"/>
        <ToggleButton displayComplete={this.state.displayComplete} onClick={this.toggleDisplayComplete}/>
        <TodoInput onSubmit={this.addTodo}/>
        <br/><br/>
        <TodoList
          todos={this.state.todos}
          displayComplete={this.state.displayComplete}
          onTodoClick={this.toggleDone}
        />
      </div>
    );
  }
});
