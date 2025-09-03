import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Usuário</Text>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Jules</Text>
      <Text style={styles.bio}>
        Engenheiro de software especialista em React Native, resolvendo problemas um componente de cada vez.
      </Text>
      <Link href="/settings" asChild>
        <Button title="Ir para Configurações" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
    paddingHorizontal: 20,
  },
});
