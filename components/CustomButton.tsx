import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props{
    title: string;
    onPress: () => void
}

export default function CustomButton({title, onPress}: Props){
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
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