import React, { Component} from 'react';
import { AppRegistry,View} from 'react-native';
import TextBarAdd from './components/textbar_add.js'
class FlexDims extends Component {
  render() {
    return (
        // adding the top level TextBarAdd
        <TextBarAdd />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject1', () => FlexDims);
