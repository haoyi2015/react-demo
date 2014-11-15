/**
 *
 * @jsx React.DOM
 */

var React = require('react')

var DayItem = require('./DayItem.react')

var WeekItem = React.createClass({

  render: function(){

    var days = this.props.days
    var len = days.length
    var tds = []

    for (var i = 0; i < len; i++) {
      tds.push(<DayItem day={days[i]}/>) 
    }

    return (
      <tr>{tds}</tr>
    )
  }

})


module.exports = WeekItem
