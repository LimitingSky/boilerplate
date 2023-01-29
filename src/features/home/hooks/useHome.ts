import { useNavigation } from '@react-navigation/native';
import { ROUTES } from 'core/navigation/routes';
import { useState } from 'react';
import { useFetchList } from '../api/hooks/useFetchList';
import { MovementItem } from '../models/components';

export const useHome = () => {
  const navigation = useNavigation();
  const {isLoading, data, total, filterData, handleFilterData} = useFetchList();
  const [isFilter, setIsFilter] = useState(false);

  const toggleFilter = (is_redeemed: boolean) => {
    if (!isFilter) {
      setIsFilter(true);
      handleFilterData(is_redeemed);
    } else {
      setIsFilter(false);
    }
  };

  const goToDetail = (product: MovementItem) =>
    navigation.navigate(ROUTES.DETAIL, {product});

  return {
    isLoading,
    data,
    total,
    goToDetail,
    toggleFilter,
    filterData,
    isFilter,
  };
};
