import React, { useEffect, useState } from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";
import socket from "@/socket/socket"
import { TextInput } from "react-native-gesture-handler";
import { styles } from "@/styles/index";

export default function Socket(){
    const roomPrefix = "chat";

    //Form 1
    const [message, setMessage] = useState("");
    const [receivedMessage, setReceivedMessage] = useState("");    
    
    //Form 2
    const [message2, setMessage2] = useState("");
    const [receivedMessage2, setReceivedMessage2] = useState("");
    
    useEffect(() => {
        socket.emit('join_room', 'chat-1');
        socket.emit('join_room', 'chat-2');

        socket.on('received_message', (response: { room: string, msg:string }) => {
            console.log(response);
            if (response.room === 'chat-1') {
                setReceivedMessage(response.msg);
            } else if (response.room === 'chat-2'){
                setReceivedMessage2(response.msg);
            }
        });

        return () => { socket.off('receive_message'); };
    }, []);

    const sendMessage = (chat:string) => {
        const targetRoom = `${roomPrefix}-${chat}`;
        const msg = chat === '1' ? message : message2;

        socket.emit('send_message', {
            room: targetRoom, message: msg
        });

        if (chat === '1') {
            setMessage('');
        } else {
            setMessage2('');
        }
    };

    return (
        <View style={styles.container}>
            {/*form 1*/}
            <View>
                <Text style={styles.title}>Canal: Chat1</Text>
                <TextInput 
                    placeholder="Digite sua mensagem"
                    value={message}
                    onChangeText={setMessage}
                    style={styles.input}
                />

                <TouchableOpacity 
                    onPress={() => sendMessage('1')}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Enviar mensagem</Text>
                </TouchableOpacity>

            </View>

            <View></View>

            {/*form 2*/}
            <View>
                <Text style={styles.title}>Canal: Chat2</Text>
                <TextInput 
                    placeholder="Digite sua mensagem"
                    value={message2}
                    onChangeText={setMessage2}
                    style={styles.input}
                />

                <TouchableOpacity 
                    onPress={() => sendMessage('2')}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Enviar mensagem</Text>
                </TouchableOpacity>

                <Text>Mensagem recebida:</Text>
                <Text>{receivedMessage || 'nenhuma mensagem recebida'}</Text>
            </View>

        </View>
    );
}