import React from 'react';
import classNames from 'classnames'

export default React.createClass({

  render: function () {
    var className = classNames({
      'todo-item' : true,
      'done' : this.props.todo.done
    });

    return (
      <div className={className} onClick={this.props.onClick}>
        <div>
          >I> {this.props.position}
        </div>
        <div>
          >D> {this.props.todo.done ? 'Done' : 'Todo'}
        </div>
        <div>
          >T> {this.props.todo.task}
        </div>
        <br/>
      </div>
    );
  }
});
