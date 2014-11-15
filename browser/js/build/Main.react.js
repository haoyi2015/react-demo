var MainHeader = React.createClass({displayName: 'MainHeader',

  render: function(){

    return (
        React.createElement("thead", null, 
          React.createElement("tr", null, 
            React.createElement("th", null, "一"), 
            React.createElement("th", null, "二"), 
            React.createElement("th", null, "三"), 
            React.createElement("th", null, "四"), 
            React.createElement("th", null, "五"), 
            React.createElement("th", null, "六"), 
            React.createElement("th", null, "日")
          )
        )
    )
  }
})


var DayItem = React.createClass({displayName: 'DayItem',

  render: function(){

    return (
      React.createElement("td", null, this.props.day || '')
    )
  }

})

var WeekItem = React.createClass({displayName: 'WeekItem',

  render: function(){

    var days = this.props.days
    var len = days.length
    var tds = []

    for (var i = 0; i < len; i++) {
      tds.push(React.createElement(DayItem, {day: days[i]})) 
    }

    return (
      React.createElement("tr", null, tds)
    )
  }

})


var Main = React.createClass({displayName: 'Main',

  render: function(){

    var days = this.props.days
    var trsLen = Math.ceil(days.length / 7)

    var trs = []

    for (var i = 0; i < trsLen; i++) {
      var weekDays = days.slice(i*7, (i+1)*7)
      trs.push(React.createElement(WeekItem, {days: weekDays}))
    }

    return (
      React.createElement("div", {className: "calendar-main"}, 
        React.createElement("table", null, 
          React.createElement(MainHeader, null), 
          React.createElement("tbody", null, 
            trs
          )
        )
      )
    )
  }
})


