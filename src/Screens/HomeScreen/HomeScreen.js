import React from 'react';
import {View,Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MedicationScreens } from '../TabScreens/MedicationScreens';
import { GraphsScreen } from '../TabScreens/GraphsScreen';
import { QuestionsScreen } from '../TabScreens/QuestionsScreen';
import { MapsScreen } from '../TabScreens/MapScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();


const HomeScreen = (props) => {


    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if(route.name === 'Medication') {
                iconName = focused ? "medkit-outline" : "medkit-outline";
              }
              else if(route.name === 'Maps') {
                iconName = focused ? "map-outline" : "map-outline"; 
              } else if (route.name === 'Graph') {
                iconName = focused ? "stats-chart-outline" : "stats-chart-outline";
              }else if(route.name === 'Questions') {
                iconName = focused ? "help-circle-outline" : "help-circle-outline";
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#0000ff',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Medication" component={MedicationScreens} />
          <Tab.Screen name="Maps" component={MapsScreen} />
          <Tab.Screen name="Graph" component={GraphsScreen} />
          <Tab.Screen name="Questions" component={QuestionsScreen} />
        </Tab.Navigator>
    )



}


export default HomeScreen;