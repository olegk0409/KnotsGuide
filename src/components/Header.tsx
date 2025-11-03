import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '@/constants/Colors';
import Fonts from '@/constants/Fonts';

type Props = {
  title: string;
  desc: string;
  counter?: undefined | string;
}

const Header: React.FC<Props> = ({title, desc, counter = undefined}) => {
  return (
    <LinearGradient
      colors={[Colors.text, Colors.header]}
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 1}}
      style={styles.gradient}
    >
      <View style={styles.topContainer}>
        <Text style={styles.title}>{title}</Text>
        {counter && (
          <Text style={styles.desc}>Question {counter}</Text>
        )}
      </View>
      <Text style={styles.desc}>{desc}</Text>
    </LinearGradient>
  )
}

export default Header;

const styles = StyleSheet.create({
  gradient: {
    width: '100%',
    padding: 24,
    gap: 8
  },
  title: {
    fontFamily: Fonts.semiTitle,
    fontSize: 32,
    color: Colors.main
  },
  desc: {
    fontFamily: Fonts.text,
    fontSize: 16,
    color: Colors.main,
    opacity: 0.8
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
