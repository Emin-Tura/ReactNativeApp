import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import newsData from './news_data.json';
import NewsCard from './Components/NewsCard';
import newsBannerData from './news_banner_data.json';

// FlatList gerekli olan verileri ekrana yukler
// Mesela 200 tane verim var ve ekranda 5 tanesi gozukuyor
//Sadece o 5 taneyi yukler telefonu yormaz
//Diger verileri hafizada tutar

function App() {
  const renderNews = ({item}) => <NewsCard news={item} />;
  const keyExtractor = item => item.u_id.toString();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      <FlatList
        ListHeaderComponent={() => (
          //ScroolView custom component yapisina donustur
          //horizontal yapisi yatay hale getiriyor
          //showHorizontanalScroll
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {newsBannerData.map((bannernews, index) => (
              <Image
                key={index}
                style={styles.bannerImage}
                source={{uri: bannernews.imageUrl}}
              />
            ))}
          </ScrollView>
        )}
        keyExtractor={keyExtractor}
        data={newsData}
        renderItem={renderNews}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  bannerImage: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#000',
    textAlign: 'center',
  },
});

export default App;
