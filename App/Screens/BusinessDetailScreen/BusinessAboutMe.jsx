import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Heading from '../../Components/Heading';
import Color from '../../Utils/Color';
export default function BusinessAboutMe({ business }) {
    const [isReadMode, setIsReadMore] = useState(false);
    return business&&(
        <View>
            <Heading text={'About Me'} isViewAll={false} />
            <Text style={{ fontFamily: 'outfit', lineHeight: 28, color: Color.GRAY, fontSize: 16 }}
                numberOfLines={isReadMode ? 20 : 5}
            >
                {business?.about}
            </Text>

            <TouchableOpacity onPress={() => setIsReadMore(!isReadMode)}>


                <Text style={{ color: Color.PRIMARY, fontSize: 16, fontFamily: 'outfit' }}>{isReadMode ? 'Ler menos' : 'Ler mais'}</Text>
            </TouchableOpacity>
        </View>
    )
}