import React, {usestate} from "react";
import {View, Text, TouchbleOpacity, Stylesheet, ViewComponent} from 'react-native';

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
    options: ["Baldur’s Gate 3", "Marvel’s Spider-Man 2", "Alan Wake 2", "Super Mario Bros. Wonder"],
    answer: "Baldur’s Gate 3"  
  },
  {
    question: "Qual a nome da sonda que tocou o sol?",
    options: ["Messenger", "Parker Solar Probe", "Curiosity", "New Horizons"],
    answer: "Parker Solar Probe"  
  },
]

export default Funtion App(){
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectOption] = useState<String | null>(null);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);

  const handOption = (option: string) => {
    setSelectOption(option);

    if(option === currentQuestion.answer){
      setScore(score + 1);
    }

    setTimeout(() => {
      setSelectedOption(null);
      if(currentQuestion+1 < quizQuestion.length){
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else{
        setShowScore(true);
      }
    }, 1000);
  }
}        
   
export default function App(){
 const handOption = (option:string) => {
 };

  if (showScore){
      return(
      <View style= {style.container}>
      <Text style = StyleSheet={.scoreText}> Você Acertou {score} de {quizQuestions.length}</Text>
      </View>
    );
  }
}

return (<View style={Stylesheet.container}>
  <Text style={Stylesheet.questionText}>{currentQuestion.question}</Text>
  {currentQuestion.options.map((option) => (
    <TouchbleOpacity 
    Key=(option)
    style={[
      stylesheet.optionButton,
      selectedOption === option &&
      (option === currentQuestion.answer ? Stylesheet.correct : Stylesheet.incorret),
    ]}
    onPress={() => handleOptionPress(option)
    disable={!! selectedOption}
    >
    <Text style={Stylesheet.optionText}>{option}</Text>
    </TouchbleOpacity>
    }
  ))}
</View>)

const styles = Stylesheet.create({
  container:{
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  questioText: {
    fontSize: 18,
    marginBottom: 20, 
    textAlign: "center",
  },
  optionButton:{
    backgroundColor: #ddd,
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
  },
  optionText: {
    fontsize: 18,
    textAlign: "center",
  },
  correct: {
    backgroundColor: "green",
  },
  incorrect: {
    backgroundColor: "red",
  },
  scoreText{
    fontsize: 28,
    textAlign: "center",
  },
});