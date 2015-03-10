var React = require('react'),
ListContainer = require('./ListContainer.js'),
AddList = require('./AddList.js');

var App = React.createClass({
	getInitialState: function(){
		return{
			lists: []
		}
	},
	addNewList: function(newList){
		this.setState({
			lists: this.state.lists.concat([{title: newList.title, index: this.state.lists.length, color: newList.color}])
		})
	},
	removeList: function(index){
		console.log('index to splice: ', index)
		var arraytoSplice = this.state.lists;
		arraytoSplice.splice(index, 1);
		this.setState({
			lists: arraytoSplice
		})
	},
	render: function(){
		var componentList = this.state.lists.map(function(list, index){
			return(
			<ListContainer title={list.title} index={index} color={list.color} key={index} remove={this.removeList} />
			)
		}.bind(this));
		return(
			<div className="container">
				<div className="row">
					<AddList add={this.addNewList} />
					{componentList}
				</div>
			</div>
		)
	}
});

React.render(<App />, document.getElementById('app'));

/*
Require where you required react, require ListContainer.
Create a render method which has two <divs one nested in the other. The parent div should have a className of container and the nested one should have a className of row. That's just for our bootstrap styling
Inside of row render the ListContainer component.

-----------------------------------------------------------------------------------------------------------------------------------------------------------
In the Mini Project our App component was just a wrapper around our ListContainer component. However, now that we're adding the ability to add multiple lists, our App component will now be responsible for maintaining that new state.

Set the initial state of App to have a lists property whose value is an empty Array. This lists property will be the container for all of our todo lists we create.
Our lists array will eventually get filled up with different objects each representing their own state. This object will eventually contain the title, the index, and the background color of the component. But for now, we'll just have it contain the title and the index.

Create an addNewList method on our component. It will take in an object with a listName property. You are then going to add an object to the state. This object will have a key of newTitle (The value coming from the addNewList parameters) and another key of index (whose value is the current length of the lists array). Remember, treat your state as if it's immutable. Don't use this.state.lists.push(). Instead look into using something like concat.
Now we need to modify our render method.

Inside of our render method map over the current lists state and make an array full of ListContainer components saving them to a variable named componentList. This will get a little tricky. A few tips to remember 1) When you use map you'll love the binding of the this keyword inside your map. Consider using .bind(this) on the outside of your callback function you pass to map to fix this problem. 2) Our ListContainer component needs two things. A title and a key. If you're stuck on this step look up at addNewList and check what exactly we're pushing into our lists array.
Once you have your componentList variable, we'll need to swap out some stuff in the return statement of our render method in order to get the UI to be how we want.

Remove the current <ListContainer /> component and replace it with the AddList component (don't forget to pass it addNewList as an add attribute. Then under that, output your componentList variable using {componentList} that syntax.
That should do it for step one. You should now be able to create new Todo lists and each Todo list should be able to add invididual todo items. Once you get that working, let's look out how we'll get to the point of removing todo lists.

*/