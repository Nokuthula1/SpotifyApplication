import React from 'react';
import { View, Text , StyleSheet} from 'react-native';


const Header = ({title})=>{
  return(
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps  = {
    title: 'Spotify',
}

const styles = StyleSheet.create({
  header:{
    height: 10, 
    padding: 15, 
    backgroundColor: 'grey'
  },
  text:{
    color: 'white',
     fontSize: 30,
     textAlign: 'center'
    },
})
export default Header;