import React from "react";
import { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import CustomButton from "@/components/CustomButton";

interface Props {
    title: string;
}

export default function Form({title}: Props){
    const FORM = '';
    const [form1, setForm1] = useState(FORM);
    const [form2, setForm2] = useState(FORM);
    const [form3, setForm3] = useState(FORM);
    let text = `${form1} ${form2} ${form3}`;

    return (
        <View>

            <TextInput placeholder={title} onChangeText={setForm1} />
            <TextInput placeholder={title} onChangeText={setForm2} />
            <TextInput placeholder={title} onChangeText={setForm3} />

            <CustomButton
                title="Enviar"
                onPress={() => {
                    setForm1(`Input1: ${form1}.`);
                    setForm2(`Input2: ${form2}.`);
                    setForm3(`Input3: ${form3}.`);
                }}
                />

                <Text>
                    {text}
                </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5
    },
    text: {
        color: 'white',
        textAlign: 'center'
    }
});