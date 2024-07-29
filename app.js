import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

export default function app() {
  return (
    <View style={styles.cotainer}>
      <Text>HEllo</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#FFF",
      alignItems:"center",
      justifyContent:"center"
    }
});