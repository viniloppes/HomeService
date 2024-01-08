import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../../Utils/Color'
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from '../../hooks/warmUpBrowser';
import * as WebBrowser from "expo-web-browser";
WebBrowser.maybeCompleteAuthSession();
export default function Login() {
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress = React.useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } =
                await startOAuthFlow();

            if (createdSessionId) {
                setActive({ session: createdSessionId });
            } else {
                // Use signIn or signUp for next steps such as MFA
            }
        } catch (err) {
            console.error("OAuth error", err);
        }
    }, []);
    return (
        <View style={{ alignItems: 'center' }}>
            <Image style={styles.loginImage} source={require('../../../assets/login.png')}
            />
            <View style={styles.subContainer}>
                <Text style={{ fontSize: 27, color: Color.WHITE, textAlign: 'center' }}>
                    Let's find <Text style={{ fontWeight: 'bold' }}>professional  cleaning and repair
                    </Text> Services
                </Text>
                <Text style={{ fontSize: 17, color: Color.WHITE, textAlign: 'center', marginTop: 5 }}>
                    Best App to find service
                </Text>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={{ textAlign: 'center', fontSize: 17, color: Color.PRIMARY }}>Let's get started</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginImage: {
        width: 230,
        height: 450,
        marginTop: 70,
        borderWidth: 4,
        borderColor: Color.BLACK,
        borderRadius: 15
    },
    subContainer: {
        width: '100%',
        backgroundColor: Color.PRIMARY,
        heigth: '70%',
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20
    },
    button: {
        padding: 15,
        backgroundColor: Color.WHITE,
        borderRadius: 99,
        MarginTop: 30
    }
})