import React, { useState, useEffect } from 'react';
import { View,Text, TextInput,StyleSheet, Button,Alert } from 'react-native';



const LoginScreen = (props) => {

    
    const goToSignUp = () => {
        props.navigation.navigate('SignUp');
    }

    const goToHomePage = () => {
        props.navigation.replace('Home');
        
    }


    

    return (<View style={styles.registrationContainer}>
        <Text style={styles.registrationHeader}>Login</Text>
        <View style={styles.inputArea}> 
            <TextInput style={styles.registrationTextFields} placeholderTextColor="#000" placeholder="Enter your Username" onChangeText={(text)=>{}}></TextInput>
            <TextInput style={styles.registrationTextFields} placeholderTextColor="#000" placeholder="Enter your password" secureTextEntry={true} onChangeText={(text)=>{}}></TextInput>
        </View>
        <View style={styles.signUpArea}>
           <View style={styles.btnStyles}>
                <Button title="LOGIN"  onPress={goToHomePage}></Button>
            </View>
            <View style={styles.btnStyles}>
                <Button style={styles.btnStyles} title="SIGN UP" onPress={goToSignUp}></Button>
            </View>
        </View>
    
    
    
    </View>)



}




const styles = StyleSheet.create({
    registrationContainer:{
        alignSelf:'stretch',
        display:'flex',
        flex:1,
        padding:10,
        // backgroundColor:'#000',
        justifyContent:"center"
    },
    registrationHeader:{
        fontSize:24,
        color:'#000',
        paddingBottom:10,
        marginBottom:10,
        borderBottomColor:'#00f',
        borderBottomWidth:1,
    },
    registrationTextFields:{
        // flex:1,
        margin:20,
        paddingTop:10,
        borderBottomColor:'#0f0',
        borderBottomWidth:1,
        color:'#000'
    },
    signUpArea: {
        margin:10,
        flexDirection:'row',
        justifyContent:"center"
    },
    btnStyles:{
        flex:1,
        padding:10
    },
    inputArea:{
        marginTop:40
    }


})


export default LoginScreen;