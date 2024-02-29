import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { NativeBaseProvider, VStack, Input, } from 'native-base';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const LoginOnAction = () => {

        fetch('http://localhost:4000/user/search', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((response) => response.json())
            .then(async (json) => {
                let res = await json
                if (res === true) {
                    //console.log("success")
                    navigation.navigate('DashBoard')
                    setEmail('')
                    setPassword('')
                }
                else if (res === false) {
                    Alert.alert('Please check email & password');
                }
            })
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
                                placeholder="email"
                                value={email}
                                onChangeText={(e) => {
                                    setEmail(e)
                                }}
                            />
                            <Input
                                type='password'
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
                                onPress={LoginOnAction}
                            >
                                <Text style={{ fontWeight: 'bold', color: 'white' }}>Sign In</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={style.account}
                                onPress={() => { navigation.navigate('SignUp') }}
                            >
                                <Text style={{ fontWeight: 'bold', color: 'black', textDecorationLine: 'underline' }}>create new account ?</Text>
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

        backgroundColor: '#970221',
        borderRadius: 10

    },
    account: {
        //  marginTop:-10
    }

})