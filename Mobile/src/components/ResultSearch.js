import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const ResultSearch = (props) => {
    const {textSearched} = props;
    return (
        <View style={styles.main_container}>

        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {

        marginHorizontal: 5,
        marginVertical: 10,
        flexDirection: 'row'
    },
    textSearched: {
        fontWeight: 'bold',
        fontSize: 18
    }
})
