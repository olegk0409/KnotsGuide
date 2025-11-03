import Colors from "@/constants/Colors";
import CustomBottomSheet from "@/src/components/CustomBottomSheet";
import Filter from "@/src/components/Filter";
import Header from "@/src/components/Header";
import KnotItem from "@/src/components/KnotItem";
import { withScreenLayout } from "@/src/hoc/withScreenLayout";
import useProjectStore from "@/src/store/projectStore";
import { knots } from "@/src/utils/data";
import { filterData, loadDashboardItems } from "@/src/utils/functions";
import { Knot } from "@/src/utils/types";
import BottomSheet from "@gorhom/bottom-sheet";
import { useFocusEffect } from "expo-router";
import { useCallback, useMemo, useRef, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

const HomeScreen = () => {
  const [input, setInput] = useState("");
  const [favourites, setFavourites] = useState<Knot[]>([]);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const { categoryFilter, difficultyFilter, lineFilter, setSelectedKnot } =
    useProjectStore((state) => state);

  useFocusEffect(
    useCallback(() => {
      loadDashboardItems("favourites", setFavourites);
    }, [])
  );

  const closeSheet = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const openSheet = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const filtredKnots = useMemo(
    () => filterData(knots, categoryFilter, difficultyFilter, lineFilter, input),
    [knots, categoryFilter, difficultyFilter, lineFilter, input]
  );

  return (
    <View style={styles.container}>
      <Header
        title="Knot Mate"
        desc="Master fishing knots with crystal-clear steps"
      />
      <View style={styles.contentContainer}>
        <Filter
          text={input}
          setText={setInput}
          setIsFilterVisible={openSheet}
        />
        <FlatList<Knot>
          data={filtredKnots}
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

        <CustomBottomSheet ref={bottomSheetRef} closeSheet={closeSheet} />
      </View>
    </View>
  );
};

export default withScreenLayout(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
