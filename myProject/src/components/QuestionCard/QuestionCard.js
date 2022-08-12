import React from 'react';
import {ScrollView, View, Text} from 'react-native';

import styles from './QuestionCard.Style';

function QuestionCard({questionText}) {
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{questionText}</Text>
    </View>
  );
}

export default QuestionCard;
