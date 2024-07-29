import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import { useRoute } from '@react-navigation/native'

const _layout = () => {
    const router = useRouter();
  return (
    <Stack
        screenOptions={{
            headerStyle:{
                backgroundColor: 'white'
            },
            headerTintColor: 'black'
        }}
    >
        <Stack.Screen name="index" options={{
            title: 'Home'
        }}/>
        <Stack.Screen name="register/index" options={{
            title: 'Register Page',
            headerRight: () => (
                <Button title='Login' onPress={() =>
                    router.push('/login')}
                />
            )
        }}/>
        <Stack.Screen name="missing" options={{
            title: '404'
        }}/>
        <Stack.Screen name="(tabs)" options={{
            headerShown: false
        }}/>
        <Stack.Screen name="login" options={{
            title: 'Login',
            presentation: 'modal'//modal matlab niche thi avse and full screen ma nai khule
        }}/>
    </Stack>
    
  )
}

export default _layout

const styles = StyleSheet.create({})