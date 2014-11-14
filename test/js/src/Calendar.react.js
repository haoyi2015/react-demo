var util = {
  
  getDaySize: function(month, year){
    var curDate = new Date()
    
    month = month || curDate.getMonth() + 1
    year = year || curDate.getFullYear()

    var d = new Date(year, month, 0)

    return d.getDate()
  },

  getFirstLast: function(month, year){
    var curDate = new Date()
    
    month = month - 1 || curDate.getMonth() 
    year = year || curDate.getFullYear()

    var first = new Date(year, month, 1)
    var last = new Date(year, month + 1, 0)

    return [first.getDay(), last.getDay()]
  }

}

var config = {

  order: [1, 2, 3, 4, 5, 6, 0]

}

var Header = React.createClass({

  render: function(){

    return (
      <div className="calendar-head">
        <div className="title">2013年 12月</div>
        <a className="btn prev-y" href="javascript:;">
          <span className="arrow arrow-left"></span>
          <span className="arrow arrow-left second"></span>
        </a>
        <a className="btn next-y" href="javascript:;">
          <span className="arrow arrow-right second"></span>
          <span className="arrow arrow-right"></span>
        </a>
        <a className="btn prev-m" href="javascript:;">
          <span className="arrow arrow-left"></span>
        </a>
        <a className="btn next-m" href="javascript:;">
          <span className="arrow arrow-right"></span>
        </a>
      </div>
    )
  
  }

})

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




function getState() {

  var size = util.getDaySize() // 本月有几天
  var firstLast = util.getFirstLast()
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

  return {
    days: days
  }
}

var Calendar = React.createClass({

  getInitialState: function() {
    return getState()
  },

  render: function() {

    return (
      <div className="calendar">
         <Header />
         <Main days={this.state.days} />
      </div>
    )
  }

});


React.renderComponent( 
  <Calendar/> ,
  document.getElementById('box')
);