import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddBookScreen from "./screens/AddBookScreen";
import ListScreen from './screens/ListScreen'


const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="home"
                screenOptions={{
                    headerShown: false,
                }}
                id='nav'>
                <Stack.Screen name="home" component={HomeScreen} />
                <Stack.Screen name="add" component={AddBookScreen} />
                <Stack.Screen name="list" component={ListScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}