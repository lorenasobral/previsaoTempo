import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList} from 'react-native';
import Tempo from './componentes/tempo';

import Api from  './componentes/Api';

export default function App() {
  const [cidade, setCidade] = useState("São Paulo");
  const [dados, setDados] = useState("");

  async function previsao(){
    const response = await Api.get(`weather?array_limit=1&fields=only_results,temp,city_name,forecast,max,min,date,description&key=0d3f5225&city_name=${cidade},SP`);
    setDados(response.data.forecast);
  }
  return (
    <View style={styles.container}>
      <View style={styles.bloco}>
        <Text style={styles.titulo}>Previsão do Tempo</Text>
      </View>
      <View style={styles.blocoGeral}>
        <Text style={styles.label}>Digite sua Cidade: </Text>
        <TextInput 
          placeholder='sua cidade ...'
          style={styles.input}
          onChangeText={(value)=>setCidade(value)}
        />
      </View>
      <View style={styles.blocoGeral}>
        <TouchableOpacity style={styles.botao} onPress={previsao}>
          <Text style={styles.textoBotao}>Buscar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
          data={dados}
          renderItem={({item}) => {
            return (
              <View >
                <Text>Data: {item.date}</Text>
                <Text>Max: {item.max}</Text>
                <Text>Min: {item.min}</Text>
                <Text>Min: {item.description}</Text>
              </View>
            );
          }}

        />
    </View>




  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bloco:{
    alignItems:'center',
    marginBottom:20,
    marginTop:20
  },
  titulo:{
    fontSize:30
  },
  label:{
    fontSize:20,
    marginLeft:'10%'
  },
  input:{
    marginLeft:'10%',
    borderBottomWidth:2,
    marginRight:'10%',
    fontSize:20
  },
  botao:{
    marginLeft:'10%',
    marginRight:'10%',
    backgroundColor:'#000',
  },
  textoBotao:{
    color:'#FFF',
    fontSize:20,
    textAlign:'center'
  },
  blocoGeral:{
    marginTop:20
  }
});
