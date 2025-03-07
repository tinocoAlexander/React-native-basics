import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

export default function ConfigScreen({ navigation }) {
  const handleConfigPress = (opcion) => {
    Alert.alert('Configuración seleccionada', opcion);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Configuración</Text>

      <Button 
        title="Cambiar tema"
        onPress={() => handleConfigPress('Cambiar tema')}
      />
      <Button 
        title="Cambiar idioma"
        onPress={() => handleConfigPress('Cambiar idioma')}
      />
      <Button 
        title="Notificaciones"
        onPress={() => handleConfigPress('Notificaciones')}
      />

      {/* Botón de regreso */}
      <View style={{ marginTop: 20 }}>
        <Button 
          title="Regresar"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 22,
    marginBottom: 20
  }
});
