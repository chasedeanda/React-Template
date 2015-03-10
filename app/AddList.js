var React = require('react'),
ColorPicker = require('./ColorPicker.js');

var AddList = React.createClass({
	propTypes:{
		listName: React.PropTypes.string
	},
	getInitialState: function(){
		return{
			listName: '',
			newItem: '',
			color: ''
		}
	},
	handleChange: function(e){
		this.setState({
			listName: e.target.value,
			newItem: {
				title: e.target.value,
				color: this.state.color
			}
		})
	},
	handleSubmit: function(){
		if(this.state.listName != ''){
			this.props.add(this.state.newItem);
			this.setState({
				listName: '',
				newItem:{}
			})
		}
	},
	colorSelect:function(e){
		this.setState({
			color: e.target.className,
			newItem: {
				title: this.state.listName,
				color: e.target.className
			}
		})
	},
	render:  function(){
		var styles={
			button:{marginTop: 10,display:'block'}
		};
		return(
			<div className="col-md-6 nofloat center-block">
				<h3 className="text-center">Create New Category</h3>
				<input className="form-control" value={this.state.listName} type="text" placeholder="List Name" onChange={this.handleChange} required/>
				<ColorPicker color={this.state.color} colorSelect={this.colorSelect}/>
				<button className="btn btn-primary" style={styles.button} onClick={this.handleSubmit}>Submit</button>
			</div>
		)
	}
});

module.exports = AddList;

/*\This component is going to be fairly basic. It's going to just be (initially) an empty input box and a submit button. Whenever a user enters in information and clicks submit, this component will invoke a method on its parent component passing that method the name of the new list.

Create a new React component called AddList and then export it at the bottom of the file.
Set the initial state of this component to listName with an empty value.
Now, just as we did in the mini project, we need to update our state as the user types in the input field.

Create a handleChange method which will update the listName state of the component to whatever is being typed into the input field.
Create a handleSubmit method that will invoke the add method (which we're receiving as props from the parent component), passing that method the current state.
After you invoke add, passing it the current state, you're going to want to reset the current listName state to be an empty string.
So at this point we have our initial state, and we have our helper methods that are going to allow us to keep the initial state updated as well as add the list to the Parent component's List array.

The last thing we need to do is create a render method to tell React how we'd like to represent this component in the DOM.

Create a render method which will contain the following 1) An h3 tag with the text being "Create New List". To center text in bootstrap add a class of "text-center" 2) An input tag whose value is tied to our listName state and onChange will invoke our handleChange method we created earlier. 3) A button element that when the user clicks on it will invoke our handleSubmit method we built earlier. To make buttons look nice in bootstrap use the class "btn btn-primary"*/