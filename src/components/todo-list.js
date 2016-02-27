import React from 'react';
import TodoItem from './todo-item'


export default React.createClass({

  render: function () {
    var todoList = this.props.todos.map((todo, index) => {
      return (
        <div>
          <TodoItem todo={todo} position={index}/>
          <br/>
        </div>
      );
    });
    return (
      <div>
        {todoList}
      </div>
    );
  }
});
