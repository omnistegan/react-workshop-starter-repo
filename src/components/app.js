import React from 'react';
import AppHeader from './app-header'
import TodoList from './todo-list'

export default React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          task: "Finish the workshop",
          done: false
        }, {
          task: "Eat lunch",
          done: true
        }
      ]
    };
  },
  render: function () {
    return (
      <div>
        <AppHeader
          title="T/D/A"
          tagline=">> reinventing todos <<"
        />
        <TodoList
          todos={this.state.todos}
        />
      </div>
    );
  }
});
