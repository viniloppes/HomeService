import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import PageHeading from '../../Components/PageHeading'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CalendarPicker from "react-native-calendar-picker";
import Color from '../../Utils/Color';

export default function BookingModal({ hideModal }) {
    const navigation = useNavigation();
    return (
        <View style={{ padding: 20 }}>
            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}
                onPress={() => hideModal()}>
                <Ionicons name="arrow-back-outline" size={24} color="black" />
                <Text style={{ fontSize: 25, fontFamily: 'outfit-medium' }}>Booking</Text>
            </TouchableOpacity>

            <View style={styles.calendarContainer}>
                <CalendarPicker style={{ width: 200 }} onDateChange={this.onDateChange} minDate={Date.now} todayBackgroundColor={Color.PRIMARY} 
                todayTextStyle={{color: Color.WHITE}}
                selectedDayColor={Color.PRIMARY}/>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    calendarContainer: {
        backgroundColor: Color.PRIMARY_LIGHT,
        padding: 20,
        borderRadius: 15
    }
})