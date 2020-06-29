import React, {FunctionComponent} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  add,
  round,
  divide,
  cond,
  lessOrEq,
} from 'react-native-reanimated';
import {mixColor} from 'react-native-redash';

interface LabelProps {
  count: number;
  size: number;
  x: Animated.Value<number>;
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberContainer: {
    flex: 1,
  },
  number: {
    textAlign: 'center',
    fontSize: 24,
  },
});

const Label: FunctionComponent<LabelProps> = ({count, size, x}) => {
  const index = add(round(divide(x, size)), 1);

  return (
    <View style={styles.container}>
      {new Array(count).fill(0).map((e, i) => {
        const color = mixColor(cond(lessOrEq(index, i), 0, 1), 'gray', 'white');
        console.log(color);
        return (
          <View key={i} style={styles.numberContainer}>
            <Animated.Text style={[styles.number, {color}]}>
              {i + 1}
            </Animated.Text>
          </View>
        );
      })}
    </View>
  );
};

export default Label;
