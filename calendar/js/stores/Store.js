var AppDispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');

var util = require('../util')
var config = require('../config')


var DATA = {
  year: 2014,
  month: 11
}

var Store = merge(EventEmitter.prototype, {

  getYM: function(){
    var D = DATA
    return [ D.year, D.month ]
  },

  emitChange: function(){
    this.emit('change')
  }

});

AppDispatcher.register(function(payload) {
  var action = payload.action;
  var year = DATA['year']
  var month = DATA['month']

  switch (action.actionType) {
    case 'nextMonth':
      if (month == 12) {
        DATA['year'] ++
        DATA['month'] = 1
      } else {
        DATA['month'] ++
      }

      break

    case 'prevMonth':
      if (month == 1) {
        DATA['year'] --
        DATA['month'] = 12
      } else {
        DATA['month'] --
      }
      break

    case 'nextYear':
      DATA['year'] ++
      break

    case 'prevYear':
      DATA['year'] --
      break

    default:
      return true;
  }

  Store.emitChange();

  return true
});

module.exports = Store;