import { useState, useEffect } from "react";
import googlebooks from "../api/googlebooks";

export default () =>{
    const [results, setResults] = useState([]); //for storing results of our search 
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm)=> {
        console.log(results);
        //new code only 1 line
        //const term = searchTerm+"+inauthor";
        const term = `inauthor:${searchTerm}`;
        try {
            //added '/' with volumes 
            const response = await googlebooks.get('/volumes', {
                params:{
                    q: term,  //q is the parameter of googlebooks,term is the term we defined for searching
                    key: 'AIzaSyDgUJJquiUi0C93dVI5sxSiJLnXAyreJPY',
                    //maxResults: 12,
                    
                }
            });
            
            setResults(response.data.items);
         } catch(e){
             setErrorMessage("Something went wrong!");
         }
    
    };

    useEffect(()=>{
        searchApi('Adam');
    }, [])

    return [searchApi, results, errorMessage];
};