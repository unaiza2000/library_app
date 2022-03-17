import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ResultsDetail = ({result})=>{
console.log("unaiza")
    console.log(result.volumeInfo.imageLinks)
    // console.log(result.volumeInfo.imageLinks.smallThumbnail)
     
    return (
        <View style={styles.conatiner}>
            <View style={styles.topContainer}>
                <View style={{flex:1}}>
                    { <Image style ={styles.image} source={{uri: "https://th.bing.com/th/id/OIP.pv2ZIMOgeC-8KkHwH55qBAHaLI?pid=ImgDet&w=736&h=1107&rs=1"}}/> }
                    
                    
                </View>
                <View style={{flex:1, marginTop: 25, marginRight: 10}}>
                    <Text style={styles.bookTitle}>{result.volumeInfo.title}</Text>
                    <Text style={styles.author}>Authors: {result.volumeInfo.authors}</Text>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner:{
        marginLeft: 15
    },
    topContainer:{
        flexDirection: 'row',
    },
    image:{
        width: 190,
        height: 240,
        borderRadius: 4,
        marginBottom:5
    },
    bookTitle:{
        fontWeight: 'bold',
    },
    author:{

    }
   
})

export default ResultsDetail;