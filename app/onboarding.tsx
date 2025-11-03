import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Text
} from "react-native";
import { useRouter } from "expo-router";
import { withScreenLayout } from "@/src/hoc/withScreenLayout";
import Colors from "@/constants/Colors";
import GradientText from "@/src/components/GradientText";
import Fonts from "@/constants/Fonts";
import Sizes from "@/constants/Sizes";
import GradientButton from "@/src/components/GradientButton";
import { onboardingSlides } from "@/src/utils/data";


const OnboardingScreen = () => {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const router = useRouter();

  const isLastScreen = activeScreenIndex === 2;

  const onNextPress = () => {
    if (activeScreenIndex < 2) {
      setActiveScreenIndex(prev => prev + 1);
    } else {
      router.replace('/(tabs)')
    }
  }

  const skipOnboarding = () => router.replace('/(tabs)');

  const {title, desc, image} = onboardingSlides[activeScreenIndex];

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={skipOnboarding}>
          <GradientText text={'Skip'} style={{fontFamily: Fonts.semiTitle, fontSize: 16}}/>
        </TouchableOpacity>
      </View>
      <Image source={image} style={styles.icon} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <GradientText text={desc} style={styles.desc}/>
      </View>

      <View style={styles.bottomContainer}>
        <GradientButton title={isLastScreen ? 'Start' : "Next"} press={onNextPress}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: Colors.main,
    paddingHorizontal: 24,
  },
  topContainer: {
    width: '100%',
    alignItems: 'flex-end',
  },
  icon: {
    width: Sizes.screenWidth * 0.6,
    height: Sizes.screenWidth * 0.6,
  },
  textContainer: {
    alignItems: 'center',
    gap: 30
  },
  title: {
    fontFamily: Fonts.textBold,
    fontSize: 32,
    color: Colors.text,
    textAlign: 'center'
  },
  desc: {
    fontFamily: Fonts.text,
    fontSize: 16,
    textAlign: 'center'
  },
  bottomContainer: {
    width: "100%",
    alignItems: "center",
  },
});

export default withScreenLayout(OnboardingScreen);
