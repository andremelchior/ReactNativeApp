import React from "react";
import { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

interface Props{
    title: string;
}

export default function Form({title}: Props){
    const FORM = '';
    const [form1, setForm1] = useState(FORM);
    const [form2, setForm2] = useState(FORM);
    const [form3, setForm3] = useState(FORM);

    return (
        <View>
            <Text>{form1}</Text>
            <Text>{form2}</Text>
            <Text>{form3}</Text>

            <TextInput
                placeholder={title}
                onChangeText={setForm1}
            />
            <TextInput
                placeholder={title}
                onChangeText={setForm2}
            />
            <TextInput
                placeholder={title}
                onChangeText={setForm3}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>

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