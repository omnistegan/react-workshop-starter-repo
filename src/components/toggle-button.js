import React from 'react';

export default React.createClass({

  render: function () {
    return (
      <div className='toggle-button' onClick={this.props.onClick}>
        {this.props.displayComplete ? 'Completed Shown' : 'Completed Hidden'}
        <br/><br/>
      </div>
    )
  }
});
