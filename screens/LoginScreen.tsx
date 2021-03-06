import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text } from 'react-native';
import { SignatureKind } from 'typescript';
import FirebaseUtil from '../utils/FirebaseUtil';

export default function LoginScreen() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  //Sign in & Sign up
  const [create,setCreate] = useState(false); 

  const signIn =() => {
    FirebaseUtil.signIn(email,password).catch((e) => {
      console.log(e);
      alert('Your email or password is incorrect');
    });
  }
  const signUp =() => {
    FirebaseUtil.signUp(email,password).catch((e) => {
      console.log(e);
      alert('Something went wrong');
    });
}


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
        {create ? (
            <>
            <Button title="Sign Up" onPress = {() => signUp()} />
            <Text style = {styles.text} onPress={() => setCreate(false)}>
                Sign In!</Text>
            </>
        ) : (
            <>
            <Button title="Sign in" onPress = {() => signIn()} />
            <Text style = {styles.text} onPress={() => setCreate(true)}>
                Create an Account!</Text>
            </>
        )}
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
    },
    text:{
        color:'blue',
        marginTop: 20,
    }
  });
