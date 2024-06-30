import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const calItems = [
    'AC', 'CE', '%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', ',', '='
  ];

  const [display, setDisplay] = useState('0');
  const [result, setResult] = useState('');
  const [isDark, setIsDark] = useState(true);

  const handleButtonClick = (value) => {

    if (display == '0') {
      return setDisplay(value);
    }
    setDisplay(display + value);
  };


  const clearDisplay = () => {
    setDisplay('0');
    setResult('')
  }

  const clearonlyDisplay = () => {
    setDisplay('0');
    // setResult('')
  }


  const calCulateResult = () => {
    try {
      setResult(eval(display));
      // setDisplay(eval(display));
    } catch (error) {
      setDisplay('Error');
    }
  }
  return (
    <View style={styles.container}>
      <View style={{ height: '40%', backgroundColor: isDark ? 'black' : 'white' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => {
            setIsDark(!isDark);
          }}>
            <View style={{ backgroundColor: isDark ?'#454951' :'#ececec', height: 30, width: 80, marginTop: '5%', borderRadius: 10, flexDirection: 'row', gap: 10, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('./images/sunIcon.png')}
                style={{ tintColor: !isDark ? 'black' : 'gray', height: 20, width: 20 }}
              />
              <Image source={require('./images/moonICon.png')}
                style={{ tintColor: isDark ? 'white' : 'white', height: 20, width: 20 }}
              />
            </View>
          </TouchableOpacity>


        </View>
        <View style={{
          flexDirection: 'column',
          paddingHorizontal: '5%',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          flex: 1,
          gap: 15
        }}>
          <Text style={{  color:isDark ? 'white' :'black', fontSize: 25 }}>
            {display}
          </Text>
          <Text style={{ color:isDark ? 'white' :'black', fontSize: 50 }}>
            {result && result}
          </Text>
        </View>

      </View>
      <View style={{ height: '60%', backgroundColor: isDark ? 'black' : 'white', paddingTop: '5%' }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
          {calItems.map((val, i) => {
            return (
              <TouchableOpacity style={{
                height: 60,
                width: '20%',
                backgroundColor: val == '/' || val == '*' || val == '.' || val == ',' || val == '=' || val == '+' || val == '-' ? 'orange' : val == 'AC' || val == '' || val == '%' || val == 'CE' ? 'white' : '#454951',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
                marginBottom: '5%',
                marginHorizontal: '2%',
                borderColor: 'grey',
                borderWidth: 1,
                overflow: 'hidden',
                shadowColor: 'black',
                shadowRadius: 5,
                shadowOpacity: 1,
                flexGrow: val == '0' ? 1 : 0
              }} key={i}
                onPress={() => {
                  val == 'AC' ? clearDisplay() :
                    val == '=' ? calCulateResult() :
                      val == 'CE' ? clearonlyDisplay() : handleButtonClick(`${val}`);
                }}
              >
                <Text style={{ color: val == 'AC' || val == 'CE' || val == '%' ? 'black' : 'white', fontWeight: "400", fontSize: 18 }}>{val}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

      </View>

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});