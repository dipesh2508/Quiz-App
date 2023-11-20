const Quiz = () => {
  return (
    <div className="over-the-top container relative flex h-96 w-1/3 flex-col items-center justify-center gap-2 rounded-3xl bg-slate-300 bg-opacity-80 p-4">
      <div className="w-full flex-1">
        <div className="h-32 rounded-xl border-2 border-pink-400 bg-opacity-80 p-4 drop-shadow-lg">
          Question
        </div>
      </div>

      <div className="w-full flex-1">
        <div className="h-8 rounded-lg border-2 border-sky-400 bg-opacity-80 drop-shadow-md hover:bg-sky-400"></div>
      </div>
      <button
        className="group relative inline-flex h-8 w-1/3 items-center
      justify-center overflow-hidden rounded-lg bg-gradient-to-r from-pink-400 to-orange-400 font-medium text-white shadow-md
      transition duration-300 ease-out"
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
          Button Text
        </span>
        <span className="invisible relative">Submit</span>
      </button>
    </div>
  );
};

export default Quiz;
