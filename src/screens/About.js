import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
} from 'react-native';


export default class About extends React.Component {
  render(){
    return(
      <View style={styles.container}>
       <View style={styles.content}>
       <Text style={styles.h2}>Nhóm Phát Triển</Text>
      <View style={{height:20}}/>
      <View style={styles.row}>
      <Image
      style={{height:100,width:100}}
       source={{uri:'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/59685937_2362749297383070_3577093916547088384_n.jpg?_nc_cat=105&_nc_oc=AQlr-zAWksTlaZcUIQIng5vtA9Z_a02GmZsXWL9UqQj_IoIPCZr-DU9GV1Er6JSUXyBwZJfBe9dnrA3j7xjLSm4g&_nc_ht=scontent.fsgn5-2.fna&oh=c92875b7fd8a1597c8484cbe68bc8ee3&oe=5D5FE167'}}
      />
      <View style={styles.head}>
      <Text style={styles.head}>Nguyễn Văn Hiếu</Text>
      <Text style={styles.head}>Lê Văn Giác</Text>
      <Text style={styles.head}>Trần Chí Lâm</Text>
      </View>
      </View>
        <Text style={styles.h31}>Cảm ơn các bạn đã sử dụng app </Text>
       </View>
      
      </View>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    justifyContent: 'center',
    flex:1,
    backgroundColor:'#ff99ff',
    //alignItems: 'center',
    
  },
  content:{
    marginLeft: 20,
  },
  h2:{
    color:'#330000',
    fontSize:30,
    alignSelf: 'center',
    marginLeft :-20
  },
   h31:{
    color:'#000022',
    fontSize:20,
    marginTop: 20,
    alignSelf: 'center'
   
   },
  
  row:{
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'flex-start',
    marginBottom:5
  },
  head:{
    fontSize:20,
    flexWrap:'wrap',
    //alignItems: 'center',
    marginLeft: 20,
  }
  

});
