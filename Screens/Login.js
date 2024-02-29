import { View, Text ,ImageBackground,StyleSheet,TouchableOpacity} from 'react-native'
import {  NativeBaseProvider,VStack,Input, } from 'native-base';
import React ,{useEffect} from 'react'
import Flex from './flex'
import { useHover } from 'native-base/lib/typescript/components/primitives';

//const image=require('../assets/car.png')

export default function Login() {
  useEffect(()=>{
    <Flex/>
  })
  return (
    <NativeBaseProvider>
    <View style={style.container}>
    <ImageBackground source={require('../assets/car1.jpg')} resizeMode="cover" style={style.image}  >
      <View style={style.form}>
        <Text style={style.text} >Login</Text>
        <Text style={style.text} >Login</Text>
        <VStack space={9}  w="75%" maxW="300px" mx="auto" mt="15%" style={{alignItems:'center',justifyContent:'center'}}>
         <Input type='text' style={{color:'white'}} size="sm" placeholder="email"  />
         <Input type='password'  style={{color:'white'}} size="sm" placeholder="password" />
         <TouchableOpacity style={style.btn}>
                  <Text style={{fontWeight:'bold',color:'white'}}>Sign In</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={style.account}>
                  <Text style={{fontWeight:'bold',color:'white',textDecorationLine:'underline'}}>create new account?</Text>
        </TouchableOpacity> */}
        </VStack>
        </View>
      
    </ImageBackground>
  </View>
  </NativeBaseProvider>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    
   
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems:'center',
    width:'100%',
    height:'100%'
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  form:{
    
    height:'60%',
    
    backgroundColor: "#000000c0",
    borderWidth:1,
    borderColor:'white',
    borderRadius:10,
    width:'90%'
    
  },
  btn:{
    alignItems:'center',
    justifyContent:'center',
    
    width:'60%',
    height:'20%',

    backgroundColor:'#038E37c0',
    borderRadius:10
    
},
account:{
 
}


});
