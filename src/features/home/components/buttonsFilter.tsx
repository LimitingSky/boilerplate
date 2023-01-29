import { Button } from 'components/button';
import React from 'react';
import { View } from 'react-native';
import { MovementItemStyle } from './movementItemStyles';

const style = MovementItemStyle;

export const ButtonFilter = props => {
  return (
    <View style={[style.filtersContainer, props.style]}>
      <Button onPress={props.onPressLeft} style={style.buttonFilter}>
        Ganados
      </Button>
      <Button onPress={props.onPressRight} style={style.buttonFilter}>
        Canjeados
      </Button>
    </View>
  );
};
