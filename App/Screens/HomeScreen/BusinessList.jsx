import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Heading from '../../Components/Heading'
import GlobalApi from '../../Utils/GlobalApi'
import BusinessListItemSmall from './BusinessListItemSmall';

export default function BusinessList() {
    const [businessList, setBusinessList] = useState([]);
    useEffect(() => {
        getBusinessList();
    });
    // 
    // Get Business list from API
    // 
    const getBusinessList = () => {

        GlobalApi.getBusinessList().then(resp => {
            // console.log(resp);
            setBusinessList(resp?.businessLists)
        })
    }
    return (
        <View style={{ marginTop: 20, marginBottom: 30 }}>
            <Heading text={'Latest Business'} isViewAll={true} />

            <FlatList
                data={businessList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => item != null ? (
                    <View style={{marginRight: 20}}>
                        <BusinessListItemSmall business={item} />
                    </View>
                ) : <View>
                    <Text>Nenhum item encontrado</Text>
                </View>
                }
            />

        </View>
    )
}