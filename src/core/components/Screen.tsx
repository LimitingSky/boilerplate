import React, { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native';

const Screen: React.FC<PropsWithChildren> = props => {
  return <SafeAreaView style={{flex: 1}}>{props.children}</SafeAreaView>;
};

export default Screen;
