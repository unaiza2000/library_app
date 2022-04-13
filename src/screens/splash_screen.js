import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, StatusBar} from 'react-native';

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('Home');
    }, 2000);
  }

  render() {
    return (
      <View style={styles.MainView}>
        <Image
                style={styles.imgCenter}
                source={require('../../assets/nedlogo.png')}
            />
        <Text style={styles.Text}>Welcome to Engr. Abdul Kalam Library</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  imgCenter: {
    width: 200,
    height: 201,
    marginBottom: 50
},
Text:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#29a9df'

}
});

export default App;