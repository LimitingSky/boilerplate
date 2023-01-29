import { Button } from 'components/button';
import Screen from 'components/Screen';
import React from 'react';
import { FlatList, View } from 'react-native';
import { ButtonFilter } from '../components/buttonsFilter';
import { ListHeader } from '../components/ListHeader';
import { MovementItem } from '../components/movementItem';
import { useHome } from '../hooks/useHome';
import { HomeScreenStyles } from './style';

const style = HomeScreenStyles;

export const HomeScreen: React.FC = () => {
  const {data, total, goToDetail, isFilter, filterData, toggleFilter} =
    useHome();
  const renderItem = ({item}) => (
    <MovementItem {...item} onPress={() => goToDetail(item)} />
  );
  return (
    <Screen>
      <FlatList
        style={style.list}
        ListHeaderComponent={
          <ListHeader amount={total} month="diciembre" userName="Luis Garcia" />
        }
        data={isFilter ? filterData : data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      {isFilter ? (
        <View style={style.list}>
          <Button onPress={() => toggleFilter(isFilter)}>Todos</Button>
        </View>
      ) : (
        <ButtonFilter
          style={style.list}
          onPressLeft={() => toggleFilter(true)}
          onPressRight={() => toggleFilter(false)}
        />
      )}
    </Screen>
  );
};
