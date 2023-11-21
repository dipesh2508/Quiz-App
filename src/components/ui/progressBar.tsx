type Props = {
  value: number;
  max: number;
};

const ProgressBar = (props: Props) => {
  const progress = (props.value / props.max) * 100;
  return (
    <div className="h-4 w-full rounded-lg bg-gray-200">
      <div
        className="h-full rounded-lg bg-blue-500"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
