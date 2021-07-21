import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity,Text, FlatList,ImageBackground,Dimensions} from 'react-native';
import {useState} from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/Ionicons';


Icon.loadFont();
Icons.loadFont();



const {width} = Dimensions.get('screen');


const Home = () => {
  // const tabBarheight = 20;
  const [items, setItems] = useState([
    {name:'Abalaleli benyanga anbangu-166,307 Abalaleli benyanga anbangu-166,307 ',
     followers:"OBALANDELAYO",},
    
  ])

  const [tracks, setTrack] = useState([
    {id:1,
      track:"I'm Fine- IMANU Remix",
      numbers:"823,428",
    image:'./images/thumbnail.jpeg'},
    {id:2,
      track:"I'm Fine",
    numbers:"1043,956",
    image:'./images/thumbnail.jpeg'},
  ])

  const [lovedSongs, setSong] = useState([
    {title:'Izingoma Ezithandiwe',
    number:"5 izingoma ", 
    test: " High Klassified",
   
    imageL:'./images/cover.jpg'},
  ])
  
  return (
    <ImageBackground style={styles.img} source = {require('../images/cover.jpg')}>

    <View style={[styles.container, {flexDirection: "column"}]}>
      <View style={{ flex: 1, }} ></View>
      <View style={{ flex: 2, }} ></View>
      <View >
      <Text style={styles.headerText}>High Klassified</Text>
      </View>
        <LinearGradient
          colors={['#252627', '#111111', '#111111', '#111111']}
          style={styles.linearGradient, { flex: 3}}>

          <View style={{ flexWrap: 'wrap'}}>
            <FlatList data={items} 
            renderItem={({item})=>( 
                <TouchableOpacity >
                  <View style={styles.test}>
                    <View style={styles.infoBox}>
                      <Text style={styles.listItemText}>{item.name} </Text>
                      <View style={{flexDirection: "row"}}>
                        <Text style={styles.listItemAbalandeli}>{item.followers}</Text>
                        <Icons name="ios-ellipsis-horizontal-sharp" size={20} color="#C0C0C0" style={{marginLeft: 30, top:10}}/>
                      </View>
                  </View>
                 
                  <View style={styles.infoBoxs}>
                  <TouchableOpacity >
                    <View style={styles.btnPlay}>
                      <Icon name="play" size={30} color="white" style={{left: 4,}}/>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity >
                    <View style={styles.circle}>
                      <Icons  name={'shuffle'} size={18} color="green"/> 
                    </View>
                    </TouchableOpacity>
                    </View>  
                  </View>
                </TouchableOpacity>
                )}/>  
              </View>

              <View style={{padding:10}}>
                <FlatList data={lovedSongs} 
                  renderItem={({item})=>( 
                <TouchableOpacity >
                <View style={styles.test}>
                  <View style={styles.izingoma}>
                    <ImageBackground source = {require('../images/cover.jpg')} style={{height: 40, width: 40}} imageStyle={{ borderRadius: 25}}>
                      <View style={styles.loveBack}>
                        <View style={styles.loveIcon}><Icon name="heart" size={15} color="white" style={{ top: 2}}/></View>
                      </View>
                    </ImageBackground>
                  </View>
                <View style={styles.infoBox}>
                  <Text style={styles.listItemIzingoma}>{item.title}</Text>
                  <Text style={styles.listItemIzingom}>{item.number}<Icons name="ios-ellipse-sharp" size={5} style={{color:"#DCDCDC"}}/> {item.test}</Text>
                </View>

                <TouchableOpacity>
                <Icon name="angle-right" size={30} color="#C0C0C0"  style={styles.infoBoxs}/>
                </TouchableOpacity>
                </View>
            </TouchableOpacity> )}/> 
            </View>

        <View>
          <Text style={styles.okudumileText}>Okudumile</Text>
        </View>

        <View>
          
        <FlatList data={tracks} 
          renderItem={({item})=>( 
            <TouchableOpacity >
              <View style={styles.rows}>
                <Text style={styles.id}>{item.id}</Text>
                  <View><Image source = {require('../images/thumbnail.jpeg')} style={styles.thumbImg}/></View>
                <View style={styles.infoBox}>
                  <Text style={styles.listItemIzingomas}>{item.track}</Text>
                  <Text style={styles.listItemIzingoms}>{item.numbers}</Text>
                </View>

                {/* <View style={styles.infoBoxs}> */}
                {/* <TouchableOpacity style={styles.infoBoxes}> */}
                  <Icons name="ios-ellipsis-horizontal-sharp" size={20} color="#C0C0C0"  style={styles.infoBoxs}/>
                {/* </TouchableOpacity> */}
                {/* </View> */}
              </View>
            </TouchableOpacity> )}/> 

          </View>  
        </LinearGradient>
      </View>

      

      <View>
      
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  img:{
    flex: 1,
    resizeMode: 'cover',
  },
  id:{
    width: 30,
    color:"white",
    padding:10,
    fontSize:18,
    marginRight: 10
  },
  headerText:{
      fontSize: 55,
     fontWeight: "bold",
      color: "white",
      alignItems: 'center',
      justifyContent: 'center',
      padding:5,
      // fontFamily:"gilroy-bold"
     
    },
    listItemView:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      justifyContent: 'center',
      padding:10,
      fontFamily:"gilroy-bold"
      
       
      },
      row:{
        flex: 1, 
        flexDirection: 'row',
      
      },
      rows:{
        flex: 1, 
        flexDirection: 'row',
        padding:2
      },
      listItemText:{
          fontSize: 15,
          color:"#E5E4E2",
          padding:18,
          flexWrap: 'wrap',
          flexShrink: 0.5
      },
      listItemAbalandeli:{
        fontSize: 15,
        color:"white",
        padding:8,
        fontWeight: "bold",
        borderWidth: 1.5,
        borderColor: "white",
        borderRadius: 5,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent:'center',
        marginBottom:5
        
    },
  listItemIzingoma:{
      fontSize: 20,
      color:"white",
      padding:5,
      // fontWeight: "bold",
      marginLeft:10,
      fontFamily:"gilroy-bold"
      // padding:10
      
  },
  listItemIzingom:{
    fontSize: 15,
    color:"#DCDCDC",
    padding:3,
    marginLeft:10
},
listItemIzingomas:{
  fontSize: 20,
  color:"white",
  padding:5,
  marginLeft:15,
},
listItemIzingoms:{
  fontSize: 15,
  color:"#DCDCDC",
  marginLeft:15
},
test:{
      flexDirection:'row',
      height: 100,
      flex: 1, 
      
    },
    infoBox:{
      width:"70%",
      alignItems: 'flex-start',
      justifyContent:'flex-start'
    },
    infoBoxs:{
      width:"30%",
      alignItems: 'flex-end',
      justifyContent:'flex-end',
      padding:10
    },
    infoBoxes:{
      width:"30%",
      alignItems: 'flex-end',
      justifyContent:'flex-end',
  
    },
    playBtn:{
      alignItems: 'flex-end',
      width:50,
      height:50,
    },
    izingoma:{
      width:40, 
      height:40,
      borderRadius:30,
      marginLeft:10,
      marginRight:20
    },
    thumbImg : {
      width:40, 
      height:40,
     padding:10
    },
    playList:{
      alignItems:"center",
      flex:1
    },
    gradient: {
      flex: 1,
    },   
    okudumileText:{
      color: "white",
      textAlign: 'left', 
      fontWeight: "bold",
      fontSize: 22,
      padding:10,
      paddingLeft:12,
      flexShrink: 1
    },
    loveIcon:{
      alignItems:"flex-end",
      justifyContent:"flex-end",
      width: 25,
      height: 25,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      borderRadius: 20,
      backgroundColor: '#12AD2B',
      top: -2,
      left: -2,

    },
    loveBack:{
      backgroundColor: '#111111',
      top: 20,
      left: 20,
      borderRadius: 20,
      padding: 5,
    },
    circle: {
      width: 25,
      height: 25,
      borderRadius: 25,
      backgroundColor: 'white',
      color: "green",
      alignItems: "center",
      justifyContent:"center",
      top: 5,
    },
   btnPlay: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 70,
    backgroundColor: '#12AD2B',
    top: 20,
      
      
  },
});
  
  export default Home;

