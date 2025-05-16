import { useRouter } from "expo-router";
import React from "react";
import { Button, View } from "react-native";

export default function HomeScreen(){
    const router = useRouter();
    return(
        <View>
            <Button
                title="Tabs"
                onPress={() => router.push("/navigation/tabs")}
            />
            <Button
                title="Drawer"
                onPress={() => router.push("/navigation/drawer")}
            />
            <Button
                title="Stack"
                onPress={() => router.push("/navigation/stack")}
            />
        </View>
    );
}