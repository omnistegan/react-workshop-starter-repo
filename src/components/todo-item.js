import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <div>
        <div>
          >I> {this.props.position + 1}
        </div>
        <div>
          >D> {this.props.todo.done ? 'Done' : 'Todo'}
        </div>
        <div>
          >T> {this.props.todo.task}
        </div>
      </div>
    );
  }
});
