import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';

const SignUpScreen = (props) => {

    const signUpAction = () => {
        
        // do sign up and navigate to login screen on successful sign up navigate to login Screen
        props.navigation.navigate('Login');
    }

    const handleInputChange = (text,fieldName) => {

    }

    return (<View style={styles.registrationContainer}>
        
        <Text style={styles.registrationHeader}>Registration</Text>
        <View style={styles.inputArea}>
            <TextInput style={styles.registrationTextFields} placeholderTextColor="#000" placeholder="Enter your Name" onChangeText={(text) => { handleInputChange(text, 'username') }} ></TextInput>
            <TextInput style={styles.registrationTextFields} placeholderTextColor="#000" placeholder="Enter your EmailId" onChangeText={(text) => { handleInputChange(text, 'email') }} ></TextInput>
            <TextInput style={styles.registrationTextFields} placeholderTextColor="#000" placeholder="Enter your password" secureTextEntry={true} onChangeText={(text) => { handleInputChange(text, 'password') }}></TextInput>
            <TextInput style={styles.registrationTextFields} placeholderTextColor="#000" placeholder="Re Enter your password" secureTextEntry={true} onChangeText={(text) => { handleInputChange(text, 'repassword') }}></TextInput>
        </View>
        <View style={styles.signUpArea}>
            <Button title="SIGN UP" onPress={signUpAction}></Button>
        </View>


    </View>)



}




const styles = StyleSheet.create({
    registrationContainer: {
        alignSelf: 'stretch',
        display: 'flex',
        flex: 1,
        padding: 10,
        // backgroundColor: '#000',
        justifyContent: "center"
    },
    registrationHeader: {
        fontSize: 24,
        color: '#000',
        paddingBottom: 10,
        marginBottom: 10,
        borderBottomColor: '#00f',
        borderBottomWidth: 1,
    },
    registrationTextFields: {
        // flex:1,
        margin: 20,
        paddingTop: 10,
        borderBottomColor: '#0f0',
        borderBottomWidth: 1,
        color:'#000'
    },
    signUpArea: {
        margin: 10,
    },
    inputArea: {
        marginTop: 40
    }

})


export default SignUpScreen;