import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        //alignContent: 'center',
    },
    yellow:{
        flex:1,
        backgroundColor:'yellow',
        alignItems: 'center',
        justifyContent:'center'
    },
    pink:{
        flex:1,
        backgroundColor:'pink',
        flexDirection: 'row',       
        
    },
    button:{
        backgroundColor:'red',
        padding:20
    },
    row:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    }
});

export default styles;