import * as React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {GenresItems} from '../components/GenresItems';
import {ScrollView} from 'react-native-web';


export const LaunchScreen = () => {
    return (
        <ScrollView>
            <View style={styles.main_container}>
                <Image style={styles.img} source={require('../assets/logo.png')}/>
                <View style={{top: 170}}>
                    <View style={styles.grid_container}>
                        <GenresItems/>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    main_container: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    grid_container: {},
    img: {
        top: 150,
        height: 150,
        width: 150,
        alignItems: 'center',
        border: 'solid',
        borderRadius: 90,
        borderColor: '#B00020',
        borderWidth: 5
    }
});


