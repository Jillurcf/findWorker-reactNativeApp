import { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import { Firestore } from 'firebase/firestore';

const useFetchUsers = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching users from Firestore...');
        const usersSnapshot = await Firestore().collection('Users').get();
        console.log('Snapshot metadata:', usersSnapshot.metadata);
        const users = usersSnapshot.docs.map(doc => {
          console.log('Document data:', doc.data());
          return doc.data();
        });
        setData(users);
      } catch (err) {
        console.error('Error fetching users:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetchUsers;
