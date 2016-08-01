import React, { Component} from 'react';
import { AppRegistry,View} from 'react-native';
import TextBarAdd from './components/textbar_add.js'
class FlexDims extends Component {
  constructor(props) {
  	super(props);
    this.state = { items : [] , text : 'init'};
  }

  onAdd(item) {
    console.log("index.android.js: onAdd()");
    console.log("The item is going to be added. ");
  }

  render() {
    console.log("index.android.js: render()");
    return (
        // adding the top level TextBarAdd

        <View style={{flex:1}}>
          <View>
            <TextBarAdd onAdd={this.onAdd}/>
          </View>

          <View>

          </View>
        </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject1', () => FlexDims);
