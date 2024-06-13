import { useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';
// Required for side-effects


const useUsers = () => {
  const [data, setData] = useState([]);
  console.log("6",data)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersSnapshot = await firestore().collection('Users').get();
        console.log(usersSnapshot)
        const users = usersSnapshot.docs.map(doc => doc.data());
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
  return {data}
}
export default useUsers;
