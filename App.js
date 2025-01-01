import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  // Función para actualizar la entrada (input)
  const handlePress = (value) => {
    setInput(input + value);
  };

  // Función para manejar la operación de igual (=)
  const handleEqual = () => {
    try {
      setOutput(eval(input).toString());
    } catch (error) {
      setOutput('Error');
    }
  };

  // Función para manejar la limpieza de la entrada y salida
  const handleClear = () => {
    setInput('');
    setOutput('');
  };

  // Función para manejar la eliminación del último carácter
  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      {/* Pantalla para mostrar la entrada */}
      <View style={styles.screen}>
        <Text style={styles.inputText}>{input}</Text>
        <Text style={styles.outputText}>{output}</Text>
      </View>

      {/* Contenedor de los botones */}
      <View style={styles.buttonContainer}>
        {/* Fila de botones */}
        <View style={styles.row}>
          <Button text="7" onPress={handlePress} buttonStyle={styles.numberButton} />
          <Button text="8" onPress={handlePress} buttonStyle={styles.numberButton} />
          <Button text="9" onPress={handlePress} buttonStyle={styles.numberButton} />
          <Button text="/" onPress={handlePress} buttonStyle={styles.operatorButton} />
        </View>
        <View style={styles.row}>
          <Button text="4" onPress={handlePress} buttonStyle={styles.numberButton} />
          <Button text="5" onPress={handlePress} buttonStyle={styles.numberButton} />
          <Button text="6" onPress={handlePress} buttonStyle={styles.numberButton} />
          <Button text="*" onPress={handlePress} buttonStyle={styles.operatorButton} />
        </View>
        <View style={styles.row}>
          <Button text="1" onPress={handlePress} buttonStyle={styles.numberButton} />
          <Button text="2" onPress={handlePress} buttonStyle={styles.numberButton} />
          <Button text="3" onPress={handlePress} buttonStyle={styles.numberButton} />
          <Button text="-" onPress={handlePress} buttonStyle={styles.operatorButton} />
        </View>
        <View style={styles.row}>
          <Button text="0" onPress={handlePress} buttonStyle={styles.numberButton} />
          <Button text="." onPress={handlePress} buttonStyle={styles.numberButton} />
          <Button text="=" onPress={handleEqual} buttonStyle={styles.equalButton} />
          <Button text="+" onPress={handlePress} buttonStyle={styles.operatorButton} />
        </View>
        <View style={styles.row}>
          <Button text="C" onPress={handleClear} buttonStyle={styles.clearButton} />
          {/* Ajustamos el tamaño del botón DEL para que sea más grande */}
          <Button text="DEL" onPress={handleDelete} buttonStyle={styles.deleteButton} />
        </View>
      </View>
    </View>
  );
}

const Button = ({ text, onPress, buttonStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={() => onPress(text)}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  // Pantalla para mostrar los números ingresados
  screen: {
    width: '90%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 20,
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 20,
  },
  inputText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  outputText: {
    fontSize: 30,
    color: '#bbb',
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    padding: 20,
    margin: 5,
    width: '22%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
  numberButton: {
    backgroundColor: '#4CAF50', // Verde para números
  },
  operatorButton: {
    backgroundColor: '#FF9800', // Naranja para operadores
  },
  equalButton: {
    backgroundColor: '#2196F3', // Azul para el botón de igual
  },
  clearButton: {
    backgroundColor: '#F44336', // Rojo para el botón C
  },
  deleteButton: {
    backgroundColor: '#9E9E9E', // Gris para el botón DEL
    width: '46%', // Hacemos el botón DEL más grande
  },
});