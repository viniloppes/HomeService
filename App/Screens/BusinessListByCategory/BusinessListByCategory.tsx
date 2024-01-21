import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import GlobalApi from '../../Utils/GlobalApi';
import BusinessList from './../HomeScreen/BusinessList';
import BusinessListItem from './BusinessListItem';
export default function BusinessListByCategory() {
  const params = useRoute().params;
  const navigation = useNavigation();
  const [BusinessList, setBusinessList] = useState([]);
  useEffect(() => {
    params && getBusinessByCategory();
  }, [])


  const getBusinessByCategory = () => {
    GlobalApi.getBusinessListByCategory(params.category).then(
      resp => {
        setBusinessList(resp.businessLists)
      }
    )
  }
  return (
    <View style={{ padding: 20, paddingTop: 30 }}>
      <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}
        onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
        <Text style={{ fontSize: 25, fontFamily: 'outfit-medium' }}>{params.category}</Text>
      </TouchableOpacity>

      <FlatList
        data={BusinessList}
        style={{marginTop: 15}}
        renderItem={({ item, index }) => (
          <BusinessListItem business={item} />
        )}
      />
    </View>
  )
}