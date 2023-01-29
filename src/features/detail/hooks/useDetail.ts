import { useNavigation, useRoute } from '@react-navigation/native';
import { MovementItem } from 'features/home/models/components';
import { useState } from 'react';

export const useDetail = () => {
  const navigation = useNavigation();
  const {params} = useRoute();
  const [detail] = useState<Partial<MovementItem>>(params.product || {});

  const goBack = () => navigation.goBack();

  return {detail, goBack};
};
