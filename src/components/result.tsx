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
    <div className="progress-section" data-aos="fade-left" data-aos-once="true">
      <div className="task-progress">
        <p>Your Score
          <span>{score /totalScore}</span>
        </p>
        <ProgressBar max={totalScore} value={score}/>
      </div>
    </div>
    <input id='next-button' type='button' value="Try Again" onClick={props.reset} />
    </>
  )
}

export default Result