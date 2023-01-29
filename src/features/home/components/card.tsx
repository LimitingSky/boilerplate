import React from 'react';
import { Text, View } from 'react-native';
import { CardProps } from '../models/components';
import { CardStyle } from './cardStyles';

const style = CardStyle;

export const Card: React.FC<CardProps> = props => {
  return (
    <View style={style.wrapper}>
      <View style={style.card}>
        <Text style={style.title}>{props.month}</Text>
        <Text style={style.amount}>{`${props.amount.toLocaleString('en-US', {
          minimumFractionDigits: 2,
        })} pts`}</Text>
      </View>
    </View>
  );
};

Card.defaultProps = {
  amount: 1000,
  month: 'Diciembre',
};
