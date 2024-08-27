import { questions } from "../app/questions";
import PropTypes from "prop-types";

function Game({ step, question, onClickVariant }) {
  const percentage = Math.round((step / questions.length) * 100);

  return (
    <section className="flex flex-col gap-4 w-[50%] bg-white p-6 rounded-md">
      <div className="w-full h-2 bg-white rounded-md border border-[#fd87ff]">
        <div style={{width: `${percentage}%`}} className="h-full bg-[#fd87ff] rounded-md"></div>
      </div>
      
      <h2 className="font-bold p-2">
        {question.title}
      </h2>
      
      <ul className="flex flex-col gap-2">
        {
          question.variants.map((text, index) => (
            <li key={index} 
              onClick={() => onClickVariant(index)} 
              className="border border-[#fd87ff] p-2 cursor-pointer hover:bg-[#fd87ff] hover:text-white rounded-md"
            >
                {text}
            </li>
          ))
        }
      </ul>
    </section>
  )
}

Game.propTypes = {
  step: PropTypes.number,
  question: PropTypes.shape({
    title: PropTypes.string,
    variants: PropTypes.array
  }),
  onClickVariant: PropTypes.func
}

export default Game
