import React , {useState} from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import CategoryList1 from '../components/CategoryList1';

const CategoryScreen = ()=> {

    return (
        <>
          <Text style={styles.heading}>Categories</Text>
            <ScrollView>
                    <CategoryList1 
                        title ="Business And Economics"  
                        // results = {filterResultByCategory('Business & Economics')}
                         />
                    <CategoryList1
                        title ="Chemistry" 
                        // results = {filterResultByCategory('Science')}
                        />
                    <CategoryList1 
                        title ="English" 
                        // results = {filterResultByCategory('English')}
                        />
                    <CategoryList1 
                        title ="Engineering"  
                        // results = {filterResultByCategory('Science')}
                         />
                    <CategoryList1
                        title ="Engineering and Technology" 
                        // results = {filterResultByCategory('Engineering')}
                        />
                    <CategoryList1 
                        title ="Physics" 
                        //results = {filterResultByCategory('Technology & Engineering')}
                        />
                    <CategoryList1 
                        title ="Programming"  
                        // results = {filterResultByCategory('Computers')}
                         />
                    
            </ScrollView> 
        </>
      )
};

const styles = StyleSheet.create({
    heading: {
      fontSize: 25,
      fontWeight: 'bold',
    //   marginHorizontal: 12,
      marginTop: 15,
      marginBottom: 15,
      color: '#000000',
      textAlign: 'center',
    }
  });
  
  export default CategoryScreen;