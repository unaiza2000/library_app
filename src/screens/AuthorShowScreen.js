//screen for presenting books of a particular author

import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, FlatList} from "react-native";

//import { withDecay } from "react-native-reanimated";
//import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
  
    const getResult = async id => {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    };
    useEffect(() => {
      getResult(id);
    }, []);
  
    if (!result) {
      return null;
    }
  
    return (
      <View>
        <Text>{result.name}</Text>
        <FlatList
          data={result.photos}
          keyExtractor={photo => photo}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }} />;
          }}
        />
      </View>
    );
  };
  
const styles = StyleSheet.create({
    image:{
        height: 200,
        width: 300
    }
})

export default ResultsShowScreen;

//getting the 2nd parameter id from resultlist using getParam 