import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Modal from 'react-native-modal';

import styles from './ContentInputModal.Style';

import Button from '../../Button';

//asagi dogru kaydirarak kapatma onSwipeComplete
// onBackdropPress arka tarafa basinca

function ContentInputModal({visible, onClose, onSend}) {
  const [text, setText] = React.useState(null);

  const handleSend = () => {
    if (!text) {
      return;
    }
    onSend(text);
    setText('');
  };

  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Talk to me"
            multiline
            onChangeText={setText}
          />
        </View>
        <Button text="Post" onPress={handleSend} />
      </View>
    </Modal>
  );
}

export default ContentInputModal;
