import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import googlebooks from "../api/googlebooks";
import ResultsDetail from './CatResultsDetail';

const CategoryList2 = ({navigation}) => {
    const [result, setResult] = useState(null);
    const categories = navigation.getParam('categories');
    const key = 'AIzaSyDgUJJquiUi0C93dVI5sxSiJLnXAyreJPY';
    const term = `q=${categories}&key=${key}`;
    // console.log(categories);

    const getResult = async (categories) => {
        const response = await googlebooks.get(`/volumes?${term}`);
        // const response = await googlebooks.get('/volumes', {
        //     params:{
        //         q: categories,
        //         key: 'AIzaSyDgUJJquiUi0C93dVI5sxSiJLnXAyreJPY',
        //     }
        // });
        setResult(response.data.items);
    };
    useEffect(()=>{
        getResult('Engineering');
        }, []);
    
    if (!result){
        return null;
    }
    return(
        <View style={styles.container}>
            <Text style= {styles.heading}>{categories}</Text>
            <FlatList 
                data={result}
                keyExtractor={(result) => result.id }
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity   > 
                            <ResultsDetail  result={item}/>
                        </TouchableOpacity >
                    );
                 }}
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
      // marginHorizontal: 12,
        marginTop: 15,
        marginBottom: 15,
        color: '#29a9df',
        textAlign: 'center',
      },
      container:{
        marginBottom:10
    }
})

export default withNavigation(CategoryList2);