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
          &gt;I&lt; {this.props.position}
        </div>
        <div>
          &gt;D&lt; {this.props.todo.done ? 'Done' : 'Todo'}
        </div>
        <div>
          &gt;T&lt; {this.props.todo.task}
        </div>
        <br/>
      </div>
    );
  }
});
