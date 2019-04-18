import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

import Feed from '../screens/Feed';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import WelcomeScreen,{Detail,Clone} from '../screens/index';
import QuizScreen from '../../components/QuizScreen';
const FeedStack = createStackNavigator(
    {
      Feed: {
        screen: Feed,
        navigationOptions: ({ navigation }) => {
          return {                  
            headerTitle: 'Feed',
            headerLeft: (
              <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="bars" size={30} />
            )
          };
        }
      },
      Quiz:{screen:QuizScreen},
    },
    {
      defaultNavigationOptions: {
        gesturesEnabled: false,        
      }
    }
  );
  
  FeedStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible,
    };
  };
  

  const ProfileStack = createStackNavigator({
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Profile',
          headerLeft: (
            <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="bars" size={30} />
          )
        };
      }
    }
  });
  const SettingsStack = createStackNavigator({
    Settings: {
      screen: Settings,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Settings',
          headerLeft: (
            <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="bars" size={30} />
          )
        };
      }
    }
  });
  
  const DashboardTabNavigator = createBottomTabNavigator(
    {
      FeedStack,
      ProfileStack,
      SettingsStack,
      Clone
    },
    {
      navigationOptions: ({ navigation }) => {
        const { routeName } = navigation.state.routes[navigation.state.index];
        return {
          header: null,
          headerTitle: routeName
        };
      }
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
      }
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
      
    }
  });
  
  const AppSwitchNavigator = createSwitchNavigator({
    Welcome: { screen: WelcomeScreen },
    Dashboard: { screen: AppDrawerNavigator }
  });
  
 const AppContainer = createAppContainer(AppSwitchNavigator);
 
 export default AppContainer;
  
  
