import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface LabelProps {
  count: number;
  size: number;
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

const Label: FunctionComponent<LabelProps> = ({count, size}) => {
  return (
    <View style={styles.container}>
      {new Array(count).fill(0).map((e, i) => {
        return (
          <View style={styles.numberContainer}>
            <Text style={styles.number}>{i + 1}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Label;
