import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../../Utils/Color'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
export default function BusinessListItem({ business,booking }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container} onPress={() =>navigation.push('business-detail', {
            business: business
        })
        }>
            
            <Image source={{ uri: business?.images[0].url }} style={styles.image} />
            <View style={styles.subContainer}>
                <Text style={{ fontFamily: 'outfit', color: Color.GRAY, fontSize: 10 }}>{business.contactPerson}</Text>
                <Text style={{ fontFamily: 'outfit-bold', fontSize: 19 }}>{business.name}</Text>
                <Text style={{ fontFamily: 'outfit', color: Color.GRAY, fontSize: 16 }} >
             
                    <Ionicons name="location-sharp" size={24} color={Color.PRIMARY} style={{marginRight: 10}} />
                    {business.address}
                </Text>

                {booking?.id?<Text>   <AntDesign name="calendar" size={24} color={Color.PRIMARY} style={{marginRight: 5}} /> 
                {booking.date} at {booking.time}</Text>: null}
            </View>
        </TouchableOpacity>
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