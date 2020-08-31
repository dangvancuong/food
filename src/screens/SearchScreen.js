import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async () => {
        console.log('hi all')
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: term,
                    location: 'san jose'
                }
            });

            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong')
        }
    }

    // searchApi('pass');

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTerSubmit={searchApi}
            />
            {errorMessage ? <Text>{ errorMessage }</Text> : null}
            <Text>hass {results.length}</Text>
            <Text>{term}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default SearchScreen;
