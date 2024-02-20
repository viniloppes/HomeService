import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Color from '../../Utils/Color';
import Heading from '../../Components/Heading';
import BusinessPhoto from './BusinessPhoto';
import BusinessAboutMe from './BusinessAboutMe';
import BookingModal from './BookingModal';
export default function BusinessDetailScreen() {
    const params = useRoute().params;
    const [business, setBusiness] :any = useState([]);
    const [showModal, setShowModal] = useState(false);
    const navigation = useNavigation()
    useEffect(() => {
        // console.log(params.business);
        setBusiness(params.business);

    }, [params])
    return business && (
        <View >
            <ScrollView style={{ height: '90%' }}>
                <TouchableOpacity style={styles.backBtnContainer}
                    onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-outline" size={30} color="white" />
                </TouchableOpacity>
                {
                    business && business.images && business.images[0] && business.images[0].url ?
                        <Image source={{ uri: business.images[0].url }} style={{ width: '100%', height: 300 }} /> :
                        <Image source={require('../../../assets/img-notfound.jpg')} style={{ width: '100%', height: 300 }} />
                }

                {/* <ScrollView style={{
                paddingBottom: 30,

                height: 320
            }} > */}
                <View style={styles.infoContainer}>
                    <Text style={{ fontFamily: 'outfit-bold', fontSize: 25 }}>{business?.name}</Text>
                    <View style={styles.subContainer}>
                        <Text style={{ fontFamily: 'outfit-medium', fontSize: 20, color: Color.PRIMARY }}>{business?.contactPerson}</Text>
                        <Text style={{ fontSize: 17, color: Color.PRIMARY, backgroundColor: Color.PRIMARY_LIGHT, borderRadius: 5, paddingHorizontal: 10, paddingVertical: 5 }}>{business?.category?.name}</Text>

                    </View>
                    <Text style={{ fontSize: 17, fontFamily: 'outfit', color: Color.GRAY, textAlign: 'left' }}>
                        <Ionicons name="location-sharp" size={20} color={Color.PRIMARY} />{business?.address}
                    </Text>
                    {/* horizontal line */}

                    <View style={{ borderWidth: 0.4, borderColor: Color.GRAY, marginVertical: 20 }}>

                    </View>
                    {/* About me section */}
                    <BusinessAboutMe business={business} />

                    <BusinessPhoto business={business} />
                </View>
                {/* </ScrollView> */}

            </ScrollView>

            <View style={{ display: 'flex', flexDirection: 'row', margin: 1, gap: 5 }}>
                <TouchableOpacity style={styles.messageBtn}>
                    <Text style={{
                        textAlign: 'center',
                        color: Color.PRIMARY, fontFamily: 'outfit-medium', fontSize: 18
                    }}>Message</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bookingBtn} onPress={()=>setShowModal(true)}>
                    <Text style={{
                        textAlign: 'center',
                        color: Color.WHITE, fontFamily: 'outfit-medium', fontSize: 18
                    }}>Book now</Text>
                </TouchableOpacity>
            </View>

            {/* booking screen modal */}
            <Modal animationType='slide' visible={showModal}>
               <BookingModal businessId={business.id} hideModal={() => setShowModal(false)}/>
            </Modal>
        </View>

    )
}

const styles = StyleSheet.create({
    backBtnContainer: {
        position: 'absolute',
        zIndex: 999,
        padding: 20
    }, infoContainer: {
        padding: 20,
        display: 'flex',
        gap: 7
    }, subContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center'
    }, messageBtn: {
        padding: 15,
        backgroundColor: Color.WHITE,
        borderWidth: 1,
        borderColor: Color.PRIMARY,
        borderRadius: 99,
        textAlign: 'center',
        flex: 1
    },
    bookingBtn: {
        padding: 15,
        backgroundColor: Color.PRIMARY,
        borderWidth: 1,
        borderColor: Color.PRIMARY,
        borderRadius: 99,
        textAlign: 'center',
        flex: 1

    }
})