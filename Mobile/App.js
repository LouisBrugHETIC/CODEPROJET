import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import SearchScreen from './src/screens/SearchScreen';
import {LaunchScreen} from './src/screens/LaunchScreen';
import {DetailScreen} from './src/screens/DetailScreen';



const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator

                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home';
                        } else if (route.name === 'Search') {
                            iconName = focused ? 'search' : 'search';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                })}


                tabBarOptions={{
                    activeTintColor: '#B5A90F',
                    inactiveTintColor: '#FFFFFF',
                    style: {backgroundColor: ('#B00020')},
                    showLabel: false,

                }}>
                <Tab.Screen name="Home" component={LaunchScreen} options={{
                    tabBarIcon: ({color, size, focused}) => (
                        <View style={styles({isFocus: focused}).tab_param}>
                            {focused ?
                                <View
                                    style={styles.bar}
                                />
                                : null}
                            <Ionicons name={'home'} size={25} color={focused ? '#B5A90F' : '#FFFFFF'}
                            />
                        </View>
                    ),
                }}/>
                <Tab.Screen name="Detail" component={DetailScreen} options={{
                    tabBarIcon: ({color, size, focused}) => (
                        <View>
                            {focused ?
                                <View
                                    style={styles.bar}
                                />
                                : null}
                        </View>
                    ),
                }}/>
                <Tab.Screen name="Search" component={SearchScreen} options={{
                    tabBarIcon: ({color, size, focused}) => (
                        <View style={styles({isFocus: focused}).tab_param}>
                            {focused ?
                                <View
                                    style={styles.bar}
                                />
                                : null}
                            <Ionicons name={'search'} size={25} color={focused ? '#B5A90F' : '#FFFFFF'}
                            />
                        </View>
                    ),
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = (props = {}) => StyleSheet.create({

    tab_param: {

        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: props.isFocus ? 5 : 0,
        borderColor: '#B5A90F',
        width: '750%',
        flex: 1,
    },
});

