import React from 'react';
import TodoItem from './todo-item'

export default React.createClass({

  render: function () {
    var todoList = this.props.todos.map((todo, index) => {
      if (!todo.done || (todo.done && this.props.displayComplete)) {
        var onClick = () => {
          this.props.onTodoClick(index);
        }
        return (
          <TodoItem
            todo={todo}
            position={index + 1}
            onClick={onClick}
            key={"todo"+index}
          />
        );
      }
    });
    return (
      <div>
        {todoList}
      </div>
    );
  }
});
