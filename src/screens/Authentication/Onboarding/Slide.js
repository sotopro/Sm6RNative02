import React from 'react';
import {Dimensions, StyleSheet, View, Text} from 'react-native';

const {height, width} = Dimensions.get('window');

export const SLIDE_HEIGHT = 0.61 * height;

const styles = StyleSheet.create({
  container: {
    width,
  },
  titleContainer: {
    height: 100,
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    lineHeight: 80,
    color: '#212121',
    textAlign: 'center',
  },
});

const Slide = ({title, right}) => {
  const transform = [
    {translateY: (SLIDE_HEIGHT - 100) / 2},
    {translateX: right ? width / 2 - 50 : -width / 2 + 50},
    {rotate: right ? '-90deg' : '90deg'},
  ];
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, {transform}]}>
        <Text testID="slide-text" style={styles.title}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Slide;
