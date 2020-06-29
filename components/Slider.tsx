import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';

import Label from './Label';
import Cursor from './Cursor';

const {Value, max, add} = Animated;

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
  colorContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#bd536d',
    height,
    borderRadius: height / 2,
  },
});

export default () => {
  const x = new Value(0);
  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.colorContainer, {width: add(max(x, 0), height)}]}
      />
      <Label {...{size: height, count, x}} />
      <Cursor {...{size: height, count, x}} />
    </View>
  );
};
