import { useRouter } from "expo-router";
import React from "react";
import { View, Text, Button } from "react-native";

export default function SettingsScreen(){

    const router = useRouter();
    return(
        <View>
            <Text>Estou na tela de Configuração</Text>
        </View>
    );
}