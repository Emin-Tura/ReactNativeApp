import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, FlatList} from 'react-native';
import ProductCard from './components/ProductCard';
import productData from './product.json';

function App() {
  const renderProducts = ({item}) => <ProductCard products={item} />;

  const keyExtractor = item => item.id.toString();

  //Filetered
  const [products, setProducts] = useState(productData);

  const searchProduct = e => {
    const filteredList = productData.filter(product => {
      const searchedText = e.toLowerCase();
      const currentTitle = product.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    });
    setProducts(filteredList);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>PATIKASTORE</Text>
      <TextInput
        style={styles.input}
        placeholder="Ara..."
        onChangeText={searchProduct}
      />
      <FlatList
        keyExtractor={keyExtractor} //indexleme islemi, keyi aklinda tutuyor
        data={products}
        renderItem={renderProducts}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#000',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    backgroundColor: '#ddd',
    borderRadius: 10,
    padding: 10,
  },
});

export default App;
