import React, {FunctionComponent} from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 24,
  },
});

interface CursorProps {
  size: number;
  count: number;
}

const Cursor: FunctionComponent<CursorProps> = ({size, count}) => {
  return (
    <View
      style={[
        styles.container,
        {width: size, height: size, borderRadius: size / 2},
      ]}>
      <Text style={styles.number}>1</Text>
    </View>
  );
};

export default Cursor;
