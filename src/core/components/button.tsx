import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ButtonProps } from '../models/components';
import { TextStyles } from './textStyles';

const styles = TextStyles;

export const Button: React.FC<ButtonProps> = ({style, children, ...props}) => {
  return (
    <TouchableOpacity style={[styles.buttonWrapper, style]} {...props}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};
