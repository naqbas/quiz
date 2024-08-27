import congratulations from "../assets/congratulations.png";
import { questions } from "../app/questions";
import PropTypes from "prop-types";

function Result({ correct, setStep, setCorrect }) {
  return (
    <section  className="flex flex-col items-center gap-4 w-[50%] bg-white p-6 rounded-md">
      <img src={congratulations} alt="ура!" className=" w-full max-w-[200px] h-auto" />
      
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      
      <button 
        onClick={() => {
          setStep(0);
          setCorrect(0);
        }}
        className="bg-[#fd87ff] py-2 px-6 rounded-xl text-white"
      >
        Попробовать снова 
      </button>
    </section>
  )
}

Result.propTypes = {
  correct: PropTypes.number,
  setStep: PropTypes.func,
  setCorrect: PropTypes.func
}

export default Result
