import React,  { useState }  from 'react';
import { Ionicons } from '@expo/vector-icons';
import 
  {ScrollView,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text, View,
  TextInput} 
  from 'react-native';
export default function App() {
  const [list,setList] = useState([]);
  const [val,setVal] = useState('');  
  add_fun=()=>{
    setList([...list,val]);
        console.log(list)
        setVal("");
  };

  del_fun=(index)=>{
    const length=list.length-1;
  if(index!=0 && index!=length){
    const copy_arr=list;
    const first_arr=list.slice(0,index);
    const second_arr=copy_arr.slice(index+1);
    second_arr.concat(first_arr);
    setList(second_arr,first_arr);
    }
  else if(index==0){
    const arr=list.slice(1)
    setList(arr)

    }
  else{
      const arr=list.slice(0,length);
    setList(arr)
    }
  };



  mod_fun=(value,index)=>{
    const length=list.length-1;
    setVal(value)
  if(index!=0 && index!=length-1){
    const first_arr=list.slice(0,index);
    const second_arr=list.slice(index+1);
    first_arr.concat(second_arr);
    setList(first_arr)
      }
  else if(index==0){
    const arr=list.slice(1)
     setList(arr) 
    } 
  else{
      const arr=list.slice(0,length);
      setList(arr)
  }
  };
    return (
  <View style={styles.container}>
  <ImageBackground 
  source={{uri:"https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"}}
   style={styles.image}
  >

  <View style={styles.input_add}>

  <TextInput style={styles.input}
  onChangeText={(text)=>setVal(text) }
  value={val}
  />

    <Text style={styles.add} onPress={()=>add_fun()} >
      Add
    </Text>
  </View>
  <ScrollView style={styles.list_view}>
  {list.map((v,i)=>{return(<View
    style={{flexDirection:"row" , marginTop:3}}>
  <Text style={styles.list_element}>{v}</Text>

  <TouchableOpacity style={styles.del}
 onPress={()=>del_fun(i)}
  >
      <Text style={styles.del_text}>del</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.mod}
onPress={()=>mod_fun(v,i)}
  >
      <Text style={styles.mod_text}>mod</Text>
  </TouchableOpacity>

  </View>
)} ) }

  </ScrollView>
  </ImageBackground>
  </View> 
  );
}
const styles=StyleSheet.create({
container:{
  width:"100%",
  height:"100%",
  backgroundColor:"gold",

},
  image: {
      marginTop:20,
    flex: 1,
    resizeMode: "cover",
  },
input:{
  width:"80%",
  height:40,
  marginLeft:30,
  marginTop:20,
  backgroundColor:"transparent",
  borderBottomWidth:4,
  borderColor:"yellow",
  color:"silver",
  textAlign:"center",

},
add:{
  backgroundColor:"gold",
  width:"80%",
  height:30,
  marginTop:20,
  marginLeft:30,
  color:"silver",
  textAlign:"center",
  fontWeight:"bold",
  fontSize:20
},
mod:{
width:35,
position:"absolute",
left:290
},
del:{
width:35,
position:"absolute",
left:260
},
list_view:{
  marginTop:60,
  opacity:1,
},
list_element:{
  color:"white",
  fontSize:17,
  marginLeft:10
},
mod_text:{
  color:"gold"
},
del_text:{
  color:"red"
}
});
