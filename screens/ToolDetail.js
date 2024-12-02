import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { toolDetails } from '../data/cocktailData';

const ToolDetail = ({ route }) => {
  const { tool } = route.params;
  const toolDetail = toolDetails.find(t => t.id === tool.id);

  return (
    <ScrollView style={styles.container}>
      {/* Display Tool Details */}
      <View style={styles.content}>
        <Text style={styles.title}>{tool.name}</Text>
        <Text style={styles.description}>{tool.description}</Text>

        {/* Tool Details Section */}
        {toolDetail && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>How to Use</Text>
            <Text style={styles.details}>{toolDetail.description}</Text>
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
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
    lineHeight: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
  },
  details: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
});

export default ToolDetail;