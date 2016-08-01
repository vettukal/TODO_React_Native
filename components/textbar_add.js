import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import Button from 'react-native-button';

class TextBarAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  pressed() {
    console.log("Pressed locally");
  }

  _handlePress(event) {
    console.log('Pressed!');
  }

  render() {
    let pic = {
      uri: 'http://manual.mahara.org/en/1.10/_images/add.png'
    };

    return (
      <View style={{padding: 10, flex:1, flexDirection:'row'}}>
        <TextInput
          style={{height: 40, flex:8}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />

        <Button
          style={{borderWidth: 1, borderColor: 'blue', flex : 2}}
          onPress={this._handlePress}>
          Press Me!
        </Button>
      </View>


    );
  }
}

export default TextBarAdd;
