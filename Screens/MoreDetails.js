import { View, Text,StyleSheet,ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import {  NativeBaseProvider,VStack,Input, } from 'native-base';
import { BaseRouter } from '@react-navigation/native';

export default function MoreDetails({route}) {
    const [regNo,setRegNo]=useState('')
    const [url,setUrl]=useState('')
    const [desc,setDesc]=useState('')
    const [date,setDate]=useState('')
    const [location,setLocation]=useState('')
    useEffect(()=>{
        console.log(route.params.obj)
        const car=route.params.obj;
        setRegNo(car.regNo)
        setUrl(car.img)
        setDesc(car.description)
        setDate(car.date)
        setLocation(car.location)
    },[])

  return (
    <NativeBaseProvider>
        <View 
        style={styles.container}
        >
            <View 
            style={styles.body}
            >
                <VStack space={7}  w="75%" maxW="300px" mx="auto" mt="20%" style={{alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'gray',fontWeight:'bold',fontSize:30, textShadowColor: 'rgba(0, 0, 0, 0.8)', textShadowOffset: {width: -3, height: 1},textShadowRadius: 5,textDecorationLine:'underline',marginBottom:'-7%',fontSize:25,marginTop:'-7%'}}>{regNo}</Text>
                    <View style={styles.img}>
                        <ImageBackground source={{uri:url}} resizeMode="cover" style={styles.image}></ImageBackground>
                    </View>
                    <Text style={{fontWeight:'bold',color:'black',fontSize:25,marginBottom:'-6%',textDecorationLine:'underline',marginTop:'-6%'}}>Description</Text>
                    <View style={{width:300,height:200,borderWidth:2,borderColor:'black'}}>
                        <Text style={{fontWeight:'bold',color:'black'}}>{desc}</Text>
                    </View>
                    <View style={{width:300,height:50,borderWidth:2,borderColor:'black',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'40%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                          <Text style={{fontWeight:'bold',color:'black',fontSize:25}}>Date    :</Text>
                      </View>
                      <View style={{width:'60%',height:'98%',backgroundColor:'gray',alignItems:'center',justifyContent:'center'}}>
                         <Text style={{fontWeight:'bold',color:'black',fontSize:25}}>{date}</Text>
                      </View>
                    </View>
                    <View style={{width:300,height:70,borderWidth:2,borderColor:'black',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <View style={{width:'40%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold',color:'black',fontSize:25}}>Location :</Text>
                        </View>
                        <View style={{width:'60%',height:'98%',backgroundColor:'gray',alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold',color:'black',fontSize:25}}>{location}</Text>
                        </View>
                    </View>
                </VStack>              
            </View>
        </View>
    </NativeBaseProvider>
  )
}
const styles=StyleSheet.create({
    container:{
        fex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    body:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop:'5%',
        width:'90%',
        height:'95%',
        backgroundColor:'white',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 9,
        borderRadius:10
    },
    image:{
        width:'100%',
        height:'100%'
    },
    img:{
        width:300,
        height:200,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 9,
        borderRadius:10
    },
    desc:{
        width:300,
        height:200,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 9,
        borderRadius:10
    }


})