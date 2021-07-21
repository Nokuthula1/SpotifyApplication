import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient' // import LinearGradient


const Search = () => {
  return (
    <View style={styles.container}>
        {/* <LinearGradient
          colors={['#3A3B3C', '#000000', '#000000' ]}
          style={styles.linearGradient}> */}
            <Text >Hello World 1235</Text>
        {/* </LinearGradient> */}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: 350,
    position:'absolute'
  },
});

export default Search;