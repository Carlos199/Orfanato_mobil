import React from 'react';
import { View, StyleSheet, Text } from "react-native";
import { ScrollView, Switch, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';



export default function OrphanageData() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <Text style={styles.title} >Datos</Text>

      <Text style={styles.label} >Nombre</Text>
      <TextInput
        style={styles.input}
      />

      <Text style={styles.label} >Sobre</Text>
      <TextInput
        style={[styles.input, { height: 110 }]}
        multiline
      />
      <Text style={styles.label} >Whatsapp</Text>
      <TextInput
        style={styles.input}
      />
      <Text style={styles.label} >Fotos</Text>
      <TouchableOpacity style={styles.imagesInput} >
        <Feather name="plus" size={24} color="#15B6D6" />
      </TouchableOpacity>

      <Text style={styles.title} >Visitacion</Text>

      <Text style={styles.label} >Instrucciones</Text>
      <TextInput
        style={[styles.input, { height: 110 }]}
        multiline
      />
      <Text style={styles.label} >Horario de Visitas</Text>
      <TextInput
        style={styles.input}
      />
      <Feather style={styles.imagesInput} name="mic" size={45} color="#dfe453" />
      <View>
        <Text>Atiende fin de semana?</Text>
        <Switch
          thumbColor="#fff"
          trackColor={{ false: '#ccc', true: '#39CCB3' }}
        />
      </View>

      <RectButton style={styles.nextButton}>
        <Text style={styles.nexButtonText}>Guardar</Text>
      </RectButton>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: '#5c8599',
    fontSize: 24,
    fontFamily: 'Nunito_700Bold',
    marginBottom: 32,
    paddingBottom: 24,
    borderBottomWidth: 8.8,
    borderBottomColor: '#D3E2E6',
  },
  label: {
    color: '#8fa7b3',
    fontFamily: 'Nunito_600SemiBold',
    marginBottom: 8,
  },
  commet: {
    fontSize: 11,
    color: '#8fa7b3',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1.4,
    borderColor: '#d3e2e6',
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: 'top',
    
  },

  imagesInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderStyle: 'dashed',
    borderColor: '#96D2F0',
    borderWidth: 1.4,
    borderRadius: 28,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },

  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  nextButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 32,
  },
  nexButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  }
})