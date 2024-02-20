import { View, Text, TouchableOpacity, StyleSheet, FlatList, ScrollView, KeyboardAvoidingView, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import PageHeading from '../../Components/PageHeading'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CalendarPicker from "react-native-calendar-picker";
import Color from '../../Utils/Color';
import Heading from '../../Components/Heading';
import { TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import GlobalApi from '../../Utils/GlobalApi';
import { useUser } from '@clerk/clerk-expo';
import moment from 'moment';

export default function BookingModal({ businessId, hideModal }) {
    const [timeList, setTimeList] = useState([]);
    const [selectedTime, setSelectedTime] = useState();
    const [selectedDate, setSelectedDate] = useState();
    const [note, setNote] = useState();
    const { user } = useUser();
    useEffect(() => {
        getTime();
    }, [])
    const getTime = () => {
        const timeList = [];
        for (let i = 8; i < 12; i++) {
            timeList.push({
                time: i + ':00'
            });
            timeList.push({
                time: i + ':30'
            })
        }
        for (let i = 12; i < 19; i++) {
            timeList.push({
                time: i + ':00'
            });
            timeList.push({
                time: i + ':30'
            })
        }
        setTimeList(timeList);
    }
    const navigation = useNavigation();

    const createNewBooking = () => {
        if (!selectedDate || !selectedTime) {
            ToastAndroid.show("Please select Date and Time", ToastAndroid.LONG);
            return;
        }
        const data = {
            userName: user?.fullName,
            userMail: user?.primaryEmailAddress.emailAddress,
            time: selectedTime,
            date: moment(selectedDate).format("DD-MM-yyyy"),
            businessId: businessId
        }
        GlobalApi.createBooking(data).then(resp => {
            console.log("Resp", resp);
            ToastAndroid.show('Booking Created Successfully', ToastAndroid.LONG);
            hideModal();
        })
    }
    return (
        <SafeAreaView>
            <ScrollView style={{ height: '100%' }}>
                <KeyboardAvoidingView style={{ padding: 20 }}>
                    <TouchableOpacity style={{
                        display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center',
                        marginBottom: 20
                    }}
                        onPress={() => hideModal()}>
                        <Ionicons name="arrow-back-outline" size={24} color="black" />
                        <Text style={{ fontSize: 25, fontFamily: 'outfit-medium' }}>Booking</Text>
                    </TouchableOpacity>
                    <Heading text={'Selected Date'} isViewAll={false} />
                    <View style={styles.calendarContainer}>
                        <CalendarPicker width={340} onDateChange={setSelectedDate} minDate={Date.now()}
                            todayBackgroundColor={Color.BLACK}
                            todayTextStyle={{ color: Color.WHITE }}
                            selectedDayColor={Color.PRIMARY}
                            selectedDayTextColor={Color.WHITE}
                        />

                    </View>

                    <View>
                        <Heading text={'Selected time Slot'} isViewAll={false} />
                        <FlatList
                            data={timeList}
                            horizontal={true}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity style={{ marginRight: 10 }} onPress={() =>
                                    setSelectedTime(item.time)
                                }>
                                    <Text style={[selectedTime == item.time ? styles.selectedTime : styles.unSelectedTime]}>{item.time}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>

                    <View style={{ paddingTop: 20 }}>
                        <Heading text={'Any suggestion note'} isViewAll={false} />
                        <TextInput placeholder='Note' style={styles.noteTextArea} onChange={(text) => setNote(text)} />
                    </View>

                    <TouchableOpacity style={{ marginTop: 15 }}
                        onPress={() => createNewBooking()}
                    >
                        <Text style={styles.confirmBtn}>Confirm & Book</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    calendarContainer: {
        backgroundColor: Color.PRIMARY_LIGHT,
        padding: 20,
        borderRadius: 15
    },
    selectedTime: {
        padding: 6,
        borderColor: Color.PRIMARY,
        borderRadius: 99,
        borderWidth: 1,
        paddingHorizontal: 15,
        backgroundColor: Color.PRIMARY,
        color: Color.WHITE
    },
    unSelectedTime: {
        padding: 6,
        borderColor: Color.PRIMARY,
        borderRadius: 99,
        borderWidth: 1,
        paddingHorizontal: 15,
        color: Color.PRIMARY,

    }, noteTextArea: {
        borderWidth: 1,
        borderRadius: 15,
        textAlignVertical: 'top',
        padding: 20,
        fontSize: 16,
        fontFamily: 'outfit',
        borderColor: Color.PRIMARY_LIGHT
    },
    confirmBtn: {
        textAlign: 'center',
        fontFamily: 'outfit-medium',
        fontSize: 17,
        backgroundColor: Color.PRIMARY,
        color: Color.WHITE,
        padding: 13,
        elevation: 2,
        borderRadius: 99
    }
})