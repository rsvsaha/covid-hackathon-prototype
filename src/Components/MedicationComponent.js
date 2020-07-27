import React from 'react';
import { View,StyleSheet,Dimensions,Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler';
export const MedicationComponent  = (props) => {


    return (
        <View style={styles.containerStyles}>
            <Text style={{flex:4}}>{props.medicineName}</Text>
            <Text style={{flex:2}}>{props.medicineTime}</Text>
            <Ionicons style={{flex:2}} name="checkmark-outline" size={50} color={(props.medicineTaken)? "#42f566":"#e0e0e0"}/>
            <TouchableOpacity style={{flex:2}}><View style={{backgroundColor:'#ff0000',flex:1,width:50,
            justifyContent:'center',alignItems:'center'}}><Text style={{color:'#ffffff',fontSize:50}}>-</Text></View></TouchableOpacity>
        </View>

    )

};

const styles = StyleSheet.create({

    containerStyles : {
        marginStart:10,
        marginEnd:10,
        marginTop:10,
        width:Dimensions.get('window').width-20,
        height:80,
        borderRadius:5,
        backgroundColor: '#f5ef42',
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    }

});

