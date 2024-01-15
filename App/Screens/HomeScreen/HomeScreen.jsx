import { View, Text ,ScrollView, SafeAreaView} from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Categories from './Categories'
import BusinessList from './BusinessList'

export default function HomeScreen() {
  return (
    <SafeAreaView>
     {/* header */}
      <Header/>
      <ScrollView style={{padding: 20, overflow: 'scroll'}} ref={ref => this.scrollViewRef = ref}>
        <Slider/>
        {/* Categories */}
        <Categories/>
        <BusinessList />
      </ScrollView>
      
    </SafeAreaView>
  )
}