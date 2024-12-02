import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Linking } from 'react-native';

const ContactScreen = () => {
  const openEmail = () => {
    Linking.openURL('mailto:contact@jrizki.com?subject=App Feedback');
  };

  const openSocialMedia = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.description}>
      Have questions, suggestions, or feedback? Feel free to reach out to us:
      </Text>

      <TouchableOpacity style={styles.button} onPress={openEmail}>
        <Text style={styles.buttonText}>Email Us</Text>
      </TouchableOpacity>
      <Text style={styles.description}>
      We’ll get back to you as soon as possible. Cheers! 🍹
      </Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ff6b6b',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    textAlign: 'center',
  },
  socialMediaContainer: {
    alignItems: 'center',
  },
  socialMediaLink: {
    color: '#ff6b6b',
    fontSize: 16,
    marginVertical: 4,
  },
});

export default ContactScreen;