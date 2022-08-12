import React, {useState, useEffect} from 'react';
import {View, ImageBackground, Alert} from 'react-native';
import Button from '../../components/QueButton';
import QuestionCard from '../../components/QuestionCard';
import Counter from '../../components/Counter';
import easyData from '../../easyData.json';

import MainPage from '../../pages/MainPage';

import styles from './EasyPage.Style';
import Pointer from '../../components/Pointer';
const score = 0;
let second = 5;
let answer;
function EasyPage({navigation}) {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [data, setData] = useState(easyData);
  const currentQuizData = data[currentQuiz];
  const [point, setPoint] = useState(score);
  const [count, setCount] = useState(second);

  useEffect(() => {
    if (currentQuiz < easyData.length) {
      const intervalId = setInterval(() => {
        setCount(prevCount => prevCount - 1);
        if (count === 1) {
          setPoint(point => (point -= 2));
          setCount(second);
          if (currentQuiz < easyData.length) {
            setCurrentQuiz(currentQuiz => (currentQuiz += 1));
          }
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
  });

  const clickButtona = () => {
    setCount(second);
    answer = 'a';
    if (answer === data[currentQuiz].correct) {
      setPoint(point => (point += 5));
    } else {
      setPoint(point => (point -= 3));
    }

    setCurrentQuiz(currentQuiz => (currentQuiz += 1));
  };
  const clickButtonb = () => {
    setCount(second);
    answer = 'b';
    if (answer === data[currentQuiz].correct) {
      setPoint(point => (point += 5));
    } else {
      setPoint(point => (point -= 3));
    }
    setCurrentQuiz(currentQuiz => (currentQuiz += 1));
  };
  const clickButtonc = () => {
    setCount(second);
    answer = 'c';
    if (answer === data[currentQuiz].correct) {
      setPoint(point => (point += 5));
    } else {
      setPoint(point => (point -= 3));
    }
    setCurrentQuiz(currentQuiz => (currentQuiz += 1));
  };
  const clickButtond = () => {
    setCount(second);
    answer = 'd';
    if (answer === data[currentQuiz].correct) {
      setPoint(point => (point += 5));
    } else {
      setPoint(point => (point -= 3));
    }
    setCurrentQuiz(currentQuiz => (currentQuiz += 1));
  };

  return (
    <ImageBackground
      source={require('../../../assest/questionBg.png')}
      resizeMode="cover"
      style={{flex: 1}}>
      {currentQuiz < easyData.length ? (
        <View style={styles.container}>
          <View style={styles.headerText}>
            <Counter timer={count} />
          </View>

          <View style={styles.innerContainer}>
            <QuestionCard questionText={currentQuizData.question} />
            <View style={styles.buttonContainer}>
              <View style={styles.buttonBody}>
                <Button text={currentQuizData.a} onPress={clickButtona} />
                <Button text={currentQuizData.b} onPress={clickButtonb} />
                <Button text={currentQuizData.c} onPress={clickButtonc} />
                <Button text={currentQuizData.d} onPress={clickButtond} />
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <Pointer pointer={point} />
          </View>
        </View>
      ) : (
        Alert.alert('Test Bitti', `Puanınız : ${point}`, [
          {
            text: 'OK',
            onPress: () => navigation.navigate('ScoreScreen', point),
          },
        ])
      )}
    </ImageBackground>
  );
}

export default EasyPage;
