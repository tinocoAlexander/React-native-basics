import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AhorrosScreen({ navigation }) {
  const [ahorro, setAhorro] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Ahorros</Text>
      <Text style={{ marginBottom: 20, fontSize: 18 }}>
        Total de ahorro: {ahorro}
      </Text>

      <Button
        title="Sumar +10"
        onPress={() => setAhorro(ahorro + 10)}
      />

      <Button
        title="Resetear"
        onPress={() => setAhorro(0)}
        color="#FF0000"
      />

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
