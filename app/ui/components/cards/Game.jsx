"use client";

const Game = ({ data, step, onClickCard, languageIsEnglish, onClickWord }) => {
  const percentage = Math.round((step / data.length) * 100);

  return (
    <>
      <div className="h-[10px] rounded-[30px] bg-[#e8e8e8] mb-[25px]">
        <div
          style={{ width: `${percentage}%` }}
          className="h-full rounded-[30px] w-[80%] transition-all ease-in-out duration-300 bg-[#12E730]"
        ></div>
      </div>
      {languageIsEnglish ? (
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

      <button onClick={onClickCard}>Далее</button>
    </>
  );
};

export default Game;
