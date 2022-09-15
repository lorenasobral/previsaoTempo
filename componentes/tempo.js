import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function components() {
 return (
   <>
        <Text style={styles.titulo}>Dados do Tempo</Text>
        <Text style={styles.texto}>Máx: </Text>
        <Text style={styles.texto}>Mín: </Text>
        <Text style={styles.texto}>Descrição: </Text>

   </>
  );
}

const styles = StyleSheet.create({
    titulo:{
        fontSize:25
    },
    texto:{
        fontSize:20
    }
})
