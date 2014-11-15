var util = {

  getDaySize: function(month, year) {
    var curDate = new Date()

    month = month || curDate.getMonth() + 1
    year = year || curDate.getFullYear()

    var d = new Date(year, month, 0)

    return d.getDate()
  },

  getFirstLast: function(month, year) {
    var curDate = new Date()

    month = month - 1 || curDate.getMonth()
    year = year || curDate.getFullYear()

    var first = new Date(year, month, 1)
    var last = new Date(year, month + 1, 0)

    return [first.getDay(), last.getDay()]
  }

}

module.exports = util