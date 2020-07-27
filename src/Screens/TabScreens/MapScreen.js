import React, { useEffect, useState, useRef } from 'react';
import MapView,{Marker,Callout,Circle} from 'react-native-maps';
import {StyleSheet, View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

export const MapsScreen = (props) => {

    const [marginBottom,setMarginBottom] = useState(1);
    
    const latLongs = [
        {latitude:22,longitude:88},
        {latitude:22.34234,longitude:88.23},
        {latitude:22.3,longitude:88.23454},
        {latitude:22.786,longitude:88.2398},
        {latitude:22.0976,longitude:88.20232},
        {latitude:22.4365,longitude:88.19123}
        

    ]
    const CirclelatLongs = [
        {latitude:22,longitude:88},
        {latitude:22.34234,longitude:88.23},
        {latitude:22.3,longitude:88.23454},
        {latitude:22.786,longitude:88.2398},
        {latitude:22.0976,longitude:88.20232},
        {latitude:22.4365,longitude:88.19123}

    ] 

    const onMapReady = () => {
        Geolocation.getCurrentPosition((position)=>{
            console.log(position);
        },(error)=>{
            console.log(error);
        });

        setMarginBottom(0);
    }

    return (
        <View style={StyleSheet.absoluteFillObject}>
        <MapView style={{flex:1,marginBottom:marginBottom}}
            onMapReady={onMapReady}
            initialRegion={{
                latitude: 21.78825,
                longitude: 87.4324,
                latitudeDelta: 4.0922,
                longitudeDelta: 4.0421,
              }}
              
              showsMyLocationButton={true}
              showsUserLocation={true}
              maxZoomLevel={22}
        >
            {
                latLongs.map((value,index)=>{
                    return <Marker coordinate={value} key={index}></Marker>
                })
            }              
            {
                CirclelatLongs.map((val,index)=>{
                    return <Circle center={val} key={(index+val.latitude+val.longitude).toString()} radius={10}></Circle>
                })
            }
        </MapView>
        
        </View>
        );

}


