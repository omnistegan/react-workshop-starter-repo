import React from 'react';

export default React.createClass({
  getInitialState: function () {
    return { value: '' };
  },
  onChange: function (ev) {
    this.setState({
      value: ev.target.value
    });
  },
  onKeyDown: function (ev) {
    if (ev.key === "Enter" && this.state.value != '') {
      this.props.onSubmit(this.state.value);
      this.setState({value: ''});
    }
  },
  render: function () {
    return (
      <input
        value={this.state.value}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
      />
    );
  }
});
