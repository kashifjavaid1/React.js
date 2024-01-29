import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screen/HomeScreen/HomeScreen';
import Login from './Screen/Login/Login';
import DetailScreen from './Screen/DeatilScreen/DetailScreen';
import Navbar from './components/Navbar/Navbar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator   
      screenOptions={
        {
        headerStyle:{
          backgroundColor:'red',
        },
     headerTitleStyle:{
      fontSize:30,
      color:'white'
     }
     }}
      
      >
        {/* screen design  */}
        <Stack.Screen name="Login" component={Login} options={
          {
            headerTitle:()=><Button title='Login'/>,
            headerRight:()=><Navbar/>,
            title:'Login Page',
        headerTitleStyle:{
          fontSize:30,
          color:'white',
        },headerStyle:{
          backgroundColor:'blue'
        }

        }
      }/>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:'Home Page'}} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{title:'Detail Page'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
