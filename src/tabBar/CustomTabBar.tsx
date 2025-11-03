import Colors from "@/constants/Colors";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AntDesign from '@expo/vector-icons/AntDesign';

const iconMap: Record<string, keyof typeof AntDesign.glyphMap> = {
  index: 'home',
  quiz: 'question-circle',
  fav: 'heart',
  settings: 'setting',
};

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        insets && { bottom: insets.bottom ? insets.bottom : 8 },
      ]}
    >
      <LinearGradient
        colors={[Colors.border, Colors.border]}
        start={{ x: -0.6, y: 0 }}
        end={{ x: 1.6, y: 0 }}
        style={styles.topBorder}
      />

      <View style={styles.tabRow}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={styles.tabButton}
              activeOpacity={0.8}
            >
              <View style={styles.circle}>
                <AntDesign name={iconMap[route.name]} size={24} color={Colors.header} />
                <View style={[styles.underline, isFocused && styles.activeUnderline]}></View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.main,
    overflow: "hidden",
  },
  topBorder: {
    height: 1,
    width: "100%",
  },
  tabRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  tabButton: {
    alignItems: "center",
    justifyContent: "center",
    width: '25%',
  },
  circle: {
    alignItems: "center",
    justifyContent: "flex-end",
    width: 30,
    height: 30,
    gap: 2,
  },
  icon: {
    width: 20,
    height: 20,
  },
  underline: {
    width: 20,
    height: 6,
    backgroundColor: Colors.header,
    borderRadius: 30,
    opacity: 0,
  },
  activeUnderline: {
    opacity: 1,
  },
});

