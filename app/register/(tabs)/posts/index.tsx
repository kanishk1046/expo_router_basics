import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Posts() {
  return (
    <View style={{justifyContent: 'center', 
    alignItems:'center', 
    flex: 1}}>
      <Link style={{fontSize: 20}} href="/posts/1">open post 1</Link>
      <Link style={{fontSize: 20}} href="/posts/2">open post 2</Link>
      <Link style={{fontSize: 20}} href="/posts/3">open post 3</Link>
    </View>
  )
}

const styles = StyleSheet.create({})