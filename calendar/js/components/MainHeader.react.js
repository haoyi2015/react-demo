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


module.exports = MainHeader
