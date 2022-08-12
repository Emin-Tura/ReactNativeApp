import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './MessageCard.Style';

import {formatDistance, parseISO} from 'date-fns';
import {tr} from 'date-fns/locale';

function MessageCard({message, onDislike}) {
  const formatedDate = formatDistance(parseISO(message.date), new Date(), {
    addSuffix: true,
    locale: tr,
  });
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.user}>{message.userName}</Text>
        <Text style={styles.date}>{formatedDate}</Text>
      </View>
      <Text style={styles.title}>{message.text}</Text>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.dislikeContainer} onPress={onDislike}>
          {!!message.dislike && (
            <View style={styles.dislikeCountContainer}>
              <Text style={styles.dislikeCountText}>{message.dislike}</Text>
            </View>
          )}
          <Text style={styles.dislikeText}>Dislike</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MessageCard;
