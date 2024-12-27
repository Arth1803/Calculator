import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

const App = () => {
  const [input, setInput] = useState('');

  const handlePress = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => setInput('');
  const handleEqual = () => {
    try {
      setInput(eval(input).toString()); 
    } catch {
      setInput('Error');
    }
  };

  return (
    <View style={styles.container}>
      {/* Display styled as a text field */}
      <TextInput
        style={styles.display}
        value={input || '0'}
        editable={false} 
        placeholder="0"
        placeholderTextColor="#888"
      />
      <View style={styles.keypad}>
        <View style={styles.row}>
          {['7', '8', '9'].map((n) => (
            <TouchableOpacity key={n} style={styles.button} onPress={() => handlePress(n)}>
              <Text style={styles.buttonText}>{n}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.button} onPress={() => handlePress('/')}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          {['4', '5', '6'].map((n) => (
            <TouchableOpacity key={n} style={styles.button} onPress={() => handlePress(n)}>
              <Text style={styles.buttonText}>{n}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.button} onPress={() => handlePress('*')}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          {['1', '2', '3'].map((n) => (
            <TouchableOpacity key={n} style={styles.button} onPress={() => handlePress(n)}>
              <Text style={styles.buttonText}>{n}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.button} onPress={() => handlePress('-')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, styles.specialButton1]} onPress={handleClear}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.specialButton2]} onPress={handleEqual}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.footerText}>Calc By Arth</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
  },
  display: {
    height: 60,
    fontSize: 32,
    width: '100%',
    textAlign: 'right',
    backgroundColor: '#393E46', 
    color: '#EEEEEE',
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 50, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5, 
  },
  keypad: {
    width: '100%',
    justifyContent: 'space-evenly', 
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#00ADB5',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#EEEEEE',
  },
  specialButton1: {
    backgroundColor: '#FF5722', 
  },
  specialButton2: {
    backgroundColor: '#008000', 
  },
  footerText: {
    fontSize: 26,
    color: '#888',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default App;
