import React from 'react';
import { View, Text , StyleSheet,TouchableOpacity} from 'react-native';
//import Icon from 'react-native-vector-icons/dist/FontAwesome' item,deleteItem


const ListItem = ({item})=>{
  return(
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        {/* <Text style={styles.listItemText}>{item.text}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    listItem:{
    padding: 20, 
    borderBottomWidth: 1, 
     backgroundColor: '#f8f8f8',
    borderColor: '#eee',
    justifyContent: 'center',
    backgroundColor:"#3D3C3A",
  },
  listItemView:{
    flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     justifyContent: 'center',
     
    },
    listItemText:{
        fontSize: 18,
        color:"white"
    }
})
export default ListItem;