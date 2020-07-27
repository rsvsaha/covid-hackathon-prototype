import React, { useState } from 'react';
import {ScrollView,View,Text,Button,Modal,StyleSheet,TextInput} from 'react-native'
import { MedicationComponent } from '../../Components/MedicationComponent';
import { TouchableOpacity } from 'react-native-gesture-handler';



export const MedicationScreens = (props) => {

    const [isAddMedicine,setAddMedicineVisibility] = useState(false);
    var medicineName = null;
    var time = null;
    const [data,setData] = useState([]);

    const goToAddMedicine = () =>{
        // props.navigation.navigate('AddMedicine');
        setAddMedicineVisibility(true);
    }
    const addToArrMedicine = (medicineName,medtime) => {
        console.log(medtime);
        setData((previousData)=>{
            let data = [{medicineName:medicineName,medicineTime:medtime,medicineTaken:false},...previousData];
            return data;
        })
        setAddMedicineVisibility(false);
        // console.log(medicineName);
        // setModalVisibility(false);
    }

    return(
        <View style={{flex:1,
            justifyContent: 'center',
        alignItems: 'center'}}>

            {(isAddMedicine) ? <View style={styles.registrationContainer}>
        <Text style={styles.registrationHeader}>Add Medicine</Text>
        <View style={styles.inputArea}> 
            <TextInput style={styles.registrationTextFields} placeholderTextColor="#000" placeholder="Enter Medicine Name" onChangeText={(text)=>{medicineName=text;}}></TextInput>
            <TextInput style={styles.registrationTextFields} placeholderTextColor="#000" placeholder="Enter Medicine Time" onChangeText={(text)=>{time=text;}}></TextInput>
        </View>
        <View style={styles.signUpArea}>
           <View style={styles.btnStyles}>
                <Button title="ADD" onPress={()=>{
                    addToArrMedicine(medicineName,time);
                    
                }}></Button>
            </View>
            
        </View>
    
    
    
    </View>:
    
    <> 
            <View style={{width:'100%'}}><Button title="Add New" onPress={()=>{
                goToAddMedicine();
            }}></Button></View>


            <ScrollView>
            {
                data.map((value,index)=>{
                    return <MedicationComponent key={index} medicineName={value.medicineName} 
                    medicineTime={value.medicineTime}
                    medicineTaken={value.medicineTaken}
                    ></MedicationComponent>;
                })
            }
        </ScrollView>
            </>
    
    }
            
        </View>
    )


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

});