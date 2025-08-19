import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 15,         
        borderRadius: 5,             
        alignItems: 'center',        
        marginBottom: 20,            
    },
    buttonText: {
        color: '#fff',               
        fontSize: 16,                
        fontWeight: 'bold',          
    },
    receivedMessageTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
    },
    line: {
        padding: 1,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#000'
    },
    receivedMessage: {
        fontSize: 16,
        color: '#333',
        marginTop: 10,
        padding: 10,
        backgroundColor: '#e8e8e8',
        borderRadius: 5,
        textAlign: 'center',
    },
});