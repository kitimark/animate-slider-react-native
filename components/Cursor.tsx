import React, {FunctionComponent} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  round,
  divide,
  Value,
  add,
  eq,
  set,
  cond,
  concat,
  useCode,
} from 'react-native-reanimated';
import {
  onGestureEvent,
  clamp,
  timing,
  snapPoint,
  ReText,
} from 'react-native-redash';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

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
  x: Animated.Value<number>;
}

const Cursor: FunctionComponent<CursorProps> = ({size, count, x}) => {
  const snapPoints = new Array(count).fill(0).map((e, i) => i * size);
  const index = round(divide(x, size));
  const translationX = new Value(0);
  const velocityX = new Value(0);
  const state = new Value(State.UNDETERMINED);
  const gestureHandler = onGestureEvent({state, translationX, velocityX});
  const offset = new Value(0);
  const value = add(offset, translationX);
  const translateX = clamp(
    cond(
      eq(state, State.END),
      set(
        offset,
        timing({from: value, to: snapPoint(value, velocityX, snapPoints)}),
      ),
      value,
    ),
    0,
    (count - 1) * size,
  );
  useCode(() => set(x, translateX), [x, translateX]);
  return (
    <PanGestureHandler {...gestureHandler}>
      <Animated.View
        style={[
          styles.container,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            transform: [{translateX: x}],
          },
        ]}>
        <ReText style={styles.number} text={concat(add(index, 1))} />
      </Animated.View>
    </PanGestureHandler>
  );
};

export default Cursor;
