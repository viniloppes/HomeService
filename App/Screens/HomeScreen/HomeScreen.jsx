import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Categories from './Categories'
import BusinessList from './BusinessList'

export default function HomeScreen() {
  return (
    <SafeAreaView>
      {/* header */}
      <Header />
      <ScrollView style={{
        paddingHorizontal: 20,
        height: 450
      }} >
        <Slider />
        {/* Categories */}
        <Categories />
        <BusinessList />
      </ScrollView>

    </SafeAreaView>
  );
}
