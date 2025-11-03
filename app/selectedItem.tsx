import Sizes from '@/constants/Sizes';
import { withScreenLayout } from '@/src/hoc/withScreenLayout';
import useProjectStore from '@/src/store/projectStore';
import { loadDashboardItems, saveDashboardItems } from '@/src/utils/functions';
import { Knot } from '@/src/utils/types';
import { LinearGradient } from 'expo-linear-gradient';
import { useCallback, useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from '@/constants/Colors';
import Fonts from '@/constants/Fonts';
import GradientText from '@/src/components/GradientText';
import { knots, safetyTips } from '@/src/utils/data';
import Octicons from '@expo/vector-icons/Octicons';
import { useFocusEffect, useRouter } from 'expo-router';


const SelectedItemScreen = () => {
  const [favourites, setFavourites] = useState<Knot[]>([]);
  const router = useRouter();
  const {selectedKnot} = useProjectStore((state) => state);
  const { 
    category, 
    difficulty, 
    emoji, 
    name, 
    img, 
    tyingInstructions, 
    purpose, 
    whenToUse, 
    compatibleLineTypes, 
    useCases 
  } = selectedKnot || knots[0];
  const isThisItemFavourite = favourites.some(fav => fav.name === name);

  useFocusEffect(
    useCallback(() => {
      loadDashboardItems("favourites", setFavourites);
    }, [])
  );

  const toggleFavourite = () => {
    if (isThisItemFavourite) {
      setFavourites(prev => {
        const filtredFavourites = prev.filter(fav => fav.name !== name);
        saveDashboardItems('favourites', filtredFavourites);
        return filtredFavourites;
      });
    } else {
      setFavourites(prev => {
        const updatedFavourites = selectedKnot ? [...prev, selectedKnot] : prev;
        saveDashboardItems('favourites', updatedFavourites);
        return updatedFavourites;
      });
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={img} resizeMode='cover' style={styles.img}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 0.8}}
          style={styles.imgGradient}
        >
          <View style={styles.headerTopContainer}>
            <TouchableOpacity onPress={() => router.back()} style={styles.navigationButton}>
              <FontAwesome name="arrow-left" size={24} color={Colors.text} />
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleFavourite} style={styles.navigationButton}>
              {isThisItemFavourite ? (
                <FontAwesome name="heart" size={24} color="red" />
              ) : (
                <FontAwesome name="heart-o" size={24} color={Colors.text} />
              )}
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.headerTitle}>{name}</Text>
            <Text style={styles.headerText}>{category}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>

      <ScrollView 
        style={styles.scroll}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.contentTop}>
          <View style={styles.labelContainer}>
            <GradientText text={difficulty} style={styles.label}/>
          </View>

          <View style={styles.labelContainer}>
            <GradientText text={category} style={styles.label}/>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Tying Instructions</Text>

          <View>
            {tyingInstructions.map((instruction, index) => (
              <Text key={instruction} style={styles.text}>{index + 1}. {instruction}</Text>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Purpose</Text>

          <View>
            <Text style={styles.text}>{purpose}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.contanierWithIcon}>
            <FontAwesome name="lightbulb-o" size={20} color="black" />
            <Text style={styles.text}>When to use</Text>
          </View>

          <View>
            <Text style={styles.text}>{whenToUse}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>Compatible Line Types</Text>

          <View style={styles.contanierWithIcon}>
            {compatibleLineTypes.map((line) => (
              <View key={line} style={styles.labelContainer}>
                <Text style={styles.textSmall}>{line}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>Compatible Line Types</Text>

          <View style={styles.contanierWithIcon}>
            {useCases.map((uc) => (
              <View key={uc} style={styles.labelContainer}>
                <Text style={styles.textSmall}>{uc}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.contanierWithIcon}>
            <FontAwesome name="exclamation-circle" size={24} color="#c01818ff" />
            <Text style={styles.text}>Safety Tips</Text>
          </View>

          <View>
            {safetyTips.map((tip) => (
              <View key={tip} style={styles.contanierWithIcon}>
                <View style={{width: 4, height: 4, backgroundColor: "#c01818ff", borderRadius: 50}}/>
                <Text style={styles.text}>{tip}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.contanierWithIcon}>
            <Octicons name="arrow-switch" size={24} color="black" />
            <Text style={styles.text}>Alternative Knots</Text>
          </View>

          <View style={{gap: 4}}>
            {[...knots].splice(Math.floor(Math.random() * knots.length - 3), 2).map((item) => (
              <View key={item.name} style={styles.labelContainer}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default withScreenLayout(SelectedItemScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: Sizes.screenWidth,
    height: Sizes.screenWidth / (948 / 457),
  },
  imgGradient: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    borderBottomWidth: 6,
    borderBottomColor: Colors.gradient2,
  },
  headerTopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navigationButton: {
    padding: 12,
    borderRadius: 100,
    backgroundColor: Colors.border,
  },
  headerTitle: {
    fontFamily: Fonts.semiTitle,
    fontSize: 30,
    color: Colors.main
  },
  headerText: {
    fontFamily: Fonts.text,
    fontSize: 16,
    color: Colors.main
  },
  scroll: {
    flex: 1,
    backgroundColor: Colors.main,
  },
  contentContainer: {
    padding: 24,
    gap: 24,
  },
  contentTop: {
    flexDirection: 'row',
    gap: 8
  },
  labelContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.button,
    backgroundColor: Colors.border,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  label: {
    fontFamily: Fonts.semiTitle,
    fontSize: 12,
  },
  section: {
    gap: 12
  },
  title: {
    fontFamily: Fonts.semiTitle,
    fontSize: 20,
    color: Colors.text
  },
  text: {
    fontFamily: Fonts.text,
    fontSize: 16,
    color: Colors.text,
    lineHeight: 24,
  },
  contanierWithIcon: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  textSmall: {
    fontFamily: Fonts.semiTitle,
    fontSize: 12,
    color: Colors.text
  },
})
