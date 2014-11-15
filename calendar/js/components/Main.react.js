/**
 *
 * @jsx React.DOM
 */

var React = require('react')


var MainHeader = require('./MainHeader.react')


var WeekItem = require('./WeekItem.react')


var Main = React.createClass({

  render: function(){
    var days = this.props.days
    var trsLen = Math.ceil(days.length / 7)

    var trs = []

    for (var i = 0; i < trsLen; i++) {
      var weekDays = days.slice(i*7, (i+1)*7)
      trs.push(<WeekItem days={weekDays} />)
    }

    return (
      <div className="calendar-main">
        <table>
          <MainHeader />
          <tbody>
            {trs}
          </tbody>
        </table>
      </div>
    )
  }
})

module.exports = Main

