import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartupSignupPage1 from './StartupSignupPage1';
import StartupSignupPage2 from './StartupSignupPage2';
import Accueil from './Accueil';
import LoginPage from './LoginPage';
import StartupListPage from './StartupListPage';
import StartupDetailPage from './StartupDetailPage';
import AppNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Accueil" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Accueil" component={Accueil} options={{ headerShown: false }}/>
        <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }}/>
        <Stack.Screen name="StartupSignupPage1" component={StartupSignupPage1} options={{ headerShown: false }}/>
        <Stack.Screen name="StartupSignupPage2" component={StartupSignupPage2} options={{ headerShown: false }}/>
        <Stack.Screen name="StartupListPage" component={StartupListPage} options={{ headerShown: false }}/>
        <Stack.Screen name="StartupDetailPage" component={StartupDetailPage} options={{ headerShown: false }}/>
        <Stack.Screen name="AppNavigator" component={AppNavigator} options={{ headerShown: false }}/> 
       </Stack.Navigator>
     </NavigationContainer>
  );
};

export default App;
