function getTodoState() {
	return {

	}
}

var Calendar = React.createClass({

	getInitialState: function() {
		return getTodoState();
	},

	render: function() {
		return (
			<div>
				<strong>哈哈</strong>
			</div>
		);
	},

	_onChange: function() {
		this.setState(getTodoState());
	}

});

module.exports = Calendar;
