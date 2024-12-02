import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { ingredients } from '../data/cocktailData';

const CocktailDetail = ({ route }) => {
  const { cocktail } = route.params;
  const cocktailDetail = ingredients.find(i => i.cocktailId === cocktail.id);

  return (
    <ScrollView style={styles.container}>
      {/* Display Cocktail Details */}
      <View style={styles.content}>
        <Text style={styles.title}>{cocktail.name}</Text>

        {/* Method Section */}
        {cocktailDetail?.methods && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Method</Text>
            <Text style={styles.methods}>{cocktailDetail.methods}</Text>
          </View>
        )}

        {/* Ingredients Section */}
        {cocktailDetail?.ingredients && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ingredients</Text>
            <Text style={styles.ingredients}>{cocktailDetail.ingredients}</Text>
          </View>
        )}

        {/* Directions Section */}
        {cocktailDetail?.directions && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Directions</Text>
            {cocktailDetail.directions.map((step, index) => (
              <Text key={index} style={styles.instructions}>
                {index + 1}. {step}
              </Text>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
  },
  methods: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  ingredients: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  instructions: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    marginBottom: 8,
  },
});

export default CocktailDetail;