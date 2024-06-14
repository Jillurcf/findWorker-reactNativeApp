import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import Footer from '../../component/common/footer/Footer';

import SearchBar from 'react-native-dynamic-search-bar';
import {categories} from '../../component/constant';
const {width, height} = Dimensions.get('window');

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  console.log("22", searchQuery);
  const [filteredCategories, setFilteredCategories] = useState(
    categories || [],
  );
  console.log('23', filteredCategories);
  const navigation = useNavigation()

  useEffect(() => {
    if (!categories) {
      console.error('categories is undefined');
      return;
    }
    const filtered = categories.filter(category =>
      category.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredCategories(filtered);
  }, [searchQuery]);

  const handleSearch = text => {
    setSearchQuery(text);
  };
  const hanleSearchItem = () => {
    console.log("42", filteredCategories[0]?.title);
    if(searchQuery === filteredCategories[0]?.title){
      navigation.navigate(filteredCategories[0]?.screenName)
    }
  }
  return (
    <View style={styles.container}>
      {/* <SearchBar
        style={styles.searchBar}
        placeholder="Type Here..."
        value={searchQuery}
        onChangeText={handleSearch}
      /> */}
      <SearchBar
        placeholder="Search here"
        onPress={() => hanleSearchItem()}
        onChangeText={handleSearch}
      />

      {filteredCategories.map(category => (
        <View key={category.id} style={styles.categoryContainer}>
          <Text style={styles.categoryName}>{category.title}</Text>
        </View>
      ))}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 8,
    marginBottom: 16,
  },
  categoryContainer: {
    // padding: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
  },
  categoryName: {
    fontSize: 18,
  },
});

export default SearchScreen;
