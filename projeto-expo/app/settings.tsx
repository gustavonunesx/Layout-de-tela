import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

const settingsOptions = [
  'Notificações',
  'Privacidade',
  'Segurança',
  'Conta',
  'Ajuda e Suporte',
  'Sobre',
  'Idioma',
  'Tema Escuro',
  'Tamanho da Fonte',
  'Qualidade do Vídeo',
  'Downloads',
  'Limpar Cache',
  'Sincronização de Dados',
  'Preferências de Rede',
  'Sair da Conta',
  'Excluir Conta',
  'Termos de Serviço',
  'Política de Privacidade',
];

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {settingsOptions.map((option, index) => (
          <View key={index} style={styles.option}>
            <Text style={styles.optionText}>{option}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Link href="/" asChild>
          <Button title="Voltar para a Tela Inicial" />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  option: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  optionText: {
    fontSize: 18,
  },
  buttonContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
});
