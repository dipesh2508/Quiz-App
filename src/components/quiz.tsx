import { QuizData } from "../data/quizData";
import { useState } from "react";
import Result from "./result";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [currentGenre, setCurrentGenre] = useState(0);
  const [genreContainer, setGenreContainer] = useState(false);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData[0].data[currentGenre].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected(0);
    } else {
      setShowResult(true);
    }
  };

  const genreSelection = () => {
    setCurrentGenre(selected - 1);
    setGenreContainer(true);
    setSelected(0);
  };

  const updateScore = () => {
    if (selected === QuizData[0].data[currentGenre][currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setSelected(0);
    setGenreContainer(false);
    setCurrentGenre(0);
    setScore(0);
  };

  return (
    <div className="over-the-top container relative flex h-96 w-1/3 flex-col items-center gap-2 rounded-3xl bg-slate-300 bg-opacity-80 p-4">
      {showResult ? (
        <Result
          score={score}
          totalScore={QuizData[0].data[currentGenre].length}
          reset={resetAll}
        />
      ) : (
        <>
          {genreContainer ? (
            <>
              <div className="w-full flex-1">
                <div className="h-max-32 rounded-xl border-2 border-pink-400 bg-opacity-80 p-4 font-serif text-lg font-semibold drop-shadow-lg">
                  {QuizData[0].data[currentGenre][currentQuestion].question}
                </div>
              </div>

              <div className=" flex w-full flex-col gap-4 font-sans">
                {QuizData[0].data[currentGenre][currentQuestion].options.map(
                  (option, i) => {
                    return (
                      <button
                        key={i}
                        className={`h-8 rounded-lg border-2 border-sky-400 bg-opacity-80 drop-shadow-md hover:bg-sky-400 ${
                          selected === i + 1
                            ? "border-sky-500 bg-sky-500 hover:bg-sky-500"
                            : null
                        }`}
                        onClick={() => setSelected(i + 1)}
                      >
                        {option}
                      </button>
                    );
                  },
                )}
              </div>

              <button
                className="group relative mt-2 inline-flex h-8 w-1/3 items-center
      justify-center overflow-hidden rounded-lg bg-gradient-to-r from-pink-400 to-orange-400 font-medium text-white shadow-md
      transition duration-300 ease-out"
                onClick={changeQuestion}
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-gradient-to-r from-pink-400 to-orange-400 text-white duration-300 group-hover:translate-x-0">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="ease absolute flex h-full w-full transform items-center justify-center text-slate-200 transition-all duration-300 group-hover:translate-x-full">
                  Submit
                </span>
                <span className="invisible relative">Submit</span>
              </button>
            </>
          ) : (
            <>
              <div className="w-full flex-1">
                <div className="h-max-32 rounded-xl border-2 text-center border-pink-400 bg-opacity-80 p-4 font-serif text-lg font-semibold drop-shadow-lg">
                  Select a genre
                </div>
              </div>

              <div className=" flex w-full flex-col gap-4 font-sans">
                {QuizData[0].options.map((option, i) => {
                  return (
                    <button
                      key={i}
                      className={`h-8 rounded-lg border-2 border-sky-400 bg-opacity-80 drop-shadow-md hover:bg-sky-400 ${
                        selected === i + 1
                          ? "border-sky-500 bg-sky-500 hover:bg-sky-500"
                          : null
                      }`}
                      onClick={() => {
                        setSelected(i + 1);
                      }}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              <button
                className="group relative mt-2 inline-flex h-8 w-1/3 items-center
      justify-center overflow-hidden rounded-lg bg-gradient-to-r from-pink-400 to-orange-400 font-medium text-white shadow-md
      transition duration-300 ease-out"
                onClick={genreSelection}
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-gradient-to-r from-pink-400 to-orange-400 text-white duration-300 group-hover:translate-x-0">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="ease absolute flex h-full w-full transform items-center justify-center text-slate-200 transition-all duration-300 group-hover:translate-x-full">
                  Submit
                </span>
                <span className="invisible relative">Submit</span>
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Quiz;
