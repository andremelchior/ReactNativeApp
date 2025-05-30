import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

export default function Detail(){
    const {id} = useLocalSearchParams(); //Obtem ID da url 
    return (
        <View>
            <Text>
                Detalhe: {id}
            </Text>
        </View>
    );
}