import { useState, useEffect } from "react";

type Props = {
  value: number;
  max: number;
};

const ProgressBar = (props: Props) => {
  const progress: number = (props.value / props.max) * 100;

  const [bgColor, setBgColor] = useState<string>("");

  useEffect(() => {
    const changeColor = () => {
      if (progress < 33 && progress >= 0) {
        setBgColor("bg-red-400");
      } else if (progress < 66) {
        setBgColor("bg-yellow-400");
      } else if (progress <= 100) {
        setBgColor("bg-green-400");
      } else {
        throw new Error("Progress bar value is out of range");
      }
    };

    changeColor();
  }, [progress]);

  return (
    <div className="h-4 w-full rounded-lg bg-gray-200">
      <div
        className= {
          `h-full rounded-lg transition-all duration-500 ease-in-out ${bgColor}`
        }
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
