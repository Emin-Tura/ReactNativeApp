import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import musicData from './musicData.json';
import SongCard from './Components/SongCard';
import SearchBar from './Components/SerachBar/SearchBar';

function App() {
  const renderSong = ({item}) => <SongCard song={item} />;

  const renderSeperator = () => <View style={styles.seperator} />;

  const [list, setList] = useState(musicData);

  const handleSearch = text => {
    const filteredList = musicData.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filteredList);
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        data={list}
        renderItem={renderSong}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={renderSeperator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});

export default App;
