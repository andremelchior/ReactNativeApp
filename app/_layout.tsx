import React from "react";
import { Slot, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout(){
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: 'Blue'}}>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Inicio',
          tabBarIcon:
          ({color, size}) => <Ionicons name='home-outline' size={size} color={color}/>
        }}
      />
      <Tabs.Screen
        name='about'
        options={{
          title: 'Sobre',
          tabBarIcon:
          ({color, size}) => <Ionicons name='information-outline' size={size} color={color}/>
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          title: 'Configurações',
          tabBarIcon:
          ({color, size}) => <Ionicons name='settings-outline' size={size} color={color}/>
        }}
      />
      <Tabs.Screen
        name='notifications'
        options={{
          title: 'Notificações',
          tabBarIcon:
          ({color, size}) => <Ionicons name='notifications-outline' size={size} color={color}/>
        }}
      />
      <Tabs.Screen
        name='options'
        options={{
          title: 'Opções',
          tabBarIcon:
          ({color, size}) => <Ionicons name='options-outline' size={size} color={color}/>
        }}
      />
        
    </Tabs>
  );
}