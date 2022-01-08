import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import {Card} from 'react-native-shadow-cards';

const AuthorsList  = ({results}) => {
    if(!results.length){
        return null;
    }

    return(
        <View style={styles.container}>
            <FlatList 
                data={results}
                showsVerticalScrollIndicator ={false}
                keyExtractor={(results) => results.id }  
                renderItem={({item}) => {
                    return (
                        <View style={styles.container}>
                            <Card style={{padding: 10, margin: 10, height: 50}}>
                                <TouchableOpacity  onPress={()=>{}} > 
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
        marginBottom:10
    },
    text:{
        fontWeight: 'bold',
        color: '#29a9df',
        textAlign: 'center'
    },
});

export default AuthorsList;