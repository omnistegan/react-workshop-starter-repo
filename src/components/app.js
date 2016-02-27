import React from 'react';
import AppHeader from './app-header'

export default React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          task: "Finish the workshop",
          done: false
        }, {
          task: "Eat lunch",
          done: false
        }
      ]
    };
  },
  render: function () {
    return (
      <div>
        <AppHeader
          title="First ever react TODO app."
          tagline="We're reinventing todos again"
        />
        <div>Number of todos: {this.state.todos.length}</div>
      </div>
    );
  }
});
