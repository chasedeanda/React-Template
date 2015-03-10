var React = require('react'),
	AddItem = require('./AddItem'),
	List = require('./List');

var ListContainer = React.createClass({
	propTypes:{
		title: React.PropTypes.string.isRequired,
		index: React.PropTypes.number.isRequired,
		color: React.PropTypes.string.isRequired
	},
	getInitialState: function(){
		return{
			list: []
		}
	},
	handleAddItem: function(newItem){
		var items = newItem.trim().split(',');
		this.setState({
			list: this.state.list.concat(items)
		})
	},
	handleRemoveItem: function(index){
		var arraytoSplice = this.state.list;
		arraytoSplice.splice(index, 1);
		this.setState({
			list: arraytoSplice
		})
	},
	render: function(){
		var styles = {
		  container: {
		    border: "1px solid rgb(208, 208, 208)",
		    marginTop: 10,
		    marginBottom: 10,
		    borderRadius: 5,
		    paddingRight: 15,
  			paddingLeft: 15
		  },
		  remove: {
		  	position: 'absolute',
		    top: 30,
		    right: 30,
		    color: "#ffffff",
		    float: "left",
		    cursor: 'pointer'
		  }
		};
		return(
			<div className="col-sm-6">
		        <div className={this.props.color} style={styles.container}>
		          <h3 className="text-center">{this.props.title}</h3>
		          <span className="glyphicon glyphicon-remove"
						style={styles.remove}
						title="Delete List"
						onClick={this.props.remove.bind(null, this.props.index)}>
					</span>
		          <AddItem add={this.handleAddItem}/>
		          <List items={this.state.list} remove={this.handleRemoveItem}/>
		        </div>
		      </div>
		)
	},
	componentWillMount: function(){
		console.log(this.props.index)
	}
});

module.exports = ListContainer;

/*
This component is going to keep track of our overall todo list array.

use getInitialState and return a list property whose value is an empty array.
Now that our initial list is set up, we're going to have two helper methods. One called handleAddItem which takes in a new item and adds that to our list array and the other a handleRemoveItem which takes in an index and removes that specific index from our list array.

create the handleAddItem method which takes in an item as its parameter and then resets the list state adding that new item to the list. remember, you should treat your state as if it's immutable. Don't do this this.state.list.push(newItem), instead use this.setState.
create a handleRemoveItem method that takes in an index then splices that index out of our list state. again don't all splice directly on this.state.list, instead create a reference to this.state.list and splice that then reset the list state with that new spliced array.
Now that we have our helper methods set up we need to use render to specify what the UI will look like. I'll give you the intial UI at first because it's a lot of bootstrap markup then you can render the AddItem and List component.

--------------------------------------------------------------------------------------------------------------------------
Head over to your ListContainer.js file because we just need to make some minor changes.

Since we're going to have multiple lists stacking next to each other, we no longer need to offset our one list.

Remove the col-md-offset-3 from your className inside your render function.
Another small change we need to make is with the styling. Because we're going to have multiple lists stacked side by side, it would make more sense to put borders around each one.

Add the following object as a variable in your render method.
var styles = {
  container: {
    border: "1px solid rgb(208, 208, 208)",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5
  }
};
Now, add the container style to your div with the classname of col-sm-12 in your render method.
Now all of our todo lists will have some spacing between them as well as a border around them.

The very last thing we want to do in our ListContainer.js file is to make the names of our Todolists dynamic. Right now, all of our Todo Lists are titled "Todo List". That's pretty lame. As we know from our AddList component we just made, we'll be specifying the name of each List when we make our list. This will be passed as a title property on the props object of ListContainer.

Swap out "Todo List" with the title property on the props object.






*/