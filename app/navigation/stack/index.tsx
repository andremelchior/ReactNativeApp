import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

export default function OptionsScreen(){
    const router = useRouter();
    return(
        
        <View>
            <Text>Estou na página Options</Text>
            <Button 
                title="Ir para detalhes" 
                onPress={() => router.push("/navigation/stack/details")}
            />
        </View>
    );
}