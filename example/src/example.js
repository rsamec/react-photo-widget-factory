var React = require('react');
var ReactDOM = require('react-dom');
var PhotoWidgetFactory = require('react-photo-widget-factory');

var App = React.createClass({
	render () {
		return (
			<div>
				<PhotoWidgetFactory />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
