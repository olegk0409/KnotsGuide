import { View, Text, ImageSourcePropType, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { SetStateAction } from 'react'
import Colors from '@/constants/Colors';
import Sizes from '@/constants/Sizes';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import GradientText from './GradientText';
import Fonts from '@/constants/Fonts';
import { Difficulty, Knot } from '../utils/types';
import { saveDashboardItems } from '../utils/functions';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';

type Props = {
  knot: Knot;
  img: ImageSourcePropType;
  name: string;
  desc: string;
  difficulty: Difficulty;
  steps: number;
  favourites: Knot[];
  setFavourites: React.Dispatch<SetStateAction<Knot[]>>
  setSelectedKnot: (item: Knot | null) => void;
}

const KnotItem: React.FC<Props> = ({knot, img, name, desc, difficulty, steps, favourites, setFavourites, setSelectedKnot}) => {
  const router = useRouter();
  const isThisItemFavourite = favourites.some(fav => fav.name === name);

  const toggleFavourite = () => {
    if (isThisItemFavourite) {
      setFavourites(prev => {
        const filtredFavourites = prev.filter(fav => fav.name !== name);
        saveDashboardItems('favourites', filtredFavourites);
        return filtredFavourites;
      });
    } else {
      setFavourites(prev => {
        const updatedFavourites = [...prev, knot];
        saveDashboardItems('favourites', updatedFavourites);
        return updatedFavourites;
      });
    }
  }

  const navigateToSelectedScreen = () => {
    setSelectedKnot(knot);
    router.push('/selectedItem');
  }

  return (
    <View style={styles.container}>
      <Image source={img} resizeMode='cover' style={styles.img}/>

      <TouchableOpacity onPress={toggleFavourite} style={styles.absoluteFavButton}>
        {isThisItemFavourite ? (
          <FontAwesome name="heart" size={24} color="red" />
        ) : (
          <FontAwesome name="heart-o" size={24} color={Colors.header} />
        )}
      </TouchableOpacity>

      <View style={styles.bottomContainer}>
        <View style={styles.navigationContainer}>
          <Text>{name}</Text>

          <TouchableOpacity style={styles.navigateButton} onPress={navigateToSelectedScreen}>
            <MaterialIcons name="navigate-next" size={24} color={Colors.progressBar} />
          </TouchableOpacity>
        </View>

        <GradientText text={desc} style={styles.defaultText}/>

        <View style={styles.hintsContainer}>
          <View style={styles.diffContainer}>
            <GradientText text={difficulty} style={styles.defaultText}/>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.defaultText}>{steps} steps</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default KnotItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 16,
    overflow: 'hidden'
  },
  absoluteFavButton: {
    padding: 12,
    backgroundColor: Colors.border,
    borderRadius: 100,
    position: 'absolute',
    right: 24,
    top: 12,
  },
  img: {
    width: Sizes.screenWidth - 16 * 2,
    height: (Sizes.screenWidth - 16 * 2) / (948 / 457),
  },
  bottomContainer: {
    padding: 16,
    gap: 8
  },
  navigationContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  navigateButton: {
    width: 40,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultText: {
    fontFamily: Fonts.text,
    fontSize: 14
  },
  hintsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  diffContainer: {
    backgroundColor: Colors.border,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  stepsContainer: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.border,
  },
})
