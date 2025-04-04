import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import CustomButton from "./Title";

export default function HomeScreen(){
    const VALUE = 0;
    const [count, setCount] = useState(VALUE);

    function alterarValor(valor: number){
        return count + valor 
    }

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10}}>
            <Text>Hello World!</Text>

            <Text>Contador: {count}</Text>
            {/* <Button title="Aumentar" onPress={() => {setCount(count + 1)}}/>
            <Button title="Diminuir" onPress={() => {setCount(count - 1)}}/>
            <Button title="Resetar" onPress={() => {setCount(count - count)}}/> */}

            <Button title="Aumentar" onPress={() => {setCount(alterarValor(1))}}/>
            <Button title="Diminuir" onPress={() => {setCount(alterarValor(-1))}}/>
            <Button title="Resetar" onPress={() => {setCount(VALUE)}}/>
            <CustomButton title="Nome"/> {/*teste de botão*/}
        </View>
    );
}