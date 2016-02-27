import React from 'react';
import TodoItem from './todo-item'


export default React.createClass({

  render: function () {
    var todoList = this.props.todos.map((todo) => {
      return (
        <TodoItem todo={todo}/>
      );
    });
    return (
      <div>
        {todoList}
      </div>
    );
  }
});
