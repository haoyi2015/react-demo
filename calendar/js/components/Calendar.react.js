/**
 *
 * @jsx React.DOM
 */


var React = require('react')

var util = require('../util')
var config = require('../config')

var Store = require('../stores/Store')
var Header = require('./Header.react')
var Main = require('./Main.react') 

function getDays(year, month){

  var size = util.getDaySize(month, year) // 本月有几天
  var firstLast = util.getFirstLast(month, year)
  var first = firstLast[0] // 本月第一天是周几
  var last = firstLast[1] // 本月最后一天是周几
  var before = config.order.indexOf(first)
  var after = 6 - config.order.indexOf(last)
  var days = []
  
  for (var i = 0; i < before; i++) {
    days.push(null)
  }
  
  for (var i = 0; i < size; i++) {
    days.push(i + 1)
  }
  
  for (var i = 0; i < after; i++) {
    days.push(null)
  }

  return days

}


function getState() {
  var date = Store.getYM()
  var year = date[0]
  var month = date[1]
  var days = getDays(year, month)

  return {
    year: year,
    month: month,
    days: days
  }
}

var Calendar = React.createClass({

  getInitialState: function() {
    return getState()
  },

  componentDidMount: function() {
    Store.on('change', this._onChange);
  },

  _onChange: function(){
    this.setState(getState())
  },

  render: function() {

    return (
      <div className="calendar">
         <Header year={this.state.year} month={this.state.month} />
         <Main days={this.state.days} />
      </div>
    )
  }
});

module.exports = Calendar;
