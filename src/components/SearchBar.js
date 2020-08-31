import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTerSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" size={30} style={styles.iconStyle}/>
            <TextInput
                placeholder="Search"
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={() => onTerSubmit()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        fontSize: 18,
        flex: 1,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,

    }
});

export default SearchBar;
