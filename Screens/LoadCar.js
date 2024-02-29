import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import DatePicker from 'react-native-date-picker'
import { NativeBaseProvider, VStack, Input, Flex, Button, FormControl } from 'native-base';
export default function LoadCar({ navigation }) {


  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [newDate, setNewDate] = useState('')


  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/car', {
      method: 'GET',

    })
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, [newDate])

  const loadByDate = () => {
    fetch('http://localhost:4000/car/' + newDate, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }

    })
      .then((response) => response.json())
      .then((json) => setPosts(json));

  }

  return (
    <NativeBaseProvider>
      <View style={{ padding: 20 }}>
        <View style={{ width: '100%', height: '5%', marginBottom: '10%', display: 'flex', flexDirection: 'row' }}>

          <Flex style={style.imagepicker1}>
            <Input
              type='text'
              style={{ borderWidth: 1, borderColor: 'black' }}
              size="md"
              placeholder="date"
              value={newDate}
              onChangeText={(e) => {
                setNewDate(e)
                // console.log('====================================');
                // console.log(newDate);
                // console.log('====================================');
              }}
            />
          </Flex>
          <Flex
            style={style.imagepicker1}
            flexDirection='row'>
            <Button
              style={{ width: '50%', height: 48, backgroundColor: '#006BD2c0', alignItems: 'center', justifyContent: 'center' }}
              onPress={(e) => {
                loadByDate()

              }}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>search</Text>
            </Button>
            <Button
              style={{ width: '50%', height: 48, backgroundColor: '#595959c0', alignItems: 'center', justifyContent: 'center', marginLeft: 1 }}
              title="Open"
              onPress={() => setOpen(true)}
              variant='subtle'
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Date</Text>
            </Button>
            <DatePicker
              modal
              open={open}
              date={date}
              onConfirm={(date) => {

                setDate(date)
                setOpen(false)

                setNewDate(
                  date.getFullYear()
                  + "-" +
                  (date.getMonth() + 1)
                  + "-" +
                  date.getDate()
                )

              }}
              onCancel={() => {
                setOpen(false)
              }}
            />

          </Flex>
        </View>

        <FlatList
          data={posts}
          renderItem={({ item }) =>

            <View style={{ borderWidth: 4, marginBottom: '1%', padding: 5 }}>
              {/* <TouchableOpacity style={{borderWidth:4, marginBottom:'5%', padding:5}} onPress={()=> navigation.navigate('UpdateDeleteCar',{obj:item})}> */}
              <Text style={{ marginBottom: 10, color: 'black', fontWeight: 'bold', fontSize: 20 }} >{item.regNo}</Text>
              <Image
                resizeMode="cover"
                source={{ uri: item.img }}
                style={{ width: '100%', height: 170 }}
              ></Image>
              {/* <Text style={{marginBottom:10,fontWeight:'bold',color:'black'}} >{item.description}</Text> */}
              <Text style={{ marginTop: 10, color: 'black', fontWeight: 'bold' }} >Location : {item.location}</Text>
              <Text style={{ marginBottom: 10, marginTop: 10, color: 'black', fontWeight: 'bold' }} >Date : {item.date}</Text>

              <Button
                size="md"
                colorScheme={'blueGray'}
                onPress={() =>
                  navigation.navigate('UpdateDeleteCar', { obj: item })
                }
              >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Edit</Text>
              </Button>

              <Button
                style={{ marginTop: '3%' }}
                size="md"
                colorScheme={'info'}
                onPress={() =>
                  navigation.navigate('MoreDetails', { obj: item })
                }

              >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>See More</Text>
              </Button>

              {/* <Button
                              style={{height:48,backgroundColor:'#980007c0',alignItems:'center',justifyContent:'center'}}
                              variant='outline'
                              onPress={()=>{
                                console.log('ok')
                              }}
                            >
                            <Text style={{color:'white',fontWeight:'bold'}}>Edit</Text>
                            </Button>
                            <Button
                              style={{height:48,backgroundColor:'#595959c0',alignItems:'center',justifyContent:'center'}}
                              variant='outline'
                            >
                            <Text style={{color:'white',fontWeight:'bold'}}>See More</Text>
                            </Button> */}


              {/* </TouchableOpacity> */}
            </View>

          }
        />
      </View>
    </NativeBaseProvider>
  )
}
const style = StyleSheet.create({
  imagepicker1: {
    // flex:2,
    // display:'flex',
    // flexDirection:"column",
    width: '50%',
    height: '10%',

    //backgroundColor:'red'

  },
})