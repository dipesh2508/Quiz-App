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
      <div className="space-y-4">
        <p >Your Score
          <span className="m-4">{score}/{totalScore}</span>
        </p>
        <ProgressBar max={totalScore} value={score}/>
      </div>
    </div>
    <input id='next-button' type='button' value="Try Again" onClick={props.reset} />
    </>
  )
}

export default Result