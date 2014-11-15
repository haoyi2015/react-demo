/**
 *
 * @jsx React.DOM
 */

var React = require('react')

var Actions = require('../actions/Actions')

var Header = React.createClass({

  nextMonth: function(){
    Actions.nextMonth()
  },

  prevMonth: function(){
    Actions.prevMonth()
  },

  nextYear: function(){
    Actions.nextYear()
  },

  prevYear: function(){
    Actions.prevYear()
  },

  render: function(){

    return (
      <div className="calendar-head">
        <div className="title">{this.props.year}年 {this.props.month}月</div>
        <a className="btn prev-y" href="javascript:;" onClick={this.prevYear}>
          <span className="arrow arrow-left"></span>
          <span className="arrow arrow-left second"></span>
        </a>
        <a className="btn next-y" href="javascript:;" onClick={this.nextYear}>
          <span className="arrow arrow-right second"></span>
          <span className="arrow arrow-right"></span>
        </a>
        <a className="btn prev-m" href="javascript:;" onClick={this.prevMonth}>
          <span className="arrow arrow-left"></span>
        </a>
        <a className="btn next-m" href="javascript:;" onClick={this.nextMonth}>
          <span className="arrow arrow-right"></span>
        </a>
      </div>
    )
  }
})


module.exports = Header;
