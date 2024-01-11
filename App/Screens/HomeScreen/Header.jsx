import { Text, View, Image, StyleSheet, TextInput } from 'react-native'
import React, { Component } from 'react'
import { useUser } from '@clerk/clerk-expo'
import { FontAwesome } from '@expo/vector-icons';
import Color from '../../Utils/Color'

export default function Header() {

    const { user, isLoading } = useUser();

    return user && (
        <View style={styles.container}>
            {/* PROFILE SECTION */}
            <View style={styles.profileMainContainer}>
                <View style={styles.profileContainer}>
                    <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
                    <View>
                        <Text style={{ color: Color.WHITE }}>Welcome!</Text>
                        <Text style={{ color: Color.WHITE, fontSize: 20, fontFamily: 'outfit-medium' }}>{user?.fullName}!</Text>
                    </View>
                </View>
                <FontAwesome name="bookmark-o" size={27} color="white" />
            </View>
            {/* SEARCH BAR SECTION */}
            <View style={styles.searchBarContainer}>
                <TextInput placeholder='Pesquisar' style={styles.textInput}/>
                <FontAwesome name="search" size={24} style={styles.searchButton} color={Color.PRIMARY} />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: Color.PRIMARY,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    textInput:{
        padding: 7,
        paddingHorizontal:  16,
        backgroundColor: Color.WHITE,
        width: '85%',
        borderRadius: 8,
        fontSize: 16
    },searchBarContainer:{
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10
    },
    profileMainContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10
    }
    ,
    userImage: {
        width: 45,
        height: 45,
        borderRadius: 99
    },searchButton:{
        backgroundColor: Color.WHITE,
        padding: 10,
        borderRadius: 8
    }
})