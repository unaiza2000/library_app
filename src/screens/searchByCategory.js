import React , {useState} from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import UseCategorySearchResults from '../hooks/UseCategorySearchResults';
import CategoryList from '../components/CategoryList';

const SearchByCategoryScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = UseCategorySearchResults();

  const filterResultByCategory = (categories)=> {
    
    return results.filter(result => {
        return result.categories === categories;

        //result fn is returning something.
        //result.categories,  is a fn result and the parameter categories is passed as argument
        // result.categories === categories; is comparing our passed argument with the categories returned by yelp api 
    });
  };

  return (
    <>
      <Text style={styles.heading}>Categories</Text>
      {/* <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      /> */}
      {/* {errorMessage ? <Text>{errorMessage}</Text> : null} */}
      {/* <Text>we have found {results.length} results</Text> */}
      {/* <CategoryList 
        results = {results}
      /> */}
        <ScrollView>
                <CategoryList 
                    title ="Business And Economics"  
                    // results = {filterResultByCategory('Business & Economics')}
                     />
                <CategoryList
                    title ="Chemistry" 
                    // results = {filterResultByCategory('Science')}
                    />
                <CategoryList 
                    title ="English" 
                    // results = {filterResultByCategory('English')}
                    />
                <CategoryList 
                    title ="Physics"  
                    // results = {filterResultByCategory('Science')}
                     />
                <CategoryList
                    title ="Engineering" 
                    // results = {filterResultByCategory('Engineering')}
                    />
                <CategoryList 
                    title ="Engineering and Technology" 
                    // results = {filterResultByCategory('Technology & Engineering')}
                    />
                <CategoryList 
                    title ="Programming"  
                    // results = {filterResultByCategory('Computers')}
                     />
                
        </ScrollView> 
    </>
  )
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 12,
    marginTop: 14,
    color: '#000000',
    textAlign: 'center',
  }
});

export default SearchByCategoryScreen;
