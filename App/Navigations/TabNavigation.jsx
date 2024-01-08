import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialBottomTabNavigator();
export default function TabNavigation() {
    return (
        <Tab.Navigator  >
            <Tab.Screen name="home" component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen name='booking' component={BookingScreen} />
            <Tab.Screen name='profile' component={ProfileScreen} />
        </Tab.Navigator>
    )
}
