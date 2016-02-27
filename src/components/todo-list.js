import React from 'react';
import TodoItem from './todo-item'


export default React.createClass({

  render: function () {
    var todoList = this.props.todos.map((todo, index) => {
      return (
        <TodoItem
          todo={todo}
          position={index + 1}
          key={"todo"+index}
        />
      );
    });
    return (
      <div>
        {todoList}
      </div>
    );
  }
});
