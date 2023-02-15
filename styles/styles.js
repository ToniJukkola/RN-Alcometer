import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    lightTheme: {
      backgroundColor: '#f5fcff',
      color: '#000000',
    },
    darkTheme: {
      backgroundColor: '#1a1a1a',
      color: '#FFFFFF',
    },
    headerText: {
      fontSize: 40,
      fontWeight: 'bold',
      marginBottom: 40
    },
    switchContainer: {
      margin: 20,
      flexDirection: 'row',
      alignItems: 'right',
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
    genderButton: {
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
      alignItems: 'center'
    },
    resultText: {
      fontSize: 20,
      fontWeight: 'bold'
      
    },
    selected: {
      backgroundColor: 'lightblue',
    },
  });