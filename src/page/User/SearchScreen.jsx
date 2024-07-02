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

  const [filteredCategories, setFilteredCategories] = useState(
    categories || [],
  );
  const searchScreenCategories = filteredCategories.slice(0, 4)
  const navigation = useNavigation();

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
  const handleCategory = (category) => {
navigation.navigate(category.screenName)
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

<ScrollView
     showsVerticalScrollIndicator={false}
     contentContainerStyle= {
      {paddingLeft: 0}
     }
     >
      <Text style={styles.titleText}>Top Featured Services</Text>
     <View style={styles.grid} >
     {
        searchScreenCategories.map((category, index) => {
          return (
            <View style={styles.gridItem} key={index}>
              <TouchableOpacity onPress={() => handleCategory(category)} >
                <Image  source={category.icon} width={100} height={100} />
              </TouchableOpacity>
            </View>
          )
        })
      }
     </View>
     </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
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
  scrollView: {
    paddingHorizontal: width * 0.05,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingVertical: height * 0.05,
    marginTop: height * -0.10,
    
    
  },
  gridItem: {
    width: width * 0.3,
    height: height * 0.09,
    paddingVertical: height * 0.075,
    alignItems: "center",
  },
  titleText: {
    marginTop: height * 0.05,
    paddingLeft: width * 0.06,
    color: "black",
    fontWeight: "bold"
  }
});

export default SearchScreen;
