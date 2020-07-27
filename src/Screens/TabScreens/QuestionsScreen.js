import React,{useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity, Button, Dimensions, TextInput} from 'react-native'



export const QuestionsScreen = (props) => {

    const [stateOfQuestionaire,setStateOfQuestionaire] = useState('NOT_STARTED');
    const [selectedQuestionNumber,setSelectedQuestionNumber] = useState(0);
    const [score,setScore] = useState(0);
    var name=null;
    const questions= [
        {
            "questionNumber": "5",
            "questionValue": "Is Hypertension present?",
            "questionScore": 18.76
        }, 
    {
            "questionNumber": "6",
            "questionValue": "Is there any cardiovascular diseases?",
            "questionScore": 13.89
        },  
       {
            "questionNumber": "7",
            "questionValue": "Is HIV present?",
            "questionScore": 1.78
        },
     {
            "questionNumber": "8",
            "questionValue": "Is Malignancy present?",
            "questionScore": 1.78
        } ,
       {
            "questionNumber": "9",
            "questionValue": "Are you suffering from COPD?",
            "questionScore": 1.66
        },
    {
            "questionNumber": "10",
            "questionValue": "Is there any renal diseases?",
            "questionScore": 0.94
        } , 
    {
            "questionNumber": "11",
            "questionValue": "Is there any immunodeficiency disorder?",
            "questionScore": 0.01
        }    
    ]

    const goToNextQuestion = (answer) => {
        
        if(answer=== 'YES') {
            setScore((previousScore)=>{
                return previousScore + questions[selectedQuestionNumber].questionScore;
            });
        }
        if(selectedQuestionNumber < questions.length-1){
            setSelectedQuestionNumber((previousState)=>{
                return previousState+1;
            });
        }
        else if(selectedQuestionNumber === questions.length -1 ) {
            setStateOfQuestionaire('ENDED');
        }
        

    }

    const questionsArea = () => {
        return(
            <View>
                <Text>{questions[selectedQuestionNumber].questionValue}</Text>
                <View style={{display:'flex',flexDirection:'row'}}>
                <Button title="YES" onPress={()=>{goToNextQuestion('YES')}}></Button> 
                <Button title="NO" onPress={()=>{goToNextQuestion('NO')}}></Button> 
                </View>
                
            </View>


        )


    }


    
    return(
        <View style={styles.questionsContainer}>
            {(() =>{
                switch(stateOfQuestionaire){
                    case 'NOT_STARTED':
                        return <View>
                            <TextInput style={styles.registrationTextFields} placeholderTextColor="#000" placeholder="Enter Your Name" onChangeText={(text)=>{name=text;}}></TextInput>
                            <TextInput style={styles.registrationTextFields} placeholderTextColor="#000" placeholder="Enter Age " onChangeText={(text)=>{}}></TextInput>
                            <TextInput style={styles.registrationTextFields} placeholderTextColor="#000" placeholder="Enter Your Gender" onChangeText={(text)=>{}}></TextInput>
                            <TextInput style={styles.registrationTextFields} placeholderTextColor="#000" placeholder="Enter Occupation " onChangeText={(text)=>{}}></TextInput>
                            <Button title="START THE QUESTIONS" onPress={()=>{setStateOfQuestionaire('STARTED')}}></Button>
                            
                        </View>;
                    case 'STARTED':
                        return questionsArea();
                    
                    case 'ENDED':
                        return <>
                            <Text>Your CoMorbidity score is {score}.  
                            { (score<=15) ? 'Your Score is Statisfactory' : (score>15 || score <=20) ? 'You are at moderate risk' : 'You are at danger'}</Text>
                            <Button title="Try Again" onPress={()=>{
                                setScore(0);
                                setSelectedQuestionNumber(0);
                                setStateOfQuestionaire('NOT_STARTED')
                            }}></Button>
                            </>;
                            return <>
                            </>;
                    default:
                        return null;    
                }   
                })()
            }
        </View>
    );

}

const styles = StyleSheet.create({

    questionsContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    registrationTextFields: {
        margin:20,
        paddingTop:10,
        borderBottomColor:'#0f0',
        borderBottomWidth:1,
        color:'#000'
    }

})