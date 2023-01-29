import React, { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { MovementItemProps } from '../models/components';
import { MovementItemStyle } from './movementItemStyles';

const style = MovementItemStyle;

export const MovementItem: FC<MovementItemProps> = props => {
  return (
    <TouchableOpacity
      style={[
        style.wrapper,
        props.isFirst && style.firstElement,
        props.isLast && style.lastElement,
      ]}
      onPress={props.onPress}>
      <View style={style.leftColumn}>
        <Image style={style.image} source={{uri: props.image}} />
        <View>
          <Text style={style.productName}>{props.product}</Text>
          <Text style={style.date}>{props.createdAt}</Text>
        </View>
      </View>
      <View style={style.rightColumn}>
        <Text style={style.amountIndicator}>
          <Text
            style={style[props.is_redemption ? 'moreSymbol' : 'lessSymbol']}>
            {props.is_redemption ? '+' : '-'}
          </Text>
          {props.points}
        </Text>
        <Text>{'>'}</Text>
      </View>
    </TouchableOpacity>
  );
};

MovementItem.defaultProps = {
  createdAt: '2022-12-09T10:20:00.909Z',
  product: 'Fantastic Granite Bacon',
  points: 42416,
  image: 'https://loremflickr.com/640/480/technics',
  is_redemption: false,
  id: '3',
};
