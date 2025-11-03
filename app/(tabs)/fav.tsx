import Colors from "@/constants/Colors";
import Fonts from "@/constants/Fonts";
import GradientText from "@/src/components/GradientText";
import KnotItem from "@/src/components/KnotItem";
import { withScreenLayout } from "@/src/hoc/withScreenLayout";
import useProjectStore from "@/src/store/projectStore";
import { loadDashboardItems } from "@/src/utils/functions";
import { Knot } from "@/src/utils/types";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";

const FavScreen = () => {
  const [favourites, setFavourites] = useState<Knot[]>([]);
  const { setSelectedKnot } = useProjectStore((state) => state);

  useFocusEffect(
    useCallback(() => {
      loadDashboardItems("favourites", setFavourites);
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Text>Saved Knots</Text>
        </View>

        <View style={{padding: 16}}>
          <GradientText text={`${favourites.length} knots saved`} style={styles.text}/>
        </View>

        <FlatList<Knot>
          data={favourites}
          keyExtractor={(knot) => knot.name}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <KnotItem
              key={item.name}
              knot={item}
              img={item.img}
              name={item.name}
              desc={item.useCases[0]}
              difficulty={item.difficulty}
              steps={item.tyingInstructions.length}
              favourites={favourites}
              setFavourites={setFavourites}
              setSelectedKnot={setSelectedKnot}
            />
          )}
        />
      </View>
    </View>
  );
};

export default withScreenLayout(FavScreen);

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

