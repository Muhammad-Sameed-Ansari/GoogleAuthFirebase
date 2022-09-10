import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import { Button, StyleSheet, Text, unstable_batchedUpdates, View } from 'react-native'
import React, { useEffect, useState } from 'react'

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
    const [accessToken, setAccessToken] = useState(null)
    const [user, setUser] = useState(null)

    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
        expoClientId: "978425697677-8cqa2kqjocapd0i9ec2jrhpndfsvt7m3.apps.googleusercontent.com",
        clientId: "978425697677-8cqa2kqjocapd0i9ec2jrhpndfsvt7m3.apps.googleusercontent.com",
        iosClientId: "978425697677-a4in1gfimuvt5om237t6j3vu7001ick8.apps.googleusercontent.com",
        androidClientId: "978425697677-7on96ndsqpi65gl506ng2or4dvp5a06d.apps.googleusercontent.com"
    })

    useEffect(() => {
        if (response?.type === "success") {
            setAccessToken(response.authentication.accessToken)
        } 
    }, [response])

    return (
        <View style={styles.container}>
            <Button title='Login' onPress={() => promptAsync()}/>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})