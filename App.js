import { React } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App () {
  return (
  <View>
    <View>
      <Text style={styles.titulo}> MACAÉ NA BOLA</Text>
    </View>
   <View style={styles.bloco}>
    <Text style={styles.label}>CIDADE: </Text>
      <TextInput
      placeholder='Digite o nome da cidade'
      style={styles.input}
      />
  </View>
<View style={styles.bloco}>
  <TouchableOpacity style={styles.botao}>
<Text style={styles.textoBotao}>Buscar</Text>
  </TouchableOpacity>
</View>
</View>
  );
}

const styles = StyleSheet.create({
  

  }
)