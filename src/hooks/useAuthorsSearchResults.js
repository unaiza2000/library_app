import { useState, useEffect } from "react";
import googlebooks from "../api/googlebooks";

export default () =>{
    const [results, setResults] = useState([]); //for storing results of our search 
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm)=> {
        console.log(results);
        try {
            const response = await googlebooks.get('volumes', {
                params:{
                    q: searchTerm,  //first term is the parameter of googlebooks, second term is the term we defined for searching
                    key: 'AIzaSyDgUJJquiUi0C93dVI5sxSiJLnXAyreJPY'
                }
            });
            setResults(response.data.items);
         } catch(e){
             setErrorMessage("Something went wrong!");
         }
    
    };

    useEffect(()=>{
        searchApi('javascript');
    }, [])

    return [searchApi, results, errorMessage];
};