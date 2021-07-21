import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';


Icons.loadFont();


const Library = () => {

    const buttonClickedHandler = () => {
      console.log('You have been clicked a button!');
      // do something
    };
  
    return (
      <View style={styles.screen}>
        <TouchableOpacity
          onPress={buttonClickedHandler}
          style={styles.roundButton1}>
        
          <Icons  name={'shuffle'} size={20} color="green"/>
        </TouchableOpacity>
  
        <TouchableOpacity
          onPress={buttonClickedHandler}
          style={styles.roundButton2}>
          <Text>I'm another button</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  
  /// Just some styles
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    roundButton1: {
      width: 20,
      height: 20,
      borderRadius: 20,
      backgroundColor: 'white',
    },
    roundButton2: {
      marginTop: 20,
      width: 150,
      height: 150,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor: '#ccc',
    },
  });
export default Library;