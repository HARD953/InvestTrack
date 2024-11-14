import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Spacing from './constants/Spacing';
import FontSize from './constants/FontSize';
import Fonts from './constants/Font';
import Colors from './constants/Colors';
import { FontAwesome } from '@expo/vector-icons';

// Données de simulation des mines d'or
const mines = [
  { id: '1', name: 'Mine A', description: 'Mine d\'or en exploitation, quantité d\'OR disponible: 500kg', image: require('./assets/images/De-lor-en-image.jpg') },
  { id: '2', name: 'Mine B', description: 'Nouvelle mine en prospection, quantité d\'OR disponible: 300kg', image: require('./assets/images/De-lor-en-image.jpg') },
  { id: '3', name: 'Mine C', description: 'Mine sous gestion avec taux de production optimal', image: require('./assets/images/De-lor-en-image.jpg') },
  { id: '4', name: 'Mine D', description: 'Exploitation à haut rendement avec suivi des taxes', image: require('./assets/images/De-lor-en-image.jpg') },
];

const GoldExtractionPage = () => {
  const navigation = useNavigation();

  const totalMines = mines.length;
  const averageProduction = 450; // Simulation de la production moyenne

  const handleTaxOverview = () => {
    // Logique pour afficher la gestion des taxes
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.box} >
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <Text style={styles.boxTitle}>{item.name}</Text>
      <Text style={styles.boxDescription}>{item.description}</Text>
      <View style={styles.rating}>
        <FontAwesome name="star" size={20} color={Colors.gold} />
        <FontAwesome name="star" size={20} color={Colors.gold} />
        <FontAwesome name="star" size={20} color={Colors.gold} />
        <FontAwesome name="star" size={20} color={Colors.gold} />
      </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Total des Mines: {totalMines}</Text>
        <Text style={styles.headerText}>Production Moyenne: {averageProduction}kg</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleTaxOverview}>
          <View style={styles.iconBox}>
            <FontAwesome name="line-chart" size={40} color={Colors.onprimary} />
            <Text style={styles.darkGray}>Quantité d'OR</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTaxOverview}>
          <View style={styles.iconBox}>
            <FontAwesome name="balance-scale" size={40} color={Colors.onprimary} />
            <Text style={styles.darkGray}>Taxes à payer</Text>
          </View>
        </TouchableOpacity>
      </View>

      <FlatList
        data={mines}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: Spacing.medium,
  },
  header: {
    marginTop: '10%',
    padding: Spacing.medium,
    backgroundColor: Colors.primary,
    borderRadius: Spacing.small,
    alignItems: 'center',
    marginBottom: Spacing.medium,
    height:'30%'
  },
  headerText: {
    fontSize: FontSize.large,
    fontFamily: Fonts.poppinsBold,
    color: Colors.white,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Spacing.medium,
    marginBottom: Spacing.medium,
  },
  iconBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: Colors.white,
    marginTop: Spacing.small,
  },
  list: {
    paddingBottom: Spacing.large,
  },
  box: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: Spacing.medium,
    borderRadius: Spacing.small,
    margin: Spacing.small,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: Spacing.small },
    shadowOpacity: 0.1,
    shadowRadius: Spacing.small,
    elevation: 2,
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 120,
    marginBottom: Spacing.medium,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  boxTitle: {
    fontSize: FontSize.large,
    fontFamily: Fonts.poppinsBold,
    color: Colors.darkGray,
    textAlign: 'center',
  },
  boxDescription: {
    fontSize: FontSize.medium,
    fontFamily: Fonts.poppinsRegular,
    color: Colors.darkGray,
    textAlign: 'center',
  },
  rating: {
    flexDirection: 'row',
  },
});

export default GoldExtractionPage;
