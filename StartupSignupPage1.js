import React from 'react';
import { SafeAreaView, ImageBackground, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Spacing from './constants/Spacing';
import FontSize from './constants/FontSize';
import Fonts from './constants/Font';
import Colors from './constants/Colors';

const StepProgressBar = ({ step }) => {
    return (
      <View style={styles.progressBarContainer}>
        <View style={[styles.step, step >= 1 && styles.activeStep]} />
        <View style={[styles.step, step >= 2 && styles.activeStep]} />
        <View style={[styles.step, step >= 3 && styles.activeStep]} />
      </View>
    );
  };

const StartupSignupPage1 = ({ navigation }) => {
const currentStep = 2; // Adjust this to reflect the current step
  return (
    <ImageBackground
      source={require('./assets/images/De-lor-en-image.jpg')} // Remplacez par le chemin de votre image de fond
      style={styles.background}
    >
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Enrolement structure EMAPE 1</Text>
          </View>
          <View style={styles.formContainer}>
            <TextInput style={styles.input} placeholder="Nom de l'entreprise" placeholderTextColor={Colors.placeholder} />
            <TextInput style={styles.input} placeholder="Secteur d'activité" placeholderTextColor={Colors.placeholder} />
            <TextInput style={styles.input} placeholder="Adresse e-mail" placeholderTextColor={Colors.placeholder} keyboardType="email-address" autoCapitalize="none" />
            <TextInput style={styles.input} placeholder="Mot de passe" placeholderTextColor={Colors.placeholder} secureTextEntry={true} />
            <TextInput style={styles.input} placeholder="Numéro de téléphone" placeholderTextColor={Colors.placeholder} keyboardType="phone-pad" />
            <TextInput style={styles.input} placeholder="Description de l'entreprise" placeholderTextColor={Colors.placeholder} multiline />
            <TextInput style={styles.input} placeholder="Année de création" placeholderTextColor={Colors.placeholder} keyboardType="numeric" />
            <TextInput style={styles.input} placeholder="Localisation" placeholderTextColor={Colors.placeholder} />
            <TextInput style={styles.input} placeholder="Nombre d'employés" placeholderTextColor={Colors.placeholder} keyboardType="numeric" />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('StartupSignupPage2')}>
              <Text style={styles.nextButtonText}>Suivant</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Assurez-vous que l'image couvre toute la surface
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fond semi-transparent pour améliorer la visibilité des éléments
    justifyContent: 'center',
  },
  step: {
    flex: 1,
    height: 4,
    backgroundColor: Colors.placeholder,
    marginHorizontal: Spacing.small,
  },
  activeStep: {
    backgroundColor: Colors.onprimary,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: Spacing.xlarge,
    paddingVertical: Spacing.large,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: Spacing.large,
    marginHorizontal:Spacing.large,
    marginTop:'40%',
  },
  headerText: {
    fontSize: FontSize.slarge,
    fontFamily: Fonts.poppinsBold,
    fontWeight: 'bold',
    color: Colors.onprimary,
    textAlign: 'center',
  },
  formContainer: {
    marginBottom: Spacing.large,
    
  },
  input: {
    height:'7%',
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.large,
    paddingVertical: Spacing.medium,
    borderRadius: Spacing.medium,
    fontSize: FontSize.large,
    borderBottomWidth:1,
    fontFamily: Fonts.poppinsRegular,
    color: Colors.text,
    marginBottom: Spacing.large,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: Spacing.small },
    shadowOpacity: 0.1,
    shadowRadius: Spacing.small,
    elevation: 2,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: Colors.onprimary,
    width:'90%',
    height:'25%',
    paddingVertical: Spacing.medium,
    paddingHorizontal: Spacing.large,
    borderRadius: Spacing.large,
    alignItems: 'center',
    justifyContent: 'center', // Pour centrer le texte verticalement
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: Spacing.small },
    shadowOpacity: 0.3,
    shadowRadius: Spacing.large,
    elevation: 2,
  },
  nextButtonText: {
    fontFamily: Fonts.poppinsBold,
    color: Colors.white,
    fontSize: FontSize.large,
    fontWeight: 'bold',
    textAlign: 'center', // Pour centrer le texte horizontalement
  },
});

export default StartupSignupPage1;
