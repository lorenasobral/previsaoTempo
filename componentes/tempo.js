import React from "react";
import { Text } from "react-native-web";

export default function tempo(){
    return (
        <>
       <Text>Min: </Text>
       <Text>Max: </Text>
       <Text>Descrição: </Text>
        </>

    );
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 20,
        marginTop: 10,
    },
});