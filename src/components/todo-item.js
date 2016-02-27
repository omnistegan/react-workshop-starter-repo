import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <div>
        <div>
        Task: {this.props.todo.task}
        </div>
        <div>
        Done: {this.props.todo.done ? 'Done' : 'Still Todo'}
        </div>
        <br/>
      </div>
    );
  }
});
