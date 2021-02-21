import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements'

import Home from './../pages/home-screen';
import Profile from "./../pages/profile-screen";
import Detail from "./../pages/detail-screen"

const Tab = createMaterialBottomTabNavigator();

const Stack = createStackNavigator();

const navigationOptions = ({ navigation }) => ({
    animationEnabled: true,
    headerTitleAlign: "center",
    headerTintColor: "#575757",
    backgroundColor: "#ffffff",
    headerTitleStyle: {
        fontFamily: "WorkSans-SemiBold"
    },
});

const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={navigationOptions}
        >
            <Stack.Screen component={Profile} name="Profile" />
        </Stack.Navigator>
    );
}

const MainStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={navigationOptions}>
            <Stack.Screen component={Home} name="Home" />
            <Stack.Screen component={Detail} name="Movie Detail" />
        </Stack.Navigator>
    );
}

export default AppNavigator = () => {

    return (
        <Tab.Navigator
            barStyle={{ backgroundColor: "#ffffff" }}
            activeColor={"#FF354A"}
        >
            <Tab.Screen
                name="Home"
                component={MainStackNavigator}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            type="material-community"
                            name="home-outline"
                            color={color}
                            size={size}
                        />
                    ),
                }} />

            <Tab.Screen
                name="Profile"
                component={ProfileStackNavigator}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            type="material-community"
                            name="account-outline"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </Tab.Navigator >
    );
};