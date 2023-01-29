import { useFetch } from 'core/api';
import { ProductsResponse } from 'features/home/models/API';
import { useEffect, useState } from 'react';

export const useFetchList = () => {
  const [data, setData] = useState<ProductsResponse>([]);
  const [filterData, setFilterData] = useState<ProductsResponse>([]);
  const [total, setTotal] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [, isFetching, handleFetch, error] = useFetch({
    path: '/products',
    method: 'GET',
  });

  const parseData = (response: ProductsResponse) => {
    let totalPoints = 0;
    response.forEach((element, index) => {
      let newElement = {...element};
      const newDate = new Date(element.createdAt).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
      });
      newElement.createdAt = newDate;
      newElement.isFirst = index === 0;
      newElement.isLast = response.length - 1 === index;
      totalPoints += element.points;
      response[index] = newElement;
    });
    setTotal(totalPoints);
    setData(response);
  };

  const handleFilterData = (is_redeemed: boolean) => {
    const newFilterData = data.filter(
      ({is_redemption}) => is_redemption === is_redeemed,
    );
    newFilterData.forEach((element, index) => {
      const newFilterElement = {...element};
      newFilterElement.isFirst = index === 0;
      newFilterElement.isLast = newFilterData.length - 1 === index;
      newFilterData[index] = newFilterElement;
    });
    setFilterData(newFilterData);
  };

  const init = async () => {
    try {
      const response = await handleFetch();
      console.log(response);
      parseData(response);
    } catch (exception) {
      console.log(`Exception:${exception}`);
    }
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    setIsLoading(isFetching);
  }, [isFetching]);

  return {isLoading, data, total, handleFilterData, filterData};
};
