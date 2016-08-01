import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Image } from 'react-native';
import Button from 'react-native-button';

class TextBarAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
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

        <View style={{flex:2, justifyContent: 'center', flexDirection:'row'}}>
          <Button
             style={{fontSize: 20, color: 'green'}}
             styleDisabled={{color: 'red'}}
             onPress={() => this.props.onAdd({text : 'Button press'})}>
             Press Me!
         </Button>
        </View>
      </View>


    );
  }
}

export default TextBarAdd;
