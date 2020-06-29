import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Label from './Label';
import Cursor from './Cursor';

const {width: totalWidth} = Dimensions.get('window');
const count = 5;
const width = totalWidth / count;
const height = width;

const styles = StyleSheet.create({
  container: {
    width: totalWidth,
    height,
    borderRadius: height / 2,
    backgroundColor: '#f1f2f6',
  },
});

export default () => {
  return (
    <View style={styles.container}>
      <Label {...{size: height, count}} />
      <Cursor {...{size: height, count}} />
    </View>
  );
};
