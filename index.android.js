import React, { Component} from 'react';
import { AppRegistry,View, ListView} from 'react-native';
import TextBarAdd from './components/textbar_add.js';
import TODOList from './components/todolist.js';
class FlexDims extends Component {

  constructor(props) {
  	super(props);

    // Initialize a small set of TODOs
    this.state = {
      items : [
        'John Rambo', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ]
    };

  }

  onAdd(item) {
    console.log(item.text);
    curItems = this.state.items;
    curItems.push(item.text);
    this.setState({items : curItems, text : ''});
  }

  // This function is called when the Done button is clicked.
  // Item is removed and page is re-rendered.
  onDelete(item) {
    let delindex = this.state.items.indexOf(item);
    console.log("deleteElem: delindex: "+delindex);
  	let arr = this.state.items;
  	arr.splice(delindex,1);
  	console.log("Modified del arr: "+arr);
  	this.setState({items : arr});
  }

  render() {
    console.log("index.android.js: render()");
    console.log(this.state.items);
    return (
        // adding the top level TextBarAdd
        <View style={{flex:1}}>
          <View>
            <TextBarAdd onAdd={this.onAdd.bind(this)}/>
          </View>


          <View>
            <TODOList items={this.state.items} onDelete={this.onDelete.bind(this)}/>
          </View>
        </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject1', () => FlexDims);
