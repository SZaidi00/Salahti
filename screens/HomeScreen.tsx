import React from 'react'
import { View, Text, Button,StyleSheet } from 'react-native'

export default function HomeScreen() {
 const signOut = () => {}; 
  
    return (
    <View style ={styles.container}>
        <Text>Home </Text>
        <Button onPress={() => signOut()} title = "Logout"/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignContent: 'center',
      padding: 20
    },
  });