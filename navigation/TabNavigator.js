import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Library from '../screens/Umtapo';
import Search from '../screens/Search';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();


const Tab = createBottomTabNavigator();

const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'Ikhaya':
      iconName = 'ios-home-outline';
      break;
    case 'Sesha':
      iconName = 'search';
      break;
    case 'Umtapo':
      iconName = 'library';
      break;
    default:
      break;
  }

  return <Icon name={iconName} color={color} size={30} />;
};

const TabNavigator = () => {
  return (
   
   <Tab.Navigator screenOptions={({route}) => ({tabBarIcon: ({tintColor,color}) => screenOptions(route, color),})} tabBarOptions={{activeTintColor: 'white',
    style: { backgroundColor: "#242526",
    elevation: 0,}
   }}> 
      <Tab.Screen name="Ikhaya" component={Home}  Icon = 'ios-home-outline' />
      <Tab.Screen name="Sesha" component={Search} />
      <Tab.Screen name="Umtapo" component={Library} />
    </Tab.Navigator>
  );
};


export default TabNavigator;
