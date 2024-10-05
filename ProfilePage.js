import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Spacing from './constants/Spacing';
import FontSize from './constants/FontSize';
import Fonts from './constants/Font';
import Colors from './constants/Colors';

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Page</Text>
      {/* Ajoutez plus de contenu de profil ici */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: FontSize.large,
    fontFamily: Fonts.poppinsBold,
    color: Colors.text,
  },
});

export default ProfilePage;
