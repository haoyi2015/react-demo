/**
 *
 * @jsx React.DOM
 */

var React = require('react')

var MainHeader = React.createClass({

  render: function(){

    return (
        <thead>
          <tr>
            <th>一</th>
            <th>二</th>
            <th>三</th>
            <th>四</th>
            <th>五</th>
            <th>六</th>
            <th>日</th>
          </tr>
        </thead>
    )
  }
})


var DayItem = React.createClass({

  render: function(){
    return (
      <td>{this.props.day || ''}</td>
    )
  }

})

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


