import ProgressBar from "./ui/progressBar";

type Props = {
    score: number;
    totalScore: number;
    reset: () => void
    }

const Result = (props : Props) => {
  const score = props.score;
  const totalScore = props.totalScore;
  return (
    <>
    <div data-aos="fade-left" data-aos-once="true" className="w-full flex-1">
      <div className="space-y-4 my-12 mx-8">
        <p className="font-semibold mt-8">Your Score
          <span className="m-4 font-medium">{score}/{totalScore}</span>
        </p>
        <ProgressBar max={totalScore} value={score}/>
      </div>
    </div>
    <input id='next-button' className="bg-blue-500 p-2 rounded-lg border-2 border-blue-500 text-white hover:text-blue-500 hover:bg-transparent cursor-pointer" type='button' value="Try Again" onClick={props.reset} />
    </>
  )
}

export default Result