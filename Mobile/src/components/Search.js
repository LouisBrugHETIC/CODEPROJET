import React, {useState} from 'react';
import {Button, View, TextInput, StyleSheet, Image} from 'react-native';

export const Search = (props) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const onChangeText = (text) => {
        setIsDisabled(text === '');
        props.handleSearch(text);
    };

    return (
        <View style={styles.main_main_container}>
            <Image style={styles.img} source={require('../assets/logo.png')} />
            <View style={styles.main_container}>
                <View style={styles.input_container}>
                    <Image source={require('../assets/images/loupe.jpg')} style={styles.picto}/>
                    <TextInput
                        style={styles.textinput}
                        placeholder='Titre du film'
                        onChangeText={onChangeText}
                    />
                </View>
                <Button style={styles.btn} disabled={isDisabled} title='Rechercher' onPress={() => props.handleClickButton()} />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    main_main_container: {
        marginTop: 20,
        flex: 1,
        alignItems: 'center',

    }, main_container: {
        flex: 1,
        marginTop: 60,
        paddingTop: 30,
        paddingLeft:90,
        paddingRight:90,
        paddingBottom: 60,
        backgroundColor: '#B00020',
        borderRadius: 50,
        width: '100%'
    },
    input_container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingLeft: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    picto: {
        width: 25,
        height: 25,
    },
    textinput: {
        height: 50,
        paddingLeft: 10,
        color: '#B00020',
    },
    btn: {
        backgroundColor: '#B5A90F',
    },
    img: {
        height: 150,
        width: 150,
        alignItems: 'center',
        border: 'solid',
        borderRadius: 90,
        borderColor: '#B00020',
        borderWidth: 5
    }
});
