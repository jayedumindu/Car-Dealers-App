import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { NativeBaseProvider, VStack, Input, } from 'native-base';

export default function SignUp({ navigation }) {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const fetchData = () => {
        fetch('http://localhost:4000/user', {
            method: 'POST',
            body: JSON.stringify({
                userName: userName,
                email: email,
                password: password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => { Alert.alert("User Saved Successfully !") })
            .catch((err) => { Alert.alert("Error occured !") })
    }

    return (
        <NativeBaseProvider>
            <View style={style.container}>
                <ImageBackground source={require('../assets/car2.jpg')} resizeMode="cover" style={style.image}  >
                    <View style={style.form}>
                        <VStack space={7} w="75%" maxW="300px" mx="auto" mt="20%" style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Input
                                type='text'
                                style={{ borderWidth: 1, borderColor: 'black' }}
                                size="md"
                                placeholder="userName"
                                value={userName}
                                onChangeText={(e) => {
                                    setUserName(e)
                                }}

                            />
                            <Input
                                type='text'
                                style={{ borderWidth: 1, borderColor: 'black' }}
                                size="md"
                                placeholder="email"
                                value={email}
                                onChangeText={(e) => {
                                    setEmail(e)
                                }}

                            />
                            <Input
                                type='text'
                                style={{ borderWidth: 1, borderColor: 'black' }}
                                size="md"
                                placeholder="password"
                                value={password}
                                onChangeText={(e) => {
                                    setPassword(e)
                                }}
                            />
                            <TouchableOpacity
                                style={style.btn}
                                onPress={(e) => {
                                    fetchData()
                                    setUserName('')
                                    setEmail('')
                                    setPassword('')
                                    // if(fetchData()){
                                    //     // navigation.navigate('LoginScreen')
                                    //     console.log("ok")
                                    // }

                                }}
                            >
                                <Text style={{ fontWeight: 'bold', color: 'white' }}>Sign Up</Text>
                            </TouchableOpacity>

                        </VStack>

                    </View>

                </ImageBackground>
                {/* <View style={style.form}>

        </View> */}
            </View>
        </NativeBaseProvider>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        //   justifyContent:'center',
        //   alignItems:'center'
    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        width: '100%',
        height: '30%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10

    },
    form: {
        position: 'absolute',
        //     left:0,
        //     right:0,
        //     top:0,
        //     bottom:0,
        //   margin:'auto',

        height: '60%',
        backgroundColor: "#FFFFFF",
        borderWidth: 1,

        borderRadius: 10,
        width: '90%',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 9,
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',

        width: '60%',
        height: '20%',

        backgroundColor: '#008321',
        borderRadius: 10

    },
    account: {
        //  marginTop:-10
    }

})