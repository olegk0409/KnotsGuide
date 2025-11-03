import Colors from '@/constants/Colors';
import Fonts from '@/constants/Fonts';
import GradientButton from '@/src/components/GradientButton';
import GradientText from '@/src/components/GradientText';
import { withScreenLayout } from '@/src/hoc/withScreenLayout';
import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import WebView from "react-native-webview";


const SettingsScreen = () => {
  const [isWebViewVisible, setIsWebViewVisible] = useState(false);

  if (isWebViewVisible) {
    return (
      <View style={{ flex: 1, position: "relative", paddingBottom: 40 }}>
        <TouchableOpacity
          onPress={() => setIsWebViewVisible(false)}
          style={{
            position: "absolute",
            top: "2%",
            right: "6%",
            zIndex: 10,
            width: 60,
            height: 35,
            backgroundColor: "#460e14ff",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <Text style={{ color: "white" }}>Close</Text>
        </TouchableOpacity>

        <WebView
          source={{ uri: "https://github.com/olegk0409" }}
          style={{ flex: 1 }}
        />
      </View>
    );
  }

  const reminderText = 'Always test your knots before fishing. Wet the line before tightening to prevent heat damage. Practice makes perfect!';
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Text>Settings</Text>
        </View>

        <View style={{padding: 24}}>
          <Text style={styles.text}>Safety Reminder:</Text>
          <GradientText text={reminderText} style={styles.text}/>
        </View>

        <View style={{paddingHorizontal: 24, gap: 12}}>
          <GradientButton title='Privacy Policy' press={() => setIsWebViewVisible(true)}/>
          <GradientButton title='Terms of Use' press={() => setIsWebViewVisible(true)}/>
        </View>
      </View>
    </View>
  );
};

export default withScreenLayout(SettingsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border
  },
  text: {
    fontFamily: Fonts.text,
    fontSize: 16,
    color: Colors.text
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.main,
    paddingBottom: 40,
  },
  listContainer: {
    padding: 16,
    gap: 16,
  },
});
