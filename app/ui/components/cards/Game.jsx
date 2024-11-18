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
          className="h-full rounded-[30px] w-[80%] transition-all ease-in-out duration-300 bg-[#12E730]"
        ></div>
      </div>
      <div className="border break-words">
        {isFrontSide ? (
          <h2
            className="cursor-pointer text-3xl text-center select-none"
            onClick={() => onClickWord(false)}
          >
            {data[step].english}
          </h2>
        ) : (
          <h2
            className="cursor-pointer text-3xl text-center select-none"
            onClick={() => onClickWord(true)}
          >
            {data[step].russian}
          </h2>
        )}
      </div>

      <button
        className={clsx("mr-4", { "cursor-not-allowed": step === 0 })}
        disabled={step === 0}
        onClick={onClickDecrementStep}
      >
        Назад
      </button>
      <button onClick={onClickIncrementStep}>Далее</button>
      <p>
        {step + 1} из {data.length}
      </p>
    </>
  );
};

export default Game;
