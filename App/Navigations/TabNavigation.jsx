import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome } from '@expo/vector-icons';
import Color from '../Utils/Color'
import HomeNavigation from './HomeNavigation';
const Tab = createBottomTabNavigator();
export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: Color.PRIMARY
        }} >
            <Tab.Screen name="Inicio" component={HomeNavigation}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12 }}>Inicio</Text>
                    ),
                    tabBarIcon: ({ color }) => (
                        // <MaterialCommunityIcons name="home" color={color} size={26} />

                        <FontAwesome name="home" size={26} color={color} />
                    ),
                }}
            />
            <Tab.Screen name='Salvos' component={BookingScreen} options={{
                tabBarLabel: ({ color }) => (
                    <Text style={{ color: color, fontSize: 12 }}>Salvos</Text>
                ),
                tabBarIcon: ({ color }) => (
                    <FontAwesome name="bookmark" size={26} color={color} />
                ),
            }}
            />
            <Tab.Screen name='Perfil' component={ProfileScreen} options={{
                tabBarLabel: ({ color }) => (
                    <Text style={{ color: color, fontSize: 12 }}>Perfil</Text>
                ),
                tabBarIcon: ({ color }) => (
                    <FontAwesome name="user" size={26} color={color} />
                ),
            }}
            />
        </Tab.Navigator>
    )
}
