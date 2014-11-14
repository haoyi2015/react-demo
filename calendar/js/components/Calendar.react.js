function getState() {
	return {

	}
}

var Calendar = React.createClass({

	getInitialState: function() {
		return getState();
	},

	render: function() {
		return (
			<div>
				<strong>哈哈</strong>
			</div>
		);
	},

	_onChange: function() {
		this.setState(getState());
	}

});

module.exports = Calendar;
