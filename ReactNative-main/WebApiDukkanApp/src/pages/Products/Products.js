import React from 'react';
import {Button, FlatList, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
import {useSelector} from 'react-redux';

function Products({navigation}) {
  const users = useSelector(s => s.users);

  const {loading, data, error} = useFetch(Config.API_URL);
  // console.log('render');
  // console.log({loading, data: data.length, error});
  // console.log('---------------------');

  // console.log(data);
  const handleProductSelect = id => {
    navigation.navigate('DetailPage', {id});
  };

  const renderProducts = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <View>
      <Text>Hello - {users.username}</Text>
      <FlatList data={data} renderItem={renderProducts} />
    </View>
  );
}

export default Products;
