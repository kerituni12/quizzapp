import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  DrawerItems,SafeAreaView 
} from 'react-navigation';


import Feed from '../screens/Feed';
import Settings from '../screens/About';
import PDF from '../screens/PDF';
import Flat from '../screens/FLat';
import Doc from '../screens/Doc';
import WelcomeScreen,{Detail,Clone} from '../screens/index';
import QuizScreen,{Results} from '../components/QuizScreen';
import HomeScreen,{ DetailsScreen } from '../components/Quiz';
import DrawContent from '../components/DrawContent';
//import Results from '../../components/Results';

  const Test = createStackNavigator(
    {
      Feed: {
        screen: Feed,
        navigationOptions: ({ navigation }) => {
          return {                  
            headerTitle: 'Exam',
            
            headerLeft: (
              <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="bars" size={30} />
            )
          };
        },
        
      },
      Quiz:{screen:QuizScreen},
      Details:{screen:DetailsScreen}
    },
    // {
    //   defaultNavigationOptions: {
    //     // gesturesEnabled: false,        
    //   },
     
    // }
  );
  
  Test.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }  
    return {
      tabBarVisible,
    };
  };
  

  const Document = createStackNavigator({
    Documents: {
      screen: Doc,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Document',
          headerLeft: (
            <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="bars" size={30} />
          )
        };
      }
    },
    PDF:PDF,
    Flat:Flat,
  });

  const About = createStackNavigator({
    Settings: {
      screen: Settings,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'About',
          headerLeft: (
            <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="bars" size={30} />
          )
        };
      }
    }
  });

  const DashboardTabNavigator = createBottomTabNavigator(
    {
      Exam :Test,
      Document : Document,
      About:About,
      
    },
    {
      navigationOptions: ({ navigation }) => {
        const { routeName } = navigation.state.routes[navigation.state.index];
        return {
          header: null,
          headerTitle: routeName
        };
      },
      defaultNavigationOptions:({navigation}) =>({
        tabBarIcon:() =>{
          let {routeName} = navigation.state;
          let iconName;
          if(routeName === 'Exam'){
              iconName ='file-text-o'
          }else if(routeName === 'Document'){
            iconName ='book'
          }
          else if(routeName === 'About'){
            iconName ='user'
          }
          return <Icon style={{fontSize:20 }}  name={`${iconName}`}/>
        }
      })
    }
  );
  const DashboardStackNavigator = createStackNavigator(
    {
      DashboardTabNavigator: DashboardTabNavigator,
      
    },
    {
      defaultNavigationOptions: ({ navigation }) => {
        return {
          headerLeft: (
            <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="bars" size={30} />
          )
        };
      },
    }
  );
  
  const AppDrawerNavigator = createDrawerNavigator({
    Dashboards: {
      screen: DashboardStackNavigator
    },
    
   
  }, 
  {
    contentComponent:(props) => (
      <DrawContent {...props}/>
    ),
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerBackgroundColor : '#99FFCC',
  },

  );
  
  const AppSwitchNavigator = createSwitchNavigator({
    Welcome: { screen: WelcomeScreen },
    Dashboard: { screen: AppDrawerNavigator }
  });
  
 const AppContainer = createAppContainer(AppSwitchNavigator);
 
 export default AppContainer;
  
  
