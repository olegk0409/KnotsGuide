import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '@/constants/Colors'
import Fonts from '@/constants/Fonts'

type Props = {
  press: () => void,
  title: string
}

const GradientButton: React.FC<Props> = ({press, title}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.gradient1, Colors.gradient2]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.gradient}
      >
        <TouchableOpacity onPress={press} style={styles.button}>
          <Text style={styles.text}>
            {title}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 2,
    borderColor: Colors.border,
    borderRadius: 12,
    overflow: 'hidden',
  },
  gradient: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },
  text: {
    color: Colors.main,
    fontFamily: Fonts.semiTitle,
    fontSize: 14,
  },
});

export default GradientButton;
