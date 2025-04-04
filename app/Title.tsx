import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface Props{
    title: string;
}

export default function CustomButton({title}: Props){
    return (
        <TouchableOpacity>
            <Text>{title}</Text>
        </TouchableOpacity>
    );
}