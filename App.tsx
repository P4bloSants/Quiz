import React, {useState} from "react";
import {View, Text, TouchableOpacity, StyleSheet, ViewComponent} from 'react-native';

type Question = {
  question: string;
  options: string[];
  answer: string
};  

const quizQuestions: Question[] = [
  {
    question: "Qual o dinossauro mais bolado?",
    options: ["Estegosauro", "Espinossauro", "t-REX", "Triceratops"],
    answer: "Espinossauro"  
  },
  {
    question: "Qual foi o jogo do ano de 2023?",
    options: ["Baldurs Gate 3", "Marvels Spider-Man 2", "Alan Wake 2", "Super Mario Bros. Wonder"],
    answer: "Baldurs Gate 3"  
  },
  {
    question: "Qual a nome da sonda que tocou o sol?",
    options: ["Messenger", "Parker Solar Probe", "Curiosity", "New Horizons"],
    answer: "Parker Solar Probe"  
  },
]

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<String | null>(null);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleOption = (option: string) => {
    setSelectedOption(option);

    if (option === currentQuestion.answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setSelectedOption(null);
      if (currentQuestionIndex + 1 < quizQuestions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  if (showScore) {
    return (
      <View style={styles.container}>
        <Text style={styles.scoreText}>
          Você acertou {score} de {quizQuestions.length}!
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{currentQuestion.question}</Text>
      {currentQuestion.options.map((option) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.optionButton,
            selectedOption === option &&
              (option === currentQuestion.answer ? styles.correct : styles.incorrect),
          ]}
          onPress={() => handleOption(option)}
          disabled={!!selectedOption}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#ffefd5",
  },
  questionText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",

  },
  optionButton: {
    backgroundColor: "#808000",
    padding: 25,
    borderRadius: 8,
    marginVertical: 8,

  },
  optionText: {
    fontSize: 18,
    textAlign: "center",
  },
  correct: {
    backgroundColor: "#90ee90",
  },
  incorrect: {
    backgroundColor: "#ff6347",
  },
  scoreText: {
    fontSize: 28,
    textAlign: "center",
  },
});