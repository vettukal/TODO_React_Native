import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View } from 'react-native';
import TODOListItem from './todolist_item.js'

export default class TODOList extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }

  componentWillReceiveProps(nextProps) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    console.log(nextProps.items);
    this.state = {
      dataSource: ds.cloneWithRows(nextProps.items)
    };
  }


  render() {
    return (
      <View style={{paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <TODOListItem textData={rowData} onDelete={this.props.onDelete}/>}
        />
      </View>
    );
  }
}
