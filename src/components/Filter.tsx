import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { SetStateAction } from 'react'
import Feather from '@expo/vector-icons/Feather';
import Colors from '@/constants/Colors';
import Fonts from '@/constants/Fonts';

type Props = {
  text: string;
  setText: React.Dispatch<SetStateAction<string>>;
  setIsFilterVisible: () => void;
}

const Filter: React.FC<Props> = ({text, setText, setIsFilterVisible}) => {

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Feather name="search" size={24} color={Colors.progressBar} />
        <TextInput
          value={text}
          onChangeText={setText}
          maxLength={30}
          placeholder={'Search knots...'}
          placeholderTextColor={Colors.fadeDark}
          style={styles.input}
        />
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.text}>Browse Knots</Text>

        <TouchableOpacity style={styles.filterButton} onPress={setIsFilterVisible}>
          <Feather name="filter" size={20} color={Colors.text} />
          <Text style={styles.filterText}>Filters</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Filter;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border
  },
  inputContainer: {
    backgroundColor: Colors.border,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
    gap: 12
  },
  input: {
    width: '85%',
    height: '100%',
    fontFamily: Fonts.text,
    fontSize: 16,
    color: Colors.text
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: Fonts.text,
    fontSize: 16,
    color: Colors.text
  },
  filterButton: {
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.button,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    gap: 8,
  },
  filterText: {
    fontFamily: Fonts.semiTitle,
    fontSize: 14,
    color: Colors.text
  },
})
