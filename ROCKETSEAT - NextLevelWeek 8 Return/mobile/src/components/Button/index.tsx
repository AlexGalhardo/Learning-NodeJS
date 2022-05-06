import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator
} from 'react-native';

import { styles } from './styles';
import { theme } from '../../theme';

interface Props extends TouchableOpacityProps {
  isLoading: boolean;
}

export function Button({isLoading, ...rest}: Props) {
  return (
    <TouchableOpacity 
      style={styles.container}
      {...rest}
    >
      {
        isLoading 
        ?
        <ActivityIndicator
          color={theme.colors.text_on_brand_color}
        />
        :
        <Text style={styles.title}>
          Enviar Feedback
        </Text>
      }
    </TouchableOpacity>
  );
}