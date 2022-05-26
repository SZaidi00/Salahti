import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function LoginScreen() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

return( 
  <View style = {styles.container}>
    <TextInput 
        placeholder = "Email"
        onChangeText={setEmail} 
        value = {email}
        style = {styles.textInput}
        />
    <TextInput 
        placeholder = "Password"
        onChangeText={setPassword} 
        value = {password}
        style = {styles.textInput}
        secureTextEntry = {true}
        />
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      padding: 20,
    },
    textInput:{
        borderWidth: 1,
        borderColor:'grey',
        padding: 10,
        marginBottom: 20,
        borderRadius:5,
    }
  });
