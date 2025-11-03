import AsyncStorage from "@react-native-async-storage/async-storage";
import { Difficulty, Knot } from "./types";

export const saveDashboardItems = async (key: string, itemsForSave: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(itemsForSave));
  } catch (error) {
    console.error(error);
  }
};

export const loadDashboardItems = async (key: string, setter: React.Dispatch<React.SetStateAction<any>>) => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data !== null) {
      setter(JSON.parse(data));
    }
  } catch (error) {
    console.error(error);
  }
};

export const loadDashboardItemsToVar = async (key: string) => {
  let items = null;
  try {
    const data = await AsyncStorage.getItem(key);
    if (data !== null) {
      items = JSON.parse(data);
    }
  } catch (error) {
    console.error(error);
  }

  return items;
};

export const generateRandomId = (): string => {
  return Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
};

export const filterData = (array: Knot[], category: string, diff: Difficulty | string, line: string, query: string) => {
  return array.filter(item =>
    (!category || item.category === category) &&
    (!diff || item.difficulty === diff) &&
    (!line || item.compatibleLineTypes.includes(line)) &&
    (!query || item.name.includes(query))
  );
}