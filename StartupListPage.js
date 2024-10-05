import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, ImageBackground,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Spacing from './constants/Spacing';
import FontSize from './constants/FontSize';
import Fonts from './constants/Font';
import Colors from './constants/Colors';
import { FontAwesome } from '@expo/vector-icons';

// import { LineChart } from 'react-native-chart-kit';

const startups = [
  { id: '1', name: 'Startup 1', description: 'Description de la startup 1', image: require('./assets/image1.png') },
  { id: '2', name: 'Startup 2', description: 'Description de la startup 2', image: require('./assets/image2.png') },
  { id: '3', name: 'Startup 3', description: 'Description de la startup 3', image: require('./assets/image3.png') },
  { id: '4', name: 'Startup 4', description: 'Description de la startup 4', image: require('./assets/image4.png') },
  // { id: '5', name: 'Startup 4', description: 'Description de la startup 4', image: require('./assets/image3.png') },
  // { id: '6', name: 'Startup 4', description: 'Description de la startup 4', image: require('./assets/image1.png') },
  // { id: '7', name: 'Startup 4', description: 'Description de la startup 4', image: require('./assets/image4.png') },
  // { id: '8', name: 'Startup 4', description: 'Description de la startup 4', image: require('./assets/image5.png') },
  // Ajoutez plus de startups ici avec des images correspondantes
];

const StartupListPage = () => {
  const navigation = useNavigation();

  const totalStartups = startups.length;
  const averageRating = 4.0; // Assuming an average rating, you can calculate this based on actual data.
  const handleSellAll = () => {
    // Add logic to sell all startups
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('StartupDetailPage', { startup: item })}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <Text style={styles.boxTitle}>{item.name}</Text>
      <Text style={styles.boxDescription}>{item.description}</Text>
      <View style={styles.rating}>
        <FontAwesome name="star" size={20} color={Colors.lightgreen} />
        <FontAwesome name="star" size={20} color={Colors.lightgreen} />
        <FontAwesome name="star" size={20} color={Colors.lightgreen} />
        <FontAwesome name="star" size={20} color={Colors.lightgreen} />
      </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground style={styles.background}>
      <View style={styles.containerHaut}>
        <View style={styles.statsContainer}>
          <Text style={styles.statsText}>Total Startups: {totalStartups}</Text>
          <Text style={styles.statsText}>Average Rating: {averageRating.toFixed(1)}</Text>
          <Text style={styles.statsText}>Total Startups: {totalStartups}</Text>
          <Text style={styles.statsText}>Average Rating: {averageRating.toFixed(1)}</Text>
          <Text style={styles.statsText}>Total Startups: {totalStartups}</Text>
          <Text style={styles.statsText}>Average Rating: {averageRating.toFixed(1)}</Text>
          <Text style={styles.statsText}>Total Startups: {totalStartups}</Text>
          <Text style={styles.statsText}>Average Rating: {averageRating.toFixed(1)}</Text>
          <Text style={styles.statsText}>Total Startups: {totalStartups}</Text>
          <Text style={styles.statsText}>Average Rating: {averageRating.toFixed(1)}</Text>
        </View>
      </View>
      <View style={[styles.containerHaut1]}>
        <TouchableOpacity>
          <View style={styles.containeIcon1}>
            <FontAwesome name="line-chart" size={40} color={Colors.bleu} />
            <Text style={{ color: 'white' }}>Venture</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.containeIcon1}>
            <FontAwesome name="dollar" size={40} color={Colors.bleu} />
            <Text style={{ color: 'white' }}>Venture</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.containeIcon1}>
            <FontAwesome name="pie-chart" size={40} color={Colors.bleu} />
            <Text style={{ color: 'white' }}>Venture</Text>
          </View>
        </TouchableOpacity>
      </View>
        <TouchableOpacity style={styles.sellAllButton} onPress={handleSellAll}>
            {/* <Text style={styles.sellAllButtonText}>Sell All  </Text> */}
        </TouchableOpacity>
      <FlatList
        data={startups}
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
    marginHorizontal: Spacing.small,
    backgroundColor: Colors.background,
  },
  containerHaut: {
    marginTop:'15%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Spacing.medium,
    borderRadius: Spacing.small,
    margin: Spacing.small,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: Spacing.small },
    shadowOpacity: 0.1,
    shadowRadius: Spacing.small,
    elevation: 2,
    backgroundColor: Colors.primary,
    height: '32%',
  },
  containerHaut1: {
    paddingTop: '1%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Spacing.medium,
    borderRadius: Spacing.small,
    margin: Spacing.small,
    shadowColor: Colors.primary,
    shadowOffset: { width: 2, height: Spacing.small },
    shadowOpacity: 0.5,
    shadowRadius: Spacing.small,
    elevation: 1,
    backgroundColor: Colors.primary,
    height: '8%',
  },
  
  statsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsText: {
    fontSize: FontSize.medium,
    fontFamily: Fonts.poppinsRegular,
    color: Colors.white,
    marginBottom: Spacing.small,
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
    width: '80%',
    height: '60%',
    borderRadius: 10,
    overflow: 'hidden',
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
    marginBottom: Spacing.small,
  },
  boxDescription: {
    fontSize: FontSize.medium,
    fontFamily: Fonts.poppinsRegular,
    color: Colors.darkGray,
    textAlign: 'center',
    marginBottom: Spacing.small,
  },
  rating: {
    flexDirection: 'row',
  },
  sellAllButton: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 5,
    justifyContent: 'flex-end',
    alignItems: "flex-end"
  },
  sellAllButtonText: {
    color: Colors.secondary,
    fontSize: FontSize.large,
    fontFamily: Fonts.poppinsRegular,
    textAlign:'left',
    fontWeight:'bold'
  },
  containeIcon1:{
    fontFamily: Fonts.poppinsRegular,
    justifyContent:'center',
    alignItems:'center',
    textAlign:'left',
    
  }
});

export default StartupListPage;
