import React from 'react';
import {View,Text,Dimensions, ScrollView} from 'react-native'
import {
    LineChart,
    BarChart,
    PieChart,
    
  } from 'react-native-chart-kit';




export const GraphsScreen = (props) => {
    const linedata = {
        labels: ['2PM', '3PM', '4PM', '5PM', '6PM', '7PM'],
        datasets: [
          {
            data: [80, 89, 70, 75, 92, 90],
            strokeWidth: 2, // optional
          },
        ],
    };

    const linedata2 = {
      labels: ['2PM', '3PM', '4PM', '5PM', '6PM', '7PM'],
      datasets: [
        {
          data: [70, 65, 120, 90, 87, 79],
          strokeWidth: 2, // optional
        },
      ],
  };

    const data = [
        {
          name: "Lunch",
          calories: 21500000,
          color: "rgba(131, 167, 234, 1)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Dinner",
          calories: 2800000,
          color: "#0FF",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Snacks",
          calories: 527612,
          color: "red",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Breakfast",
          calories: 8538000,
          color: "#ffffff",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        }
      ];
    return(
        <View style={{marginStart:10,marginEnd:10}}>
          <ScrollView>
          <View style={{padding:20,flex:1,alignItems:'center',justifyContent:'center'}}>
          <Text>
                Oxymeter Readings
            </Text> 
          </View>
            <LineChart
                data={linedata}
                width={Dimensions.get('window').width-20} // from react-native
                height={220}
                yAxisLabel={'%'}
                chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                }
                }}
                bezier
                style={{
                marginVertical: 8,
                borderRadius: 16
                }}
            />
           
            <View style={{padding:20,flex:1,alignItems:'center',justifyContent:'center'}}>
          <Text>
                Blood Pressure
            </Text> 
          </View>
            <LineChart
                data={linedata2}
                width={Dimensions.get('window').width-20} // from react-native
                height={220}
                yAxisLabel={'%'}
                chartConfig={{
                backgroundColor: '#ef321f',
                backgroundGradientFrom: '#0000ff',
                backgroundGradientTo: '#00ffff',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                }
                }}
                bezier
                style={{
                marginVertical: 8,
                borderRadius: 16
                }}
            />
    <View style={{padding:20,flex:1,alignItems:'center',justifyContent:'center'}}>        
    <Text>
                Calories Intake
            </Text> 
    </View>         
        <PieChart
        data={data}
        width={Dimensions.get('window').width-20}
        height={220}
        chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
        accessor="calories"
        backgroundColor="transparent"
        absolute
        />
        </ScrollView>
        </View>
    )


}