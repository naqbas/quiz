import { useState } from "react";
import { questions } from "./app/questions.js";
import Game from "./components/Game.jsx";
import Result from "./components/Result.jsx";

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);
    if(question.correct === index) {
      setCorrect(correct + 1);
    }
  }


  return (
    <main className="flex justify-center items-center bg-[#fd87ff] w-full h-[100vh] lg:text-xl xl:text-2xl 2xl:text-3xl">
      {
        step !== questions.length ?
        <Game step={step} question={question} onClickVariant={onClickVariant} />
        :
        <Result correct={correct} setStep={setStep} setCorrect={setCorrect} />
      }
    </main>
  )
}

export default App