
import React from 'react';
import { StyleSheet, Dimensions, View,Text,ScrollView } from 'react-native';
 
import Pdf from 'react-native-pdf';

 
export default class PDF extends React.Component {
    render() {
        //get cate and return pdf
        let cate = this.props.navigation.getParam('name', 'Hàm số');
        let pdf = '';
        switch(cate){
            case 'Hàm số' : pdf ='https://tuhocplus.com/1.pdf'; break;
            // case:...;
            default : pdf = 'https://tuhocplus.com/2.pdf';
        }
        const source = {uri:pdf,cache:true};       
 
        return (
            <View style={styles.container}> 
                    <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    style={styles.pdf}
                    

                    />
            </View>

        )
  }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {              
        flex:1,
        width:Dimensions.get('window').width,        
    },
    text:{
        flex:1
    }
});