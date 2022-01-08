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
        height: 200,
        marginBottom: 50
    }
})
