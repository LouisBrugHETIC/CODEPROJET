import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, SafeAreaView, ActivityIndicator, TouchableOpacity} from 'react-native';
import {getTopRated} from '../services/movie';
import {FilmItem} from '../components/FilmItem';
import {ScrollView} from 'react-native-web';

export const TopRatedScreen = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [films, setFilms] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        getTopRated().then(data => {
            setIsLoading(false);
            setFilms(data.results);

        });
    }, []);

    return (
        <SafeAreaView style={styles.main_container}>
            <View>
                <ScrollView>
                    <FlatList
                        data={films}
                        renderItem={({item}) => <FilmItem
                            film={item}
                            goToDetail={() => props.navigation.navigate('Detail', {title: item.title, id: item.id})}
                            screenName={props.route.name}
                        />}
                        keyExtractor={item => item.id.toString()}
                    />
                    {isLoading ?
                        <View style={styles.loading_container}>
                            <ActivityIndicator size='large' color={'#000'}/>
                        </View>
                        : null
                    }
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20,
    },
    loading_container: {
        bottom: 300,
    },
});
