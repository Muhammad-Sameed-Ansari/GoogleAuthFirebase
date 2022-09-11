import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {
    const navigation = useNavigation()

    const handleSignOut = () => {
        auth.signOut()
            .then(() => {
                navigation.replace('Login')
            })
            .catch(error => alert(error.message))
    }

    return (
        <View style={styles.container}>
            <Text>Email: {auth.currentUser?.email}</Text>
            <Text>Username: {auth.currentUser?.displayName}</Text>
            <Text>UID: {auth.currentUser?.uid}</Text>
            <Image source={{uri: auth.currentUser?.photoURL}} style={{ width: 50, height: 50}}/>
            <Button title='Sign Out' onPress={handleSignOut}/>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})