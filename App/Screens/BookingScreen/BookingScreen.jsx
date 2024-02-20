import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import PageHeading from '../../Components/PageHeading'
import GlobalApi from '../../Utils/GlobalApi'
import { useUser } from '@clerk/clerk-expo'
import BusinessListItem from '../BusinessListByCategory/BusinessListItem'
export default function BookingScreen() {
  const { user } = useUser();
  const [bookingList, setBookingList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    user && GetUserBooking();
  }, [user])
  const GetUserBooking = () => {
    setLoading(true);
    GlobalApi.GetUserBooking(user.primaryEmailAddress.emailAddress).then(resp => {
      setLoading(false);
      setBookingList(resp)
       console.log("resp", resp)
    })
  }
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 26, fontFamily: 'outfit-medium' }}>My Bookings</Text>

      <View>
        <FlatList date={bookingList}
          onRefresh={() => GetUserBooking()}
          refreshing={loading}
          renderItem={({ item, index }) => (
            <BusinessListItem
              business={item.businessList}
              booking={item} />
          )} />
      </View>
    </View>
  )
}