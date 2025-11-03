import React, { forwardRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from "@gorhom/bottom-sheet";
import AntDesign from '@expo/vector-icons/AntDesign';
import Colors from "@/constants/Colors";
import Fonts from "@/constants/Fonts";
import useProjectStore from "../store/projectStore";
import FilterSelector from "./FilterSelector";
import { categories, difficulties, lineTypes } from "../utils/data";

type Props = {
  closeSheet: () => void;
}

const CustomBottomSheet = forwardRef<BottomSheet, Props>(({ closeSheet }, ref) => {
  const {categoryFilter, setCategoryFilter, difficultyFilter, setDifficultyFilter, lineFilter, setLineFilter} = useProjectStore((state) => state)

  return (

      <BottomSheet 
        ref={ref} 
        index={-1}
        snapPoints={["20%", "60","100%"]}
        onChange={(index) => {
          return index <= 0 ? closeSheet() : () => {}
        }}
        backgroundStyle={styles.sheetBackground}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            opacity={0.5}
            pressBehavior="none"
            disappearsOnIndex={-1}
          />
        )}
      >
        <BottomSheetView style={styles.sheetContent}>
          <View style={styles.containerXButton}>
            <Text style={styles.title}>Add Transaction</Text>

            <TouchableOpacity onPress={closeSheet}>
              <AntDesign name="close" size={20} color={Colors.text} />
            </TouchableOpacity>
          </View>

          <FilterSelector title={'Category'} array={categories} setter={setCategoryFilter} currentFilter={categoryFilter}/>
          <FilterSelector title={'Difficulty'} array={difficulties} setter={setDifficultyFilter} currentFilter={difficultyFilter}/>
          <FilterSelector title={'Line Type'} array={lineTypes} setter={setLineFilter} currentFilter={lineFilter}/>
        </BottomSheetView>
      </BottomSheet>
  );
});

const styles = StyleSheet.create({
  sheetBackground: {
    backgroundColor: Colors.main,
    width: '100%',
  },
  sheetContent: {
    flex: 1,
    width: '100%',
    padding: 16,
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.title,
    color: Colors.text,
  },
  containerXButton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default CustomBottomSheet;
