import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

export default function PerfilScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Perfil</Text>
      <Text style={{ fontSize: 18 }}>Nombres: Alexander Tinoco - Ricardo Rodriguez</Text>
      <Text style={{ fontSize: 18 }}>Edad: 19</Text>
      <Text style={{ fontSize: 18 }}>Ciudad: Durango, Dgo.</Text>

      {/* Botón de regresar */}
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
