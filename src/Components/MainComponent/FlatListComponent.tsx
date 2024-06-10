import React, {useState} from 'react';
import {FlatList, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import model from '../../assets/json/models.json';
export const FlatListComponent = () => {
  const [selecet, setSelect] = useState('Apple');
  const getModels = () => {
    const brandData = model.smartphones.find(item => item.brand === selecet);
    return brandData ? brandData.models : [];
  };
  const task = ({item}: {item: any}) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => setSelect(item.brand)}>
        <Text style={{fontSize: 18}}>{item.brand}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/*{model.smartphones.map(el => (
        <TouchableOpacity onPress={() => setSelect(el.brand)}>
          <Text>{el.brand}</Text>
        </TouchableOpacity>
      ))}*/}
      <FlatList
        renderItem={task}
        data={model.smartphones}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      {getModels().map(el => (
        <View
          style={{
            borderWidth: 1,
            borderRadius: 10,
            backgroundColor: '#EEEEEE',
            marginTop: 10,
          }}
          key={el.id}>
          <Text style={{fontSize: 16}}>{el.name}</Text>
          <Text>{el.description}</Text>
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },
});
