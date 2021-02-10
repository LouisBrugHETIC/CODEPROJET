import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, StyleSheet, ScrollView} from 'react-native';
import {getGenres} from '../services/movie';


export const GenresItems = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=62f071d2521aba16cf7952ef57fd6e77&language=fr-FR')
            .then((response) => response.json())
            .then((json) => setData(json.genres))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
            <View style={styles.List_Genres}>
                {isLoading ? <ActivityIndicator/> : (
                    <FlatList
                        data={data}
                        numColumns={2}
                        keyExtractor={({id}, index) => id.toString()}
                        renderItem={({item}) => (
                            <View style={styles.movie}>
                                <Text style={{color: '#B00020'}}>{item.name}</Text>
                            </View>
                        )}
                    />
                )}
            </View>
    );
};

const styles = StyleSheet.create({
    List_Genres: {
        width: 300,
        padding: 15,

    },
    movie: {
        flex: 1,
        height: 60,
        padding: 20,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '',
        backgroundColor: 'white',
        shadowColor: "#B00020",
        shadowOffset: {
            width: 0,
            height: 5,
            opacity: 1,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3,

        elevation: 5,
    }

});
