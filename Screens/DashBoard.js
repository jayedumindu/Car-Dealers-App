import { ImageBackground, StyleSheet, Text, View,TouchableOpacity } from "react-native";
import { NativeBaseProvider, Input, VStack, Button } from 'native-base'
import React from 'react'

export default function DashBoard({navigation}) {
  return (
    <NativeBaseProvider>
    <View style={styles.container}>
        <ImageBackground source={require('../assets/car1.jpg')} resizeMode="cover" style={styles.image}>
            <VStack space={7}  w="75%" maxW="300px" mx="auto" mt="5%" style={{alignItems:'center',justifyContent:'center'}}>
               <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('LoadCar')}} >
                    <Text  style={styles.text}>View Cars</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('AddCar')}} >
                    <Text  style={styles.text}  >Manage Cars</Text>
                </TouchableOpacity >
                {/* <TouchableOpacity style={styles.btn}>
                    <Text  style={styles.text}>Manage Account</Text>
                </TouchableOpacity> */}
            </VStack>
                {/* <TouchableOpacity >
                    <Text  style={styles.text}>Inside</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text  style={styles.text}>Inside</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text  style={styles.text}>Inside</Text>
                </TouchableOpacity> */}
        
        </ImageBackground>
  </View>
  </NativeBaseProvider>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize:32,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000"
    },
    btn:{
        width:'100%',
        borderWidth:1,
        borderColor:'white',
        backgroundColor:'#080808c0',
        shadowColor: 'white',
        shadowOpacity: 0.26,
        shadowOffset: { width: -10, height:2},
        shadowRadius: 10,
        elevation: 15,
    }
  });