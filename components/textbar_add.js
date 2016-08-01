import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

class TextBarAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10, flex:1, flexDirection:'row'}}>
        <TextInput
          style={{height: 40, flex:2}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
      </View>
    );
  }
}

export default TextBarAdd;
