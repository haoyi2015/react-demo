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


var Header = React.createClass({displayName: 'Header',

  render: function(){

    return (
      React.createElement("div", {className: "calendar-head"}, 
        React.createElement("div", {className: "title"}, "2013年 12月"), 
        React.createElement("a", {className: "btn prev-y", href: "javascript:;"}, 
          React.createElement("span", {className: "arrow arrow-left"}), 
          React.createElement("span", {className: "arrow arrow-left second"})
        ), 
        React.createElement("a", {className: "btn next-y", href: "javascript:;"}, 
          React.createElement("span", {className: "arrow arrow-right second"}), 
          React.createElement("span", {className: "arrow arrow-right"})
        ), 
        React.createElement("a", {className: "btn prev-m", href: "javascript:;"}, 
          React.createElement("span", {className: "arrow arrow-left"})
        ), 
        React.createElement("a", {className: "btn next-m", href: "javascript:;"}, 
          React.createElement("span", {className: "arrow arrow-right"})
        )
      )
    )
  
  }

})

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


var config = {

  order: [1, 2, 3, 4, 5, 6, 0]

}


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

var Calendar = React.createClass({displayName: 'Calendar',

  getInitialState: function() {
    return getState()
  },

  render: function() {

    return (
      React.createElement("div", {className: "calendar"}, 
         React.createElement(Header, null), 
         React.createElement(Main, {days: this.state.days})
      )
    )
  }

});


React.renderComponent( 
  React.createElement(Calendar, null) ,
  document.getElementById('box')
);