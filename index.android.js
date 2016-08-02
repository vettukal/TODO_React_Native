import React, { Component} from 'react';
import { AppRegistry,View, ListView} from 'react-native';
import TextBarAdd from './components/textbar_add.js';
import TODOList from './components/TODOList.js';
class FlexDims extends Component {
  constructor(props) {
  	super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    console.log("inside TODOList constructor "+this.props.items);
    this.state = {
      items : [
        'John Rambo', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ] , text : 'init',
      dataSource: ds.cloneWithRows([
        'John Rambo', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };

  }

  onAdd(item) {
    //const ds1 = this.state.ds;
    console.log("index.android.js: onAdd()");
    console.log("The item is going to be added. ");
    console.log(item.text);
    curItems = this.state.items;
    curItems.push(item.text);
    this.setState({items : curItems, text : ''});
  }

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
