import CustomButton from "@/components/CustomButton";
import Form from "@/components/Form";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function HomeScreen(){
    const VALUE = 0;
    const NOME = 'André';
    const [count, setCount] = useState(VALUE);
    const [nome, setName] = useState(NOME);

    function alterarValor(valor: number){
        return count + valor 
    }

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10}}>
            <Text>Bem-vindo ao app, {nome}!</Text>

            <Text>Contador: {count}</Text>
            {/* <Button title="Aumentar" onPress={() => {setCount(count + 1)}}/>
            <Button title="Diminuir" onPress={() => {setCount(count - 1)}}/>
            <Button title="Resetar" onPress={() => {setCount(count - count)}}/> */}

            <Button title="Aumentar" onPress={() => {setCount(alterarValor(1))}}/>
            <Button title="Diminuir" onPress={() => {setCount(alterarValor(-1))}}/>
            <Button title="Resetar" onPress={() => {setCount(VALUE)}}/>

            <TextInput
                placeholder="Digite seu nome: "
                onChangeText={setName}
            />

            <CustomButton 
                title='botão vermelho'
                onPress={() => {setName('André ' + count)}}
            />

           
            <Form title='Digite algo'/>
        </View>
    );
}