import React, { useState } from 'react';
import { SafeAreaView, ImageBackground, Platform , View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Button } from 'react-native';
import Spacing from './constants/Spacing';
import FontSize from './constants/FontSize';
import Fonts from './constants/Font';
import Colors from './constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
// import ImagePicker from 'react-native-image-picker';


const StartupSignupPage2 = ({ navigation }) => {
  const [businessPlan, setBusinessPlan] = useState(null);
  const [pitchDeck, setPitchDeck] = useState(null);
  const [financialReports, setFinancialReports] = useState(null);

  const handleUploadFinancialReports = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf', // Sélectionnez uniquement les fichiers PDF
    });

    if (result.type === 'success') {
      setFinancialReports(result.uri);
    }
  };

  const handleUploadBusinessPlan = async () => {
    let result = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf', // Sélectionnez uniquement les fichiers PDF
      });

    if (result.type === 'success') {
      setBusinessPlan(result.uri);
    }
  };

  const handleUploadPitchDeck = async () => {
    let result = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf', // Sélectionnez uniquement les fichiers PDF
      });

    if (result.type === 'success') {
      setPitchDeck(result.uri);
    }
  };
  
    
  return (
    <ImageBackground
      source={require('./assets/images/De-lor-en-image.jpg')} // Remplacez par le chemin de votre image de fond
      style={styles.background}
    >
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Enrolement structure EMAPA 2</Text>
          </View>
          <View style={styles.formContainer}>
            <TextInput style={styles.input} placeholder="Chiffre d'affaires actuel" placeholderTextColor={Colors.placeholder} keyboardType="numeric" />
            <TextInput style={styles.input} placeholder="Montant recherché" placeholderTextColor={Colors.placeholder} keyboardType="numeric" />
            <TextInput style={styles.input} placeholder="Utilisation des fonds" placeholderTextColor={Colors.placeholder} multiline />
            <TextInput style={styles.input} placeholder="Stade de développement" placeholderTextColor={Colors.placeholder} />
            <TextInput style={styles.input} placeholder="Nom du fondateur" placeholderTextColor={Colors.placeholder} />
            <TextInput style={styles.input} placeholder="Expérience professionnelle" placeholderTextColor={Colors.placeholder} multiline />

            <View style={styles.fileUploadContainer}>
              <Text style={styles.uploadTitle}>Documents Importants</Text>
              <TouchableOpacity style={styles.uploadButton} onPress={handleUploadBusinessPlan}>
                <Text style={styles.uploadButtonText}>Télécharger Business Plan</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.uploadButton} onPress={handleUploadPitchDeck}>
                <Text style={styles.uploadButtonText}>Télécharger Pitch Deck</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.uploadButton} onPress={handleUploadFinancialReports}>
                <Text style={styles.uploadButtonText}>Télécharger Rapports Financiers</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.submitButton} onPress={() => alert('Inscription terminée')}>
              <Text style={styles.submitButtonText}>Soumettre</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Text style={styles.backButtonText}>Retour</Text>
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
    height: 50,
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.large,
    paddingVertical: Spacing.medium,
    borderRadius: Spacing.medium,
    fontSize: FontSize.large,
    borderBottomWidth: 1,
    fontFamily: Fonts.poppinsRegular,
    color: Colors.text,
    marginBottom: Spacing.large,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: Spacing.small },
    shadowOpacity: 0.1,
    shadowRadius: Spacing.small,
    elevation: 2,
  },
  fileUploadContainer: {
    marginBottom: Spacing.large,
  },
  uploadTitle: {
    fontSize: FontSize.large,
    fontFamily: Fonts.poppinsBold,
    marginBottom:
    Spacing.small,
    color: Colors.text,
    },
    uploadButton: {
    backgroundColor: Colors.onprimary,
    paddingVertical: Spacing.medium,
    paddingHorizontal: Spacing.large,
    borderRadius: Spacing.large,
    alignItems: 'center',
    marginTop: Spacing.small,
    },
    uploadButtonText: {
    fontFamily: Fonts.poppinsBold,
    color: Colors.white,
    fontSize: FontSize.large,
    fontWeight: 'bold',
    },
    submitButton: {
    backgroundColor: Colors.onprimary,
    paddingVertical: Spacing.medium,
    paddingHorizontal: Spacing.large,
    borderRadius: Spacing.large,
    alignItems: 'center',
    marginTop: Spacing.large, // Ajout d'un espacement supérieur pour le bouton de soumission
    },
    submitButtonText: {
    fontFamily: Fonts.poppinsBold,
    color: Colors.white,
    fontSize: FontSize.large,
    fontWeight: 'bold',
    },
    backButton: {
    backgroundColor: Colors.secondary,
    paddingVertical: Spacing.medium,
    paddingHorizontal: Spacing.large,
    borderRadius: Spacing.large,
    alignItems: 'center',
    marginTop: Spacing.medium,
    },
    backButtonText: {
    fontFamily: Fonts.poppinsBold,
    color: Colors.white,
    fontSize: FontSize.large,
    fontWeight: 'bold',
    },
    });
    
    export default StartupSignupPage2;