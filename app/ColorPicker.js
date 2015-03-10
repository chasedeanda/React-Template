var React = require('react');

var ColorPicker = React.createClass({
	getInitialProps:function(){
		return{
			color: ''
		}
	},
	render: function(){
		return(
			<div>
				<span className="colorPreview">List Background Color:<div className={this.props.color}></div></span>
				<div className="colorCont">
					<span className="gray" onClick={this.props.colorSelect}></span>
					<span className="blue" onClick={this.props.colorSelect}></span>
					<span className="green" onClick={this.props.colorSelect}></span>
					<span className="tan" onClick={this.props.colorSelect}></span>
					<span className="red" onClick={this.props.colorSelect}></span>
				</div>
			</div>
		)
	}
});

module.exports = ColorPicker;

/*The very last step you'll need to do is make it so each Todolist can now have its own background color which will be specified when the user creates the new todolist.*/