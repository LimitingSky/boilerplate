import { Button } from 'components/button';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { Header } from '../components/header';
import { useDetail } from '../hooks/useDetail';
import { styles } from './styles';

export const DetailScreen: React.FC = () => {
  const {detail, goBack} = useDetail();
  return (
    <View style={styles.wrapper}>
      <Header name={detail.product} />
      <View style={styles.content}>
        <Image style={styles.image} source={{uri: detail.image}} />
        <Text style={styles.subtitle}>Detalles del producto:</Text>
        <Text style={styles.date}>{detail.createdAt}</Text>
        <Text style={styles.subtitle}>Con esta compra acumulaste:</Text>
        <Text style={styles.amount}>{detail.points} puntos</Text>
        <Button onPress={goBack}>Aceptar</Button>
      </View>
    </View>
  );
};
