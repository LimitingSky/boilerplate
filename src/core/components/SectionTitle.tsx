import React, { PropsWithChildren } from 'react';
import { Text } from 'react-native';
import { TextStyles } from './textStyles';
const style = TextStyles;

export const SubSectionTitle: React.FunctionComponent<
  PropsWithChildren
> = props => <Text style={style.subSectionTitle}>{props.children}</Text>;
