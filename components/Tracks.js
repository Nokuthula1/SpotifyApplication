import React from 'react';
import { View, Text , StyleSheet,TouchableOpacity, FlatListItems} from 'react-native';
//import Icon from 'react-native-vector-icons/dist/FontAwesome' item,deleteItem


// const Track = ({track})=>{
//   return(
//     <TouchableOpacity style={styles.trackItem}>
//       <View style={styles.trackItemView}>
//         <Text style={styles.trackItemText}>{track.text}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };


const styles = StyleSheet.create({
    trackItem:{
    padding: 20, 
    borderBottomWidth: 1, 
    backgroundColor: '#f8f8f8',
    borderColor: '#eee',
    justifyContent: 'center',
    backgroundColor:"#0C090A",
  },
  trackItemView:{
    flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     justifyContent: 'center',
     
     
    },
    trackItemText:{
        fontSize: 18,
    }
})
export default Track;