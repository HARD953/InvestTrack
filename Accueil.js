import React from 'react';
import { Dimensions, ImageBackground, SafeAreaView, View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Spacing from './constants/Spacing';
import FontSize from './constants/FontSize';
import Fonts from './constants/Font';
import Colors from './constants/Colors';

const { height } = Dimensions.get("window");

const images = [
  require("./assets/gaz 1.jpg"),
  require("./assets/gaz 2.jpg"),
  // ajoutez autant d'images que nécessaire
];

const Accueil = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('./assets/gaz 1.jpg')} // Remplacez par le chemin de votre image de fond
      style={styles.background}
    >
      <SafeAreaView style={styles.safeAreaView}>
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
          >
            {images.map((image, index) => (
              <View key={index} style={styles.imageContainer}>
                <ImageBackground
                  style={styles.image}
                  resizeMode='contain'
                  source={image}
                />
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>
          HydroTrack : Solution Intelligente de Gestion et de Traçabilité des Hydrocarbures en Côte d'Ivoire
          </Text>
          <Text style={styles.subHeaderText}>
          Ministère des mines du pétrole et de l'énergie
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('LoginPage')}>
            <Text style={styles.loginButtonText}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('StartupSignupPage1')}>
            <Text style={styles.registerButtonText}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
          HydroTrack ☺️
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
  scrollView: {
    marginHorizontal: '0.5%',
    marginVertical: '3%',
  },
  imageContainer: {
    marginHorizontal: Spacing.large / 2,
  },
  image: {
    height: height / 2.75,
    width: height / 2, // Assure une bonne largeur pour chaque image
    borderRadius: Spacing.large,
    overflow: 'hidden',
  },
  textContainer: {
    paddingHorizontal: Spacing.xlarge * 2,
    paddingTop: Spacing.xlarge,
  },
  headerText: {
    fontSize: FontSize.slarge,
    fontFamily: Fonts['poppinsBold'],
    fontWeight: 'bold',
    color: "black",
    textAlign: 'center',
  },
  subHeaderText: {
    fontFamily: Fonts['poppinsBold'],
    color: Colors.text,
    textAlign: 'center',
    marginTop: Spacing.small,
  },
  buttonsContainer: {
    paddingHorizontal: Spacing.xlarge,
    paddingVertical: Spacing.xxlarge * 1.30,
    flexDirection: 'row',
    marginHorizontal: Spacing.large,
  },
  loginButton: {
    backgroundColor: Colors.darkGray,
    paddingHorizontal: Spacing.large,
    paddingVertical: Spacing.large,
    width: '48%',
    borderRadius: Spacing.large,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: Spacing.large,
    },
    shadowOpacity: 0.3,
    shadowRadius: Spacing.large,
  },
  loginButtonText: {
    fontFamily: Fonts['poppinsBold'],
    color: Colors.white,
    fontSize: FontSize.slarge,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  registerButton: {
    backgroundColor: '#F8F9F9',
    paddingHorizontal: Spacing.large,
    paddingVertical: Spacing.large,
    width: '48%',
    borderRadius: Spacing.large,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: Spacing.large,
    },
    shadowOpacity: 0.0,
    shadowRadius: Spacing.large,
  },
  registerButtonText: {
    fontFamily: Fonts['poppinsBold'],
    color: Colors.darkGray,
    fontSize: FontSize.slarge,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footerContainer: {
    paddingVertical: Spacing.xxlarge * 1.5,
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

export default Accueil;
