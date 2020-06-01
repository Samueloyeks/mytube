import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../src/screens/HomeScreen';
import SignInScreen from '../src/screens/SignInScreen';
import AuthLoadingScreen from '../src/screens/AuthLoadingScreen';

const AuthStack = createStackNavigator(
  { SignIn: SignInScreen},
  {
    initialRouteName: 'SignIn',
    headerMode: 'none',
  },
);

const MainStack = createStackNavigator(
    { Home: HomeScreen},
    {
      initialRouteName: 'Home',
      headerMode: 'none',
    },
  );

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
      Main: MainStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
