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
import {TouchableOpacity,View,Text,Alert,Image} from 'react-native'

import Feed from '../screens/Feed';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import WelcomeScreen,{Detail,Clone} from '../screens/index';
import QuizScreen,{Results} from '../../components/QuizScreen';
import HomeScreen,{ DetailsScreen } from '../../components/Quiz';
import { highlightTrailingWhitespace } from 'jest-matcher-utils';
import DrawContent from '../../screens/DrawContent';
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
    {
      defaultNavigationOptions: {
        gesturesEnabled: false,        
      },
     
    }
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
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Document',
          headerLeft: (
            <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="bars" size={30} />
          )
        };
      }
    }
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
        tabBarIcon:({tintColor}) =>{
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
  const Dashboard = createStackNavigator(
    {
      Dashboard: Profile,
     
    },
    {
      defaultNavigationOptions: ({ navigation }) => {
        return {
          headerLeft: (
            <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="bars" size={30} />
          )
        };
      }
    }
  );
  const AppDrawerNavigator = createDrawerNavigator({
    Dashboards: {
      screen: DashboardStackNavigator
    },
    Detail:{
      screen:Detail,
      navigationOptions: {
          tabBarVisible:false,
      }      
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
  
  
