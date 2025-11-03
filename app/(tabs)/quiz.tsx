import { withScreenLayout } from "@/src/hoc/withScreenLayout";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useMemo, useState } from "react";
import Octicons from "@expo/vector-icons/Octicons";
import { fishingKnotsQuiz } from "@/src/utils/data";
import Colors from "@/constants/Colors";
import Header from "@/src/components/Header";
import Fonts from "@/constants/Fonts";
import GradientButton from "@/src/components/GradientButton";
import GradientText from "@/src/components/GradientText";

const QuizScreen = () => {
  const [items, setItems] = useState(fishingKnotsQuiz);
  const [correctCount, setCorrectCount] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isGameEnd, setIsGameEnd] = useState(false);

  const currentQuiz = items[questionCount];

  const progressionCounter = useMemo(() => `${questionCount}/${items.length}`, [questionCount, items])

  const onAnswerPress = (item: string) => {
    setSelectedAnswer(item);

    if (item === currentQuiz.correctAnswer) {
      setCorrectCount((prev) => prev + 1);
    }
  };

  const onNextPress = () => {
    setSelectedAnswer("");
    setQuestionCount((prev) => prev + 1);

    if (questionCount >= items.length - 1) {
      setIsGameEnd(true);
    }
  };

  const handleRestart = () => {
    setIsGameEnd(false);
    setSelectedAnswer("");
    setQuestionCount(0);
    setCorrectCount(0);
  };
  return (
    <View style={styles.fullContainer}>
      <Header title="Knot Quiz" desc="Test your knowledge" counter={progressionCounter}/>
      {!isGameEnd ? (
        <View style={styles.container}>
          <View style={styles.gameContainer}>
            <View
            >
              <Text style={styles.text}>{currentQuiz.question}</Text>
            </View>

            <View style={styles.itemsContainer}>
              {currentQuiz.options.map((option, index) => (
                <TouchableOpacity
                  key={option + index}
                  style={[styles.itemContainer, selectedAnswer && option === currentQuiz.correctAnswer && styles.correctAnswerContainer, selectedAnswer === option && selectedAnswer !== currentQuiz.correctAnswer && styles.wrongAnswerContainer]}
                  onPress={() => onAnswerPress(option)}
                  disabled={!!selectedAnswer}
                >
                  <Text style={[styles.text, {maxWidth: '60%'}]}>{option}</Text>

                  {selectedAnswer && option === currentQuiz.correctAnswer && (
                    <Octicons name="check-circle" size={20} color={Colors.gradient1} />
                  )}
                  {selectedAnswer === option && selectedAnswer !== currentQuiz.correctAnswer && (
                      <Octicons name="x-circle" size={20} color='#991B1B' />
                    )}
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <GradientButton title="Next" press={onNextPress}/>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={{width: '100%', alignItems: 'center'}}>
            <GradientText text="Results" style={styles.title}/>
          </View>

          <View style={{gap: 30}}>
            <View style={{width: '100%', alignItems: 'center', gap: 10,}}>
              <Text style={styles.title}>{correctCount}/{items.length || 0} - Your Result</Text>

              <Text style={styles.text}>
                Good result! Try again to improve or go next
              </Text>
            </View>

            <GradientButton title="Try Again" press={handleRestart}/>
          </View>
        </View>
      )}
    </View>
  );
};

export default withScreenLayout(QuizScreen);

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 40,
    justifyContent: 'center',
    gap: 24,
    backgroundColor: Colors.main,
  },
  gameContainer: {
    padding: 24,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 16,
    gap: 4
  },
  title: {
    fontFamily: Fonts.title,
    fontSize: 24,
    color: Colors.text
  },
  text: {
    fontFamily: Fonts.text,
    fontSize: 16,
    color: Colors.text,
  },
  itemsContainer: {
    gap: 12,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrongAnswerContainer: {
    borderColor: '#991B1B',
    backgroundColor: '#991B1B1A',
  },
  correctAnswerContainer: {
    borderColor: Colors.gradient1,
    backgroundColor: '#4040401A',
  },
});
