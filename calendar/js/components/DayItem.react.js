/**
 *
 * @jsx React.DOM
 */

var React = require('react')

var DayItem = React.createClass({

  render: function(){
    return (
      <td>{this.props.day || ''}</td>
    )
  }

})

module.exports = DayItem
