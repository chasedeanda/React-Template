var React = require('react');

var AddItem = React.createClass({
	getInitialState: function(){
		return{
			newItem: ''
		}
	},
	handleChange: function(e){
		this.setState({
			newItem: e.target.value
		})
	},
	handleSubmit: function(e){
		if(e.keyCode === 13){
			this.props.add(this.state.newItem);
			this.setState({
				newItem: ''
			})
		}
	},
	render: function(){
		return (
			<div>
			<input type="text" className="form-control" placeholder="Enter Keyword" value={this.state.newItem} onChange={this.handleChange} onKeyDown={this.handleSubmit} />
			</div>
		)
	}

});

module.exports = AddItem;

/*
First thing, as always, is require('react'). From here on out that step will be assumed
Create your AddItem component with React.createClass and then export it using module.exports = AddItem; so that we can require our AddItem component from other files later on.

The purpose of this component is it's going to keep track of its own state which is going to be just the input box value. Whenever someone types in a new value into this input box and hits enter, AddItem will invoke a method that will be passed to it from its parent component (as props) and we'll pass that method the current state of the component (or the new item we wan to add).

use getInitialState to set an initial state of your component with a newItem property whose value is an empty string
Create a handleChange method that is going to use setState to update newItem with whatever is in the input box
Create a handleSubmit method that will be called on onKeyDown that checks to see if the current key pressed was the enter key (e.keyCode === 13) and if it was, call the add method on AddItem's props object and pass it the current state of newItem. Once you invoke add then reset the newItem state to an empty string.
Now we have a few helper methods the only thing left to do is to use render to set up what the UI for this component will look and behave like.

Create a render method that returns an opening and closing <div> tag.
Inside the <div> create an input box with a type of text a className of form-control and whose properties are tied to the state and helper methods we created above. hint: you'll add a value, onKeyDown, and onChange property to your input box.
Check your console and see if there are any errors. If there aren't, you're good to move to the next step. What might happen is once we get everything wired up you'll discover a few bugs in your AddItem component, but you can fix those later.*/