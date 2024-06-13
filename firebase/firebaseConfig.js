// firebaseConfig.js
import { firebase } from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
    "apiKey": "AIzaSyBOWLVITW96fsKXbr2G28h3jOQHOpf5B-Q",
    "authDomain": "findworker1-react-native.firebaseapp.com",
    "projectId": "findworker1-react-native",
    "storageBucket": "findworker1-react-native.appspot.com",
    "messagingSenderId": "189953909023",
    "appId": "1:189953909023:android:5f4ed6df9bdd72b789902a"
  };

// Check if Firebase has been initialized to prevent re-initialization
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

// Optionally, initialize other Firebase services here
// For example, Firebase Analytics (if needed)
// import analytics from '@react-native-firebase/analytics';
// analytics().setAnalyticsCollectionEnabled(true);

export default firestore ;
