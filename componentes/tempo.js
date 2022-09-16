import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function components(props) {
    let data = props.data;
 return (
   <>
        <Text style={styles.titulo}>Dados do Tempo</Text>
        <Text style={styles.texto}>Cidade: {data.city_name}</Text>
        <Text style={styles.texto}>Descrição: {data.description}</Text>
        <Text style={styles.texto}>Temperatura: {data.temp}°C</Text>

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
