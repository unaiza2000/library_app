import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import {Card} from 'react-native-shadow-cards';
import { withNavigation } from 'react-navigation'; 
//import UseCategorySearchResults from '../hooks/UseCategorySearchResults';


const CategoryList1  = ({title,  navigation}) => {

    // const [searchApi, results, errorMessage] = useCategorySearchResults();

    return(
        <View style={styles.container}>
            
             <View style={styles.container}>
                <Card style={{padding: 10, margin: 10, height: 50}}>
                    <TouchableOpacity  onPress={()=> navigation.navigate('CategoryList2', {categories: title})} > 
                        <Text style={styles.text}>{title}</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress={()=> searchApi(title)}>

                    </TouchableOpacity> */}
                </Card>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:5,
        marginBottom:5,
        backgroundColor: 'white'
    },
    text:{
        fontWeight: 'bold',
        color: '#29a9df',
        textAlign: 'center'
    },
});

export default withNavigation(CategoryList1);