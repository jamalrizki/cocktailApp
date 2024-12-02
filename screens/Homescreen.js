import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { allCocktails } from '../data/cocktailData';

const truncateText = (text, limit) => {
  if (text.length > limit) {
    return text.substring(0, limit) + '...';
  }
  return text;
};

const SpiritSection = ({ title, spirit, navigation }) => {
  const cocktails = allCocktails.filter(cocktail => cocktail.spirit === spirit).slice(0, 4);

  if (cocktails.length === 0) {
    return null;
  }

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <TouchableOpacity
          style={styles.seeAllButton}
          onPress={() => navigation.navigate('CocktailsList', { spirit })}
        >
          <Text style={styles.seeAllText}>SEE ALL &gt;</Text>
        </TouchableOpacity>
      </View>
      {cocktails.map(cocktail => (
        <TouchableOpacity
          key={cocktail.id}
          style={styles.cocktailCard}
          onPress={() => navigation.navigate('CocktailDetail', { cocktail })}
        >
          <Text style={styles.cocktailName}>{cocktail.name}</Text>
          <Text style={styles.cocktailDescription}>
            {truncateText(cocktail.description, 100)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  // Get unique spirits with more than 5 cocktails
  const filteredSpirits = [
    ...new Set(allCocktails.map(cocktail => cocktail.spirit)),
  ].filter(spirit => allCocktails.filter(cocktail => cocktail.spirit === spirit).length > 5);

  return (
    <ScrollView style={styles.container}>
      {/* Zest Header */}
      <View style={styles.headerContainer}>
        <Image
          source={require('../assets/images/zest-header.png')}
          style={styles.headerImage}
        />
        <View style={styles.headerOverlay}>
          <Text style={styles.headerText}>Zest</Text>
        </View>
      </View>

      {/* Dynamically Render Spirit Sections */}
      {filteredSpirits.map(spirit => (
        <SpiritSection
          key={spirit}
          title={`${spirit.charAt(0).toUpperCase() + spirit.slice(1)} Cocktails`}
          spirit={spirit}
          navigation={navigation}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    height: 300,
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headerOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  headerText: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: '#666',
    fontSize: 16,
  },
  cocktailCard: {
    width: '100%',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    padding: 16,
  },
  cocktailName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cocktailDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;