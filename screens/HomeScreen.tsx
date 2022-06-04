import React from 'react'
import { View, Text, Button,StyleSheet } from 'react-native'
import FirebaseUtil from '../utils/FirebaseUtil';

export default function HomeScreen() {
 const signOut = () => {
   FirebaseUtil.signOut().catch((e) => {
     console.log(e);
     alert('Something went wrong');
   })
 }; 
  
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