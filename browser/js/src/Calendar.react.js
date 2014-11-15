

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