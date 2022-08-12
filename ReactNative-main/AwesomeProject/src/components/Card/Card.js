import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Card.style';

const Card = props => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>{props.title}</Text>
        <Text style={styles.cardText}>{props.text}</Text>
      </View>
      <TouchableOpacity
        style={styles.cardButtonContainer}
        onPress={() => {
          alert('Merhaba :' + props.title);
        }}>
        <Text style={styles.cardBtnTitle}>I Liked</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
