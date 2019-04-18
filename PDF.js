/**
 * Copyright (c) 2017-present, Wonday (@wonday.org)
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
 
import React from 'react';
import { StyleSheet, Dimensions, View,Text,ScrollView } from 'react-native';
 
import Pdf from 'react-native-pdf';

 
export default class PDFExample extends React.Component {
    render() {
        const source = {uri:'https://doc-08-a0-apps-viewer.googleusercontent.com/viewer/secure/pdf/3nb9bdfcv3e2h2k1cmql0ee9cvc5lole/u542lnam56m1sb2t8fpv5fpelkjd2m6c/1554570000000/drive/*/ACFrOgB7HPJYYnpnzlAZVtkytGV077GdM6TN0urMfSnQFzX6_dCgoxSC2NUuf3pvY0j2Yfyx6C1U3QuW1kSVOkzoJIS4baZPz-cEYUxVmjCTzUezZP4dGIvXnx6sz8k=',cache:true};
        //const source = {uri:'https://toolfb.ga/toan.pdf',cache:true}
        
        //const source = require('./test.pdf');  // ios only
        //const source = {uri:'bundle-assets://test.pdf'};
 
        //const source = {uri:'file:///sdcard/test.pdf'};
        //const source = {uri:"data:application/pdf;base64,..."};
 
        return (
            <View style={styles.container}>
                
                <Text>Thi test</Text>
                
                    <ScrollView >
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
                    </ScrollView>
                 
                
                
                <Text >Diem</Text>
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
        
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height - 100//height:450,
    },
    text:{
        flex:1
    }
});