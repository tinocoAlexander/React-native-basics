import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AhorrosScreen from './components/AhorrosScreen';
import PerfilScreen from './components/PerfilScreen';
import ConfigScreen from './components/ConfigScreen';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Inicio (Home)</Text>

      <Button
        title="Ir a Ahorros"
        onPress={() => navigation.navigate('Ahorros')}
      />

      <Button
        title="Ir a Perfil"
        onPress={() => navigation.navigate('Perfil')}
      />

      <Button
        title="Ir a Configuración"
        onPress={() => navigation.navigate('Configuración')}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Inicio' }}
        />
        <Stack.Screen 
          name="Ahorros" 
          component={AhorrosScreen} 
          options={{ title: 'Ahorros' }}
        />
        <Stack.Screen 
          name="Perfil" 
          component={PerfilScreen} 
          options={{ title: 'Perfil' }}
        />
        <Stack.Screen 
          name="Configuración" 
          component={ConfigScreen} 
          options={{ title: 'Configuración' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 22,
    marginBottom: 20
  }
});
