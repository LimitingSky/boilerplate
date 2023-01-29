import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { HeaderStyles } from './headerStyles';

const style = HeaderStyles;

export const Header = props => {
  return (
    <View style={style.wrapper}>
      <SafeAreaView>
        <View style={style.content}>
          <Text style={style.title}>{props.name}</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};
