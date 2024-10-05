import React from 'react';
import { Dimensions, ImageBackground, SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';
import Spacing from './constants/Spacing';
import FontSize from './constants/FontSize';
import Fonts from './constants/Font';
import Colors from './constants/Colors';
import AppNavigator from './BottomTabNavigator';

const { height } = Dimensions.get("window");

const LoginPage = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('./assets/image2.png')} // Remplacez par le chemin de votre image de fond
      style={styles.background}
    >
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image
              source={require('./assets/image2.png')} // Remplacez par le chemin de votre logo
              style={styles.logo}
            />
          </View>
          <Text style={styles.headerText}>Bienvenue</Text>
          <Text style={styles.subHeaderText}>Connectez-vous à votre compte</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={Colors.placeholder}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            placeholderTextColor={Colors.placeholder}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('AppNavigator')}>
            <Text style={styles.loginButtonText}>Se connecter</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('StartupSignupPage1')}>
            <Text style={styles.registerText}>
              Pas encore de compte? <Text style={styles.registerLink}>Inscrivez-vous</Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            InvesTRACK 360 ☺️
          </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: Spacing.xlarge * 2,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: Spacing.large,
  },
  logo: {
    width: 100, // Ajustez la taille selon vos besoins
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.onprimary,
  },
  headerText: {
    fontSize: FontSize.xlarge,
    fontFamily: Fonts['poppinsBold'],
    fontWeight: 'bold',
    color: Colors.onprimary,
    textAlign: 'center',
    marginBottom: Spacing.large,
  },
  subHeaderText: {
    fontFamily: Fonts['poppinsRegular'],
    color: Colors.text,
    textAlign: 'center',
    marginBottom: Spacing.xxlarge,
  },
  input: {
    height:'6%',
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.large,
    paddingVertical: Spacing.medium,
    borderRadius: Spacing.large,
    fontSize: FontSize.large,
    fontFamily: Fonts['poppinsRegular'],
    color: Colors.text,
    marginBottom: Spacing.large,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: Spacing.small },
    shadowOpacity: 0.1,
    shadowRadius: Spacing.small,
  },
  loginButton: {
    height:'6%',
    backgroundColor: Colors.onprimary,
    paddingHorizontal: Spacing.large,
    paddingVertical: Spacing.medium,
    borderRadius: Spacing.large,
    alignItems: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: Spacing.large },
    shadowOpacity: 0.3,
    shadowRadius: Spacing.large,
    marginTop: Spacing.medium,
  },
  loginButtonText: {
    fontFamily: Fonts['poppinsBold'],
    color: Colors.white,
    fontSize: FontSize.large,
    fontWeight: 'bold',
  },
  registerText: {
    fontFamily: Fonts['poppinsRegular'],
    color: Colors.text,
    textAlign: 'center',
    marginTop: Spacing.medium,
  },
  registerLink: {
    color: Colors.onprimary,
    fontFamily: Fonts['poppinsBold'],
  },
  footerContainer: {
    paddingVertical: Spacing.xxlarge,
    alignSelf: 'center',
  },
  footerText: {
    fontFamily: Fonts['poppinsBold'],
    color: Colors.darkGray,
    fontSize: FontSize.large,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LoginPage;
