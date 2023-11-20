type Props = {
    score: number;
    totalScore: number;
    reset: () => void
    }

const Result = (props : Props) => {
  return (
    <>
    <div className="progress-section" data-aos="fade-left" data-aos-once="true">
      <div className="task-progress">
        <p>Your Score
          <span>{props.score} / {props.totalScore}</span>
        </p>
        <progress className='progress' max={props.totalScore} value={props.score}/>
      </div>
    </div>
    <input id='next-button' type='button' value="Try Again" onClick={props.reset} />
    </>
  )
}

export default Result