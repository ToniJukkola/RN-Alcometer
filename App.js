import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, Switch, Appearance } from 'react-native';
import styles from './styles/styles';
const Alcometer = () => {

  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('male');
  const [drinks, setDrinks] = useState('');
  const [hours, setHours] = useState('');
  const [bac, setBac] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(Appearance.getColorScheme() === 'light');


  const Theme = isDarkMode ? styles.darkTheme : styles.lightTheme;

    const calculate = () => {
      if (!weight || !drinks || !hours) {
        window.alert('Please fill in all required fields');
        return;
      }
      const alcoholConsumed = drinks * 0.33; 
      const grams = alcoholConsumed * 8 * 4.5;
      const burning = weight / 10;
      const gramsLeft = grams - burning * hours;
      const r = gender === 'male' ? 0.70 : 0.60;
      const bacResult = gramsLeft / (weight * r);
      setBac(bacResult.toFixed(2));
    };

    const clearInputs = () => {
      setWeight('');
      setGender('male');
      setDrinks('');
      setHours('');
      setBac(0);
    };

    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
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
      if(bac < 0.5 && bac>0){
          return{
            color: 'green'
          }
      }
      if(bac<0 && bac <-0){
         window.alert('Negative result, try again'),
          clearInputs();
          return;
      }
      if(weight > 300 || drinks > 50 || hours > 30){
        window.alert('Parameters are wrong, try again'),
         clearInputs();
         return;
     }
  
    };

  return (
  <ScrollView>
    <View style={[styles.container, Theme]}>
      <Text style={[styles.headerText, Theme]}>Alcometer</Text>
      <View style={styles.switchContainer}>
        <Text style={[styles.switchLabel, Theme]}>Light/Darkmode </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleDarkMode}
          value={isDarkMode}
        />
      </View>
      <View style={[styles.inputContainer, Theme]}>
        <Text style={[styles.inputLabel, Theme]}>Weight (kg):</Text>
        <TextInput
          style={[styles.input, Theme]}
          keyboardType='numeric'
          returnKeyType={'done'}
          value={weight}
          onChangeText={text => setWeight(text)}
          maxLength={3}
        />
      </View>
      <View style={[styles.inputContainer, Theme]}>
        <Text style={[styles.inputLabel, Theme]}>Number of drinks:</Text>
        <TextInput
          style={[styles.input, Theme]}
          keyboardType='numeric'
          returnKeyType={'done'}
          value={drinks}
          onChangeText={text => setDrinks(text)}
          maxLength={2}
        />
      </View>
      <View style={[styles.inputContainer, Theme]}>
        <Text style={[styles.inputLabel, Theme]}>Time (hours):</Text>
        <TextInput
          style={[styles.input,Theme]}
          keyboardType='numeric'
          returnKeyType={'done'}
          value={hours}
          onChangeText={text => setHours(text)}
          maxLength={2}
        />
      </View>
      <View style={[styles.inputContainer,Theme]}>
        <Text style={[styles.inputLabel,Theme]}>Gender:</Text>
          <TouchableOpacity
            style={[styles.genderButton, gender === 'male' && styles.selected]}
            onPress={() => setGender('male')}
          >
            <Text>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderButton, gender === 'female' && styles.selected]}
            onPress={() => setGender('female')}
          >
            <Text>Female</Text>
          </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => calculate()} style={[styles.calculateButton]}>
        <Text style={styles.calculateButtonText}>Calculate</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => clearInputs()} style={[styles.calculateButton]}>
        <Text style={styles.calculateButtonText}>Clear all</Text>
      </TouchableOpacity>
      <View style={[styles.resultContainer, Theme]}>
      <Text style={[styles.resultText, Theme, resultColor()]}>Your blood alcohol level:</Text>
        <Text style={[styles.resultText, Theme, resultColor()]}>{bac}</Text>
        <Text style={[styles.authorText, Theme]}>Author: Toni Jukkola</Text>
      </View>
      
    </View>
  </ScrollView>
  );
};
export default Alcometer;