import { Link } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercício de Flexbox</Text>
      <View style={styles.flexContainer}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
      </View>
      <Link href="/profile" asChild>
        <Button title="Ir para o Perfil" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 30,
  },
  box: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  box1: {
    backgroundColor: 'coral',
  },
  box2: {
    backgroundColor: 'skyblue',
  },
  box3: {
    backgroundColor: 'lightgreen',
  },
});
