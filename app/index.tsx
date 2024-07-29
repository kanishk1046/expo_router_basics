import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function index() {
  return (
    <View style={styles.container}>
      <StatusBar style="light"/>
      <Text>Home Page</Text>
      <Link href="/register" asChild>
        <Button title="Open Register page"/>
      </Link>
      <Link href="/one" asChild>
        <Button title="Open tab one"/>
      </Link>
      <Link href="/two" asChild>
        <Button title="Open tab one"/>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})