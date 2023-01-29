import React from 'react';
import { Text, View } from 'react-native';
import { HeaderProps } from '../models/components';
import { HeaderStyle } from './headerStyles';

const style = HeaderStyle;

const Header: React.FC<HeaderProps> = props => {
  return (
    <View style={style.wrapper}>
      <Text style={style.title}>Bienvenido de vuelta!</Text>
      <Text style={style.userName}>{props.userName}</Text>
    </View>
  );
};

Header.defaultProps = {
  userName: 'Ruben Rodrigez',
};

export default Header;
