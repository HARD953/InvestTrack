import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Spacing from './constants/Spacing';
import FontSize from './constants/FontSize';
import Fonts from './constants/Font';
import Colors from './constants/Colors';

const Page1 = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <View style={styles.profileContainer}>
            <Image source={require('./assets/icon.png')} style={styles.profileImage} />
            <View style={styles.tabContainer}>
              <TouchableOpacity style={styles.tabButton}>
                <Text style={styles.tabButtonTextActive}>Epargner</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tabButton}>
                <Text style={styles.tabButtonText}>Investir</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationIconContainer}>
            <Image source={require('./assets/icon.png')} style={styles.notificationIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.balanceContainer}>
          <Text style={styles.balanceTitle}>Solde total d'épargne</Text>
          <Text style={styles.balanceAmount}>150,000CFA</Text>
          <Text style={styles.balanceSubtitle}>Somme nette de toutes vos épargnes.</Text>
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>+ Epargner</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>- Retirer</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.summaryContainer}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryTitle}>Dépots</Text>
              <Text style={styles.summaryAmount}>120,000CFA</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryTitle}>Gains</Text>
              <Text style={styles.summaryAmount}>30,000CFA</Text>
            </View>
          </View>
        </View>

        <View style={styles.exploreContainer}>
          <Text style={styles.exploreTitle}>Explorer Ejara</Text>
          <View style={styles.exploreCardsContainer}>
            <View style={styles.exploreCard}>
              <Text style={styles.exploreCardTitle}>Comment épargner sur Ejara ?</Text>
              <Text style={styles.exploreCardSubtitle}>Découvrez les étapes de l'achat.</Text>
            </View>
            <View style={styles.exploreCard}>
              <Text style={styles.exploreCardTitle}>Comment suivre</Text>
              <Text style={styles.exploreCardSubtitle}>Suivez l’ensemble de plans d’épargne sur Ejara</Text>
            </View>
          </View>
        </View>

        <View style={styles.transactionsContainer}>
          <View style={styles.transactionsHeader}>
            <Text style={styles.transactionsTitle}>Transactions récentes</Text>
            <Text style={styles.transactionsLink}>Tout voir</Text>
          </View>
          <View style={styles.transactionItem}>
            <Text style={styles.transactionDescription}>OTA Cameroun</Text>
            <Text style={styles.transactionDate}>1 Janvier 2024 à 10:00</Text>
            <Text style={styles.transactionAmount}>+2000 CFA</Text>
          </View>
          <View style={styles.transactionItem}>
            <Text style={styles.transactionDescription}>OTA Cameroun</Text>
            <Text style={styles.transactionDate}>1 Janvier 2024 à 10:00</Text>
            <Text style={styles.transactionAmount}>+2000 CFA</Text>
          </View>
          <View style={styles.transactionItem}>
            <Text style={styles.transactionDescription}>OTA Cameroun</Text>
            <Text style={styles.transactionDate}>1 Janvier 2024 à 10:00</Text>
            <Text style={styles.transactionAmount}>+2000 CFA</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navButton}>
          <Image source={require('./assets/icon.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image source={require('./assets/icon.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image source={require('./assets/icon.png')} style={styles.navIcon} />
        </TouchableOpacity>
               {/* <TouchableOpacity>
          <View style={styles.containeIcon1}>
            <FontAwesome name="line-chart" size={40} color={Colors.white} />
            <Text style={{ color: 'white' }}>Investissement</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.containeIcon1}>
            <FontAwesome name="dollar" size={40} color={Colors.white} />
            <Text style={{ color: 'white' }}>Equity</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.containeIcon1}>
            <FontAwesome name="pie-chart" size={40} color={Colors.white} />
            <Text style={{ color: 'white' }}>Venture Capital</Text>
          </View>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollView: {
    padding: Spacing.medium,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.medium,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: Spacing.small,
  },
  tabContainer: {
    flexDirection: 'row',
  },
  tabButton: {
    paddingHorizontal: Spacing.small,
    paddingVertical: Spacing.tiny,
    borderRadius: Spacing.small,
    marginHorizontal: Spacing.tiny,
  },
  tabButtonTextActive: {
    color: Colors.white,
    backgroundColor: Colors.primary,
  },
  tabButtonText: {
    color: Colors.primary,
  },
  notificationIconContainer: {
    padding: Spacing.small,
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },
  balanceContainer: {
    padding: Spacing.medium,
    backgroundColor: Colors.lightGray,
    borderRadius: Spacing.small,
    marginBottom: Spacing.medium,
  },
  balanceTitle: {
    fontSize: FontSize.small,
    color: Colors.darkGray,
  },
  balanceAmount: {
    fontSize: FontSize.large,
    fontFamily: Fonts['poppinsBold'],
    color: Colors.primary,
    marginVertical: Spacing.small,
  },
  balanceSubtitle: {
    fontSize: FontSize.tiny,
    color: Colors.gray,
    marginBottom: Spacing.medium,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.medium,
  },
  actionButton: {
    flex: 1,
    padding: Spacing.small,
    borderRadius: Spacing.small,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    marginHorizontal: Spacing.tiny,
  },
  actionButtonText: {
    color: Colors.white,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryItem: {
    flex: 1,
    alignItems: 'center',
  },
  summaryTitle: {
    fontSize: FontSize.tiny,
    color: Colors.gray,
  },
  summaryAmount: {
    fontSize: FontSize.medium,
    color: Colors.primary,
    marginTop: Spacing.tiny,
  },
  exploreContainer: {
    marginBottom: Spacing.medium,
  },
  exploreTitle: {
    fontSize: FontSize.medium,
    fontFamily: Fonts['poppinsBold'],
    color: Colors.darkGray,
    marginBottom: Spacing.small,
  },
  exploreCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  exploreCard: {
    flex: 1,
    padding: Spacing.medium,
    backgroundColor: Colors.lightGray,
    borderRadius: Spacing.small,
    marginHorizontal: Spacing.tiny,
  },
  exploreCardTitle: {
    fontSize: FontSize.small,
    fontFamily: Fonts['poppinsBold'],
    color: Colors.darkGray,
  },
  exploreCardSubtitle: {
    fontSize: FontSize.tiny,
    color: Colors.gray,
    marginTop: Spacing.tiny,
  },
  transactionsContainer: {
    marginBottom: Spacing.medium,
  },
  transactionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.small,
  },
  transactionsTitle: {
    fontSize: FontSize.medium,
    fontFamily: Fonts['poppinsBold'],
    color: Colors.darkGray,
  },
  transactionsLink: {
    fontSize: FontSize.small,
    color: Colors.primary,
  },
  transactionItem: {
    padding: Spacing.small,
    backgroundColor: Colors.lightGray,
    borderRadius: Spacing.small,
    marginBottom: Spacing.tiny,
  },
  transactionDescription: {
    fontSize: FontSize.small,
    color: Colors.darkGray,
  },
  transactionDate: {
    fontSize: FontSize.tiny,
    color: Colors.gray,
  },
  transactionAmount: {
    fontSize: FontSize.medium,
    color: Colors.primary,
    marginTop: Spacing.tiny,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: Spacing.small,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.lightGray,
  },
  navButton: {
    padding: Spacing.small,
  },
  navIcon: {
    width: 24,
    height: 24,
  },
});

export default Page1;
