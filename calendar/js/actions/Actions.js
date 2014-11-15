
var AppDispatcher = require('../dispatcher/Dispatcher');

var Actions = {

  nextMonth: function() {
    AppDispatcher.handleViewAction({
      actionType: 'nextMonth',
    });
  },

  prevMonth: function(){
    AppDispatcher.handleViewAction({
      actionType: 'prevMonth',
    });    
  },

  nextYear: function(){
    AppDispatcher.handleViewAction({
        actionType: 'nextYear'
    })
  },

  prevYear: function(){
    AppDispatcher.handleViewAction({
        actionType: 'prevYear'
    })
  }


};

module.exports = Actions;