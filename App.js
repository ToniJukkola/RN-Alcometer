import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';

const Alcometer = () => {

  const [weight, setWeight] = useState('');
  const [sex, setSex] = useState('male');
  const [drinks, setDrinks] = useState('');
  const [hours, setHours] = useState('');
  const [bac, setBac] = useState(0);

    const calculate = () => {
      const alcoholConsumed = drinks * 0.33; 
      const grams = alcoholConsumed * 8 * 4.5;
      const burning = weight / 10;
      const gramsLeft = grams - burning * hours;
      const r = sex === 'male' ? 0.70 : 0.60;
      const bacResult = gramsLeft / (weight * r);
      setBac(bacResult.toFixed(2));
    };

    const resultColor = () => {
      if(bac>= 0.5 && bac <1){
        return{
          color: 'orange'
        }
      }
      if(bac>=1){
        return{
          color: 'red'
        }
      }
      if(bac<0 == NaN){
        return{
          display: 'none'
        }
      }
  
    };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Alcometer</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Weight (kg):</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          returnKeyType={'done'}
          value={weight}
          onChangeText={text => setWeight(text)}
          maxLength={3}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Number of drinks:</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          returnKeyType={'done'}
          value={drinks}
          onChangeText={text => setDrinks(text)}
          maxLength={2}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Time (hours):</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          returnKeyType={'done'}
          value={hours}
          onChangeText={text => setHours(text)}
          maxLength={2}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Sex:</Text>
          <TouchableOpacity
            style={[styles.sexButton, sex === 'male' && styles.selected]}
            onPress={() => setSex('male')}
          >
            <Text style={styles.sexText}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sexButton, sex === 'female' && styles.selected]}
            onPress={() => setSex('female')}
          >
            <Text style={styles.sexText}>Female</Text>
          </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => calculate()} style={styles.calculateButton}>
        <Text style={styles.calculateButtonText}>Calculate</Text>
      </TouchableOpacity>
      <View style={styles.resultContainer}>
      <Text>Your blood alcohol level:</Text>
        <Text style={[styles.resultText, resultColor()]}>{bac}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headerText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#525252',
  },
  inputContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputLabel: {
    width: '40%',
    fontSize: 16,
  },
  input: {
    width: '60%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: '40px',
  },
  sexButton: {
    width: '30%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    borderRadius: '40px',
  },
  calculateButton: {
    width: '80%',
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: '40px',
  },
  calculateButtonText: {
    color: 'white',
    fontSize: 20,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#525252',
    
  },
  selected: {
    backgroundColor: 'lightblue'
  },
});

export default Alcometer;