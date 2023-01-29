import { SubSectionTitle } from 'components/SectionTitle';
import React from 'react';
import { View } from 'react-native';
import { ListHeaderProps } from '../models/components';
import { Card } from './card';
import Header from './header';

export const ListHeader: React.FC<ListHeaderProps> = props => {
  return (
    <View>
      <Header {...props} />
      <SubSectionTitle>Tus Puntos</SubSectionTitle>
      <Card {...props} />
      <SubSectionTitle>TUS MOVIMIENTOS</SubSectionTitle>
    </View>
  );
};
