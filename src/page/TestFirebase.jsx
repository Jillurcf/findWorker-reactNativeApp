import { Firestore } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// import firestore from './firebaseConfig'; // Adjust the path as needed

const TestFirebase = () => {
  const [message, setMessage] = useState('Connecting to Firestore...');
  const [data, setData] = useState(null);

  // useEffect(() => {
    const testFirestoreConnection = async () => {
      try {
        // Write a test document
        const docRef = Firestore().collection('abc').doc('xyz');
        await docRef.set({ testField: 'Hello, firestore!' });

        // Read the test document
        const doc = await docRef.get();
        if (doc.exists) {
          setData(doc.data().testField);
          setMessage('Connected to Firestore!');
        } else {
          setMessage('No such document!');
        }
      } catch (error) {
        setMessage(`Error connecting to Firestore: ${error.message}`);
      }
    };

    // testFirestoreConnection();
  // }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      {data && <Text style={styles.data}>Data from Firestore: {data}</Text>}
      <Button title="Test Connection Again" onPress={() => testFirestoreConnection()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
  },
  data: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default TestFirebase;
