import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

function MemberSign({navigation}) {
  const [userName, setUserName] = useState(null);
  const [userSurName, setuserSurName] = useState(null);
  const [userAge, setuserAge] = useState(null);

  const handleSubmit = () => {
    if (!userName || !userSurName || !userAge) {
      Alert.alert('Met Fitness Salonu', 'Bilgiler Bos Birakilamaz');
      return;
    }

    const user = {
      name: userName, //----> bu islemin yerine userName diye de yazabiliriz
      userSurName,
      userAge,
    };
    navigation.navigate('MemberResultScreen', {user});
    //navigation.goBack();
  };

  return (
    <View>
      <Input
        label="Uye Adi"
        placeholder="Uye Ismini Giriniz"
        onChangeText={setUserName}
      />
      <Input
        onChangeText={setuserSurName}
        label="Uye Soyismi"
        placeholder="Uye Soyismi Giriniz"
      />
      <Input
        onChangeText={setuserAge}
        label="Uye Yasi"
        placeholder="Uye Yasi Giriniz"
      />

      <Button text="Kaydi Tamamla" onPress={handleSubmit} />
    </View>
  );
}

export default MemberSign;
