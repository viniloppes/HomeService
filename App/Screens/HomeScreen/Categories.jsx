import { View, Text, FlatList, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Color from '../../Utils/Color';
import { useNavigation } from '@react-navigation/native'
export default function Categories() {
    const [categories, setCategories] = useState([]);
    const navigation = useNavigation();
    useEffect(() => {
        getCategories();
    })
    const getCategories = () => {
        GlobalApi.getCategories().then(resp => {
            setCategories(resp?.categories)
        })
    }

    return (
        <View style={{ marginTop: 20 }}>
            <Heading text={'Categories'} isViewAll={true} />

            <FlatList
                data={categories}
                numColumns={4}
                renderItem={({ item, index }) => index <= 3 && (
                    <TouchableOpacity style={styles.container}
                        onPress={() => navigation.push('business-list', {
                            category: item.name
                        })}>
                        <View style={styles.iconContainer}>
                            <Image source={{ uri: item?.icon.url }}
                                style={{ width: 30, height: 30 }} />
                        </View>
                        <Text style={{ fontFamily: 'outfit-medium', marginTop: 5 }}>{item?.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        backgroundColor: Color.LIGHT_GRAY,
        padding: 17,
        borderRadius: 99
    }
    ,
    container: {
        flex: 1,
        alignItems: 'center'
    }
})