import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-web';

export const FilmItem = (props) => {
    const {film, goToDetail, screenName} = props;
    return (
        <TouchableOpacity style={styles.main_container} onPress={goToDetail}>
            <ScrollView>
                <View style={styles.main_information_container}>
                    <Image source={{uri: `https://image.tmdb.org/t/p/original${film.poster_path}`}}
                           style={styles.image}/>
                    <View style={styles.content_container}>
                        <View>
                            <Text style={styles.title_text} >{film.title}</Text>
                        </View>
                        <View style={{paddingLeft: 15}}>
                            <Text style={{color: '#B5A90F'}}>{film.release_date}</Text>
                        </View>
                        <View style={{justifyContent: 'center', marginRight: 10, paddingLeft: 15}}>
                            <Text style={{color: '#B5A90F'}}>{film.vote_average}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    main_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        // marginTop: 50,
        // paddingRight: 60,
        // paddingBottom: 60,
        backgroundColor: '#FFFFFF',
        flex: 3,
        height: 100,
        padding: 20,
        margin: 10,
        alignItems: 'center',
        boxShadow: '',
        shadowColor: "#B00020",
        shadowOffset: {
            width: 0,
            height: 5,
            opacity: 1,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3,
    },
    content_container: {
        flex: 1,
        margin: 5,
        justifyContent: 'center',
    },
    main_information_container: {
        flexDirection: 'row',
    },
    image: {
        width: 90,
        height: 140,
        marginTop: 20,
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 16,
        flexWrap: 'wrap',
        paddingRight: 5,
        paddingLeft: 15,
        color: '#B5A90F',
    },
    picto: {
        width: 30,
        height: 30,
    },
});
