import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import Fonts from '@/constants/Fonts';
import { Difficulty } from '../utils/types';

type Props = {
  title: string;
  array: string[] | Difficulty[];
  setter: (item: string | Difficulty) => void;
  currentFilter: string | Difficulty;
}

const FilterSelector: React.FC<Props> =({title, array, setter, currentFilter}) => {
  const onAllPress = () => setter('');
  const onValuePress = (val: string | Difficulty) => setter(val);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.itemContainer}>
        <TouchableOpacity style={[styles.button, currentFilter === '' && styles.activeButton]} onPress={onAllPress}>
          <Text style={[styles.text, currentFilter === '' && styles.activeText]}>All</Text>
        </TouchableOpacity>
        {array.map((value) => (
          <TouchableOpacity key={value} style={[styles.button, currentFilter === value && styles.activeButton]} onPress={() => onValuePress(value)}>
            <Text style={[styles.text, currentFilter === value && styles.activeText]}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default FilterSelector;

const styles = StyleSheet.create({
  container: {
    gap: 12
  },
  itemContainer: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
  button: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  title: {
    fontFamily: Fonts.text,
    fontSize: 16,
  },
  text: {
    fontFamily: Fonts.semiTitle,
    fontSize: 14,
  },
  activeButton: {
    backgroundColor: Colors.gradient1
  },
  activeText: {
    color: '#FFF',
  },
})
