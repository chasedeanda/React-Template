var React = require('react');

var List = React.createClass({
	render: function(){
		var styles = {
		  uList: {
		    paddingLeft: 0,
		    listStyleType: "none"
		  },
		  listGroup: {
		    margin: '5px 0',
		    borderRadius: 5
		  },
		  removeItem: {
		    fontSize: 15,
		    position: "absolute",
		    top: 15,
		    right: 10,
		    cursor: "pointer",
		    color: "rgb(222, 79, 79)"
		  },
		  todoItem: {
		    fontSize: 17
		  }
		};
		var listItems = this.props.items.map(function(item, index){
			return(
				<li className="list-group-item"
					style={styles.listGroup}
					key={index}>
					<span style={styles.todoItem}>
						{item}
					</span>
					<span className="glyphicon glyphicon-trash"
						style={styles.removeItem}
						title="Delete Keyword"
						onClick={this.props.remove.bind(null, index)}>
					</span>
				</li>
			)
		}.bind(this));
		return(
			<ul style={styles.uList}>
				{listItems}
			</ul>
		)
	}
})

module.exports = List;


/*
Now that we have our render method and basic styles, let's create an array of <li> elements that contains an X icon to delete the item and also the item's text. Usually how you would do this is to have a for loop which loops over every item in the list. With React however it's common practice to use the built in map method. All map does is it iterates over a list and returns you an array after modifying every item in that list. As mentioned earlier we'll use map to create our list of <li> tags for our list.

create a variable called listItems as a variable inside of the render method which is going to be the result of mapping over this.props.items. A few tips
Your <li> element will need to have a className of list-group-item a style of {styles.listGroup}, and a key of index which is the index of the map you're currently iterating over and can be accessed as the second paramter of your map.
Inside the <li> tag you'll have two span elements. The first one will have a className of glyphicon glyphicon-remove a style attribute of {styles.removeItem} and a onClick handler which will be bound to a remove method which is going to be coming in as a prop from the parent component. You'll need to use bind and pass in null and the index from the paremeters of your map function. The second span element will have a style of {styles.todoItem} and will just have the actual {item} itself inside the span.
The last gotcha is that when we use map, the keyword this is no longer bound to what it was initially. In order to fix this you'll have to add .bind(this) on the end of your map invocation in order to keep the keyword this bound to what it is bound to outside of the map function.*/