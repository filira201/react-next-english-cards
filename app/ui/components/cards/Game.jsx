"use client";

import clsx from "clsx";

const Game = ({
  data,
  step,
  onClickIncrementStep,
  onClickDecrementStep,
  isFrontSide,
  onClickWord,
}) => {
  const percentage = Math.round((step / data.length) * 100);

  return (
    <>
      <div className="h-[10px] rounded-xl bg-[#e8e8e8] mb-[25px]">
        <div
          style={{ width: `${percentage}%` }}
          className="h-full rounded-xl w-4/5 transition-all duration-300 bg-[#12E730]"
        ></div>
      </div>
      <div className="flex flex-col items-center gap-10">
        <div className="bg-[#f7f7f5] transition-colors rounded-lg px-2 py-2 min-w-[80%] max-w-[90%] [@media(hover:hover){&:hover}]:bg-[#e3e2e080] [@media(hover:none){&:active}]:bg-[#e3e2e080] sm:min-w-[50%]">
          {isFrontSide ? (
            <p
              className="cursor-pointer text-3xl text-center break-words"
              onClick={() => onClickWord(false)}
            >
              {data[step].english}
            </p>
          ) : (
            <p
              className="cursor-pointer text-3xl text-center break-words"
              onClick={() => onClickWord(true)}
            >
              {data[step].russian}
            </p>
          )}
        </div>
        <div className="flex items-center justify-center gap-5 xm:gap-10">
          <button
            className={clsx(
              "flex h-10 w-10 items-center justify-center rounded-md border transition-colors [@media(hover:hover){&:hover}]:bg-gray-100 [@media(hover:none){&:active}]:bg-gray-100",
              { "pointer-events-none text-gray-300": step === 0 }
            )}
            disabled={step === 0}
            onClick={onClickDecrementStep}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <p>
            {step + 1} из {data.length}
          </p>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-md border transition-colors [@media(hover:hover){&:hover}]:bg-gray-100 [@media(hover:none){&:active}]:bg-gray-100"
            onClick={onClickIncrementStep}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Game;
