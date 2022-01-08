import React, { Component } from 'react'
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar
} from 'react-native'

export default class SplashScreen extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //     timePassed: false
    //     };
    //   }
    //   componentDidMount () {
    //     setTimeout(() => this.setState({timePassed: true}), 1000)
    //  }
      

    render() {
        return (
            
            <View style={[styles.container]}>
                <StatusBar barStyle="dark-content" backgroundColor="#fff" />
                <Image
                    style={styles.imgCenter}
                    source={require('../../assets/nedlogo.png')}
                />
                <ActivityIndicator size="large" color="#29a9df" />
                <Text style={{ marginTop: 20 }}>Please wait...</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    imgCenter: {
        width: 200,
        height: 201,
        marginBottom: 50
    }
})
