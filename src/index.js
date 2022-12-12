import { View, Text ,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { Constants } from 'expo-constants';

const LoveCalculator = () => {
    const[maleName,setMaleName]=useState('');
    const[femaleName,setFemaleName]=useState('');
    const[loading,setLoading]=useState(false);
    const[lovePercentage,setLovePercentage]=useState([])

    const calculateLove=()=>{
        const API_URL=`https://love-calculator.p.rapidapi.com/getPercentage?sname=${femaleName}&fname=${maleName}`
        setLoading(true)
        fetch(API_URL,{
            method:'GET',
            headers: {
                'X-RapidAPI-Key': '42c9815a52msha94345a8a45cc1ep12b4c1jsnc9142e07090b',
                'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
            }
        }).then(response=>response.json()).then(data=>{
            setLoading(false)
            console.log(data)
            setLovePercentage(data)
        }).catch(err=>{console.log(err)})
    }
  return (
    <View style={styles.container}>
    <View style={styles.title}>
    <Text style={styles.titleText}>Love Calculator</Text>
    </View>
     <TextInput placeholder='Male Name' value={maleName}
     onChangeText={(text)=>setMaleName(text)}
     style={styles.input}
     ></TextInput>
     <TextInput placeholder='Female Name' value={femaleName}
     onChangeText={(text)=>setFemaleName(text)}
     style={styles.input}></TextInput>
     <TouchableOpacity style={styles.button} 
     onPress={calculateLove}>
        <Text style={styles.buttonText}>Calculate</Text>
     </TouchableOpacity>
     <View style={styles.round}>

        <Text style={styles.result}>{lovePercentage.percentage}</Text>
     </View>
     <View style={styles.conclusion}>
<Text style={styles.result}>{lovePercentage.result}</Text>
     </View>
    </View>
  )
}

export default LoveCalculator
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFEEDB',
      alignItems: 'center',
      paddingTop:80
      
    },
    title:{
        height:80,
        width:'100%',
        backgroundColor:'#0a1d37',
        alignItems:'center',
        justifyContent:'center',  
    },
    titleText:{
        fontSize:30,
        fontWeight:'bold',
        color:'#fff'
    },
    input:{
        height:55,
        margin:15,
        width:'100%',
        borderWidth:1,
        padding:10,
        borderRadius:15,
        fontSize:18
    },
    button:{
height:50,
margin:15,
borderWidth:1/2,
width:'70%',
borderRadius:15,
fontSize:18,
backgroundColor:'#ffbd9b',
justifyContent:'center',
textAlign:'center'
 },
 buttonText:{
    fontSize:20,
fontWeight:'bold',
justifyContent:'center',
 textAlign:'center'
    },
    result:{
        fontSize:30,
        fontWeight:'bold',

    },
    round:{
height:100,
width:100,
borderRadius:50,
backgroundColor:'#ffd8cc',
alignItems:'center',
justifyContent:'center',
alignSelf:'center'
    },
    conclusion:{
        padding:20
    }
  });