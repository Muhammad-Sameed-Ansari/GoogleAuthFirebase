import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import { Button, StyleSheet, Text, unstable_batchedUpdates, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithCredential,
    signOut
} from '@firebase/auth'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
    const navigation = useNavigation()
    
    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
        expoClientId: "978425697677-8cqa2kqjocapd0i9ec2jrhpndfsvt7m3.apps.googleusercontent.com",
        clientId: "978425697677-8cqa2kqjocapd0i9ec2jrhpndfsvt7m3.apps.googleusercontent.com",
        iosClientId: "978425697677-s1qnfqntca8oiglndi4464ee7nfvtdn9.apps.googleusercontent.com",
        androidClientId: "978425697677-i612d1qr9adll1o0ergv3idovng0qc4h.apps.googleusercontent.com"
    })

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace('Home')
            }
        })

        return unsubscribe
    }, [])

    useEffect(() => {
        if (response?.type === "success") {
            const { id_token } = response.params;
            
            const credential = GoogleAuthProvider.credential(id_token);
            signInWithCredential(auth, credential)
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