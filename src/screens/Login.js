import React, { Component } from 'react'
import { StyleSheet, Text, View, Image,
    TouchableWithoutFeedback,StatusBar,
    TextInput, SafeAreaView, Keyboard, TouchableOpacity,
    KeyboardAvoidingView, KeyboardAwareScrollView } from 'react-native'


  export default class Login extends Component {
    render() {
      return(
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="dark-content" backgroundColor="#fff" />
          <KeyboardAvoidingView behavior='padding' style={styles.container}>
              <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                  <View style={styles.logoContainer}>
                      <Image
                            style={styles.image}
                            source={require('../../assets/nedlogo.png')}
                        />
                        <Text style={styles.title}>Account Information</Text>
                  </View>
                  <View style={styles.infoContainer}>
                      <TextInput style={styles.input}
                        placeholder="Enter username/email"
                        placeholderTextColor='rgba(255,255,255,0.8)'
                        keyboardType="email-address"
                        returnKeyType='next'
                        autoCorrect={false}
                        onSubmitEditing={()=> this.refs.txtPassword.focus()}
                      />
                      <TextInput style={styles.input}
                        placeholder="Enter password"
                        placeholderTextColor='rgba(255,255,255,0.8)'
                        returnKeyType='done'
                        secureTextEntry
                        autoCorrect={false}
                        ref={"txtPassword"}
                      />
                      <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>Sign In</Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Text style={styles.forgot}>Forgot Password?</Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Text style={styles.signup}>Don't have an account? SIGN UP</Text>
                      </TouchableOpacity>
                  </View>
               </View>
              </TouchableWithoutFeedback>
              
          </KeyboardAvoidingView>
           
        </SafeAreaView>
        
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        
    },
    logoContainer:{
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      // backgroundColor: 'pink'
    },
    image:{
      width:150,
      height: 151
    }, 
    title:{
        color: '#f7c744',
        fontSize: 18,
        textAlign: "center",
        marginTop: 5,
        opacity: 0.9
    },
    infoContainer: {
      //position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      flex: 1,
      padding: 20,
      //backgroundColor: 'red'
    },
    input:{
      height:40,
      //backgroundColor:'rgba(255,255,255,0.2)',
      backgroundColor: '#e8e5e9',
      color: '#fff',
      marginBottom:20,
      paddingHorizontal: 10,
      width:"100%",
    },
    buttonContainer:{
      height:40,
      backgroundColor: '#09AFDF',
      paddingVertical:5,
      width:"100%",
    },
    buttonText:{
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18
    },
    forgot:{
      color:"black",
      fontSize:12,
      textAlign: "center",
      paddingTop: 20

    },
    signup:{
      color:"black",
      fontSize:14,
      textAlign: "center",
      paddingTop: 10
    }
})


//<KeyboardAvoidingView behavior='padding' style={styles.container}>
