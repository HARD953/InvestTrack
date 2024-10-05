import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import StartupListPage from './StartupListPage';
import ProfilePage from './ProfilePage';
import Colors from './constants/Colors';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown:false,
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Startups') {
              iconName = 'rocket';
            } else if (route.name === 'Investisseur') {
              iconName = 'user';
            } else if (route.name === 'Relation') {
              iconName = 'pie-chart';
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#DAF7A6',
          tabBarInactiveTintColor:  Colors.white,
          tabBarStyle: {
            backgroundColor: Colors.primary, // Couleur de fond de la barre d'onglets
            paddingBottom: 20, // Padding en bas de la barre
            paddingTop: 5, // Padding en haut de la barre
            height: 70, // Hauteur de la barre
            color:'black'
          },
          tabBarLabelStyle: {
            fontSize: 14, // Taille de la police des étiquettes
            fontFamily: 'Poppins-Bold', // Police personnalisée
            // fontWeight:'bold'
          },
          tabBarIconStyle: {
            marginTop: 5, // Marges pour les icônes
          },
        })}
      >
        <Tab.Screen 
          name="Startups" 
          component={StartupListPage} 
          options={{ tabBarLabel: 'Startups' }} // Personnalisation du label
        />
        <Tab.Screen 
          name="Investisseur" 
          component={ProfilePage} 
          options={{ tabBarLabel: 'Investisseur' }} // Personnalisation du label
        />
        <Tab.Screen 
          name="Relation" 
          component={ProfilePage} 
          options={{ tabBarLabel: 'Relation' }} // Personnalisation du label
        />
      </Tab.Navigator>
    </>
  );
};

export default AppNavigator;
