
// const Tab = () => {
//     const tabBarheight = useBottomTabBarHeight();
//     return (
//       <View style={styles.container}>
//         <View style={styles.contentContainer}>
//           <Text style={styles.title}>Home</Text>
//         </View>
  
//         {/* Scrollable Content */}
//         <View style={styles.scrollContainer}>
//           <ScrollView
//             indicatorStyle="white"
//             contentContainerStyle={[
//               styles.scrollContentContainer,
//               {paddingBottom: tabBarheight},
//             ]}>
//             {data.map((item) => (
//               <View key={item.id} style={styles.imageContainer}>
//                 <Image
//                   style={styles.imageCard}
//                   source={{uri: item.image_url}}
//                   resizeMode="cover"
//                 />
//               </View>
//             ))}
//           </ScrollView>
//         </View>
//       </View>
//     );
//   };
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#0f0f0f',
//     },
//     contentContainer: {
//       marginTop: 50,
//       alignItems: 'center',
//       paddingHorizontal: 20,
//       paddingBottom: 20,
//     },
//     title: {
//       fontSize: 20,
//       color: '#fff',
//     },
//     scrollContainer: {
//       flex: 1,
//     },
//     scrollContentContainer: {
//       alignItems: 'center',
//     },
//     imageContainer: {
//       marginBottom: 14,
//     },
//     imageCard: {
//       borderRadius: 14,
//       width: ITEM_WIDTH,
//       height: ITEM_HEIGHT,
//     },
//   });
  
//   export default Tab;



// // import { createBottomTabNavigator } from 'react-navigation-tabs';
// // import { View, StyleSheet, Image, TouchableOpacity,Text, FlatList,ImageBackground} from 'react-native';
// // import { createStackNavigator } from '@react-navigation/stack';

// // import HomeScreen from '../screens/Home';
// // import SearchScreen from '../screens/Search';
// // import UmtapoScreen from '../screens/Umtapo';

// // const Tab = createBottomTabNavigator();

// // const Tabs = ()=>{
// //     return(
// //         <Tab.Navigator
// //             // tabBarOptions={{
// //             //     showLabel:false,
// //             //     style:{
// //             //         position:'absolute',
// //             //         bottom:25,
// //             //         left:20,
// //             //         right:20,
// //             //         elevation:0,
// //             //         backgroundColor:'#ffffff',
// //             //         borderRaduis:15,
// //             //         height:90,
// //             //         ...style.shadow
// //             //     }
// //             // }}
// //         >

// //             <Tab.Screen name= "Ikhaya" component = {HomeScreen}
// //                 // options={{
// //                 //     tabBarIcon:({focused})=>(
// //                 //         <View style={{alignItems:'center', justifyContent:'center', top:10}}>
// //                 //             {/* <Image
// //                 //             source = {require('./images/home.png')}
// //                 //             resizeMode="contain"
// //                 //             style={{
// //                 //                 width:25,
// //                 //                 height:25,
// //                 //                 tintColor:focused? '#FEFCFF':'#F5F5F5',
// //                 //             }}/> */}
// //                 //             <Text style = {{ color:focused? '#FEFCFF':'#F5F5F5', fontSize:12}}>Ikhaya</Text>
// //                 //         </View>
// //                 //     )
// //                 // }}
// //                 />
// //             <Tab.Screen name= "Sesha" component = {SearchScreen}/>
// //             <Tab.Screen name= "Umtapo Wakho" component = {UmtapoScreen}/>

// //         </Tab.Navigator>
// //     );
// // }

// // const styles = StyleSheet.create({
// //     shadow:{
// //         shadowColor:'#7f5df0',
// //         shadowOffset:{
// //             width:0,
// //             height:10,
// //         },
// //         shadowOpacity:0.25,
// //         shadowRadius:3.5,
// //         elevation:5
// //     }
// // })

// // export default Tabs;