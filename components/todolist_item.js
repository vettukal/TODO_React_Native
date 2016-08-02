import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View } from 'react-native';
import Button from 'react-native-button';

export default class TODOListItem extends Component {

    constructor(props){
      super(props);

    }


    render(){
      // making a view with text and Button
      // TODO: add a checkbox 
      return(
        <View style={{flex:1, flexDirection:'row', alignItems: 'center', justifyContent: 'center' }}>

          <Text style={{flex:8, alignItems: 'center',justifyContent: 'center'}}>{this.props.textData}</Text>
          <Button
            style={{borderWidth: 1, borderColor: 'blue', flex : 2, alignItems: 'center'}}
            onPress={ () => this.props.onDelete(this.props.textData)
            }
          >
            Done!
          </Button>
        </View>
      );
    }

}
