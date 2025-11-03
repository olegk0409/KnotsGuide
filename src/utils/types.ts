import { ImageSourcePropType } from "react-native";

export type Difficulty = 'Begginer' | 'Intermediate' | 'Advanced';

export interface Knot {
  category: string;
  difficulty: Difficulty;
  emoji: string;
  name: string;
  img: ImageSourcePropType;
  tyingInstructions: string[];
  purpose: string;
  whenToUse: string;
  compatibleLineTypes: string[];
  useCases: string[];
};

export interface QuizItem {
  question: string;
  options: string[];
  correctAnswer: string;
}