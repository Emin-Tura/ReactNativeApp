import React from 'react';
import {View, Text, FlatList} from 'react-native';
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/Modal/ContentInputModal/ContentInputModal';
import MessagesCard from '../../components/Card/MessageCard';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import parseContentData from '../../utils/parseContentData';

import styles from './Messages.Style';

function Messages() {
  const [inputModalVisible, setInputModalVisible] = React.useState(false);
  const [contentList, setContentList] = React.useState([]);

  React.useEffect(() => {
    database()
      .ref('messages/')
      .on('value', snapshot => {
        const contentData = snapshot.val();

        const parsedData = parseContentData(contentData || {});
        setContentList(parsedData);
      });
  }, []);

  const handleInputToggle = () => {
    setInputModalVisible(!inputModalVisible);
  };

  const handleSendContent = content => {
    handleInputToggle();
    sendContent(content);
  };

  function sendContent(content) {
    const userMail = auth().currentUser.email;
    const contentObject = {
      text: content,
      userName: userMail.split('@')[0], //@ den oncesi
      date: new Date().toISOString(),
      dislike: 0,
    };
    database().ref('messages/').push(contentObject);
    console.log(contentObject);
  }

  const handleDislike = item => {
    database()
      .ref(`messages/${item.id}/`)
      .update({dislike: item.dislike + 1});
  };

  const renderContent = ({item}) => (
    <MessagesCard message={item} onDislike={() => handleDislike(item)} />
  );
  return (
    <View style={styles.container}>
      <FlatList data={contentList} renderItem={renderContent} />

      <FloatingButton icon="plus" onPress={handleInputToggle} />
      <ContentInputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />
    </View>
  );
}

export default Messages;
