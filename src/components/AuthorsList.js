//screen for showing all searched authors
import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import {Card} from 'react-native-shadow-cards';
import { withNavigation } from 'react-navigation'; 

const AuthorsList  = ({results, navigation}) => {
    if(!results.length){
        return null;
    }

    return(
        <View style={styles.container}>
            <FlatList 
                data={results}
                showsVerticalScrollIndicator ={false}
                keyExtractor={(result) => result.id }  
                renderItem={({item}) => {
                    return (
                        <View style={styles.container}>
                            <Card style={{padding: 10, margin: 10, height: 50}}>
                                <TouchableOpacity  onPress={()=>navigation.navigate('AuthorResultsShow')} > 
                                  <Text style={styles.text}>{item.volumeInfo.authors}</Text>
                                </TouchableOpacity>
                            </Card>
                        </View>
                    )
                 }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:10,
        backgroundColor: 'white'
    },
    text:{
        fontWeight: 'bold',
        color: '#29a9df',
        textAlign: 'center'
    },
});

export default withNavigation(AuthorsList);