import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Color from '../../Utils/Color'
import { Ionicons } from '@expo/vector-icons';
export default function BusinessListItem({ business }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: business?.images[0].url }} style={styles.image} />
            <View style={styles.subContainer}>
                <Text style={{ fontFamily: 'outfit', color: Color.GRAY, fontSize: 10 }}>{business.contactPerson}</Text>
                <Text style={{ fontFamily: 'outfit-bold', fontSize: 19 }}>{business.name}</Text>
                <Text style={{ fontFamily: 'outfit', color: Color.GRAY, fontSize: 16 }} >
                    <Ionicons name="location-sharp" size={24} color={Color.PRIMARY} style={{marginRight: 10}} />
                    {business.address}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        boderRadius: 15,
        backgroundColor: Color.WHITE,
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    subContainer: {
        display: 'flex',
        gap: 10
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 15
    }
})