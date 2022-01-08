import React , {useState} from 'react';
import { Text, StyleSheet, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import useAuthorsSearchResults from '../hooks/useAuthorsSearchResults';
import AuthorsList  from '../components/AuthorsList';

const SearchByAuthorScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useAuthorsSearchResults();

  return (
    <>
      <Text style={styles.heading}>Authors</Text>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text>we have found {results.length} results</Text> */}
      <AuthorsList 
        results = {results}
      />
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

export default SearchByAuthorScreen;
