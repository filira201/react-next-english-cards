"use client";

import { useState } from "react";
import Game from "./Game";
import Link from "next/link";

const Quize = ({ data }) => {
  const [step, setStep] = useState(0);
  const [isFrontSide, setIsFrontSide] = useState(true);

  const onClickIncrementStep = () => {
    setStep(step + 1);
    setIsFrontSide(true);
  };

  const onClickDecrementStep = () => {
    setStep(step - 1);
    setIsFrontSide(true);
  };

  const onClickWord = (isFront) => {
    setIsFrontSide(isFront);
  };

  return (
    <div className="border bg-[#ffffffe6] w-[90%] max-w-[1000px] overflow-y-auto rounded-xl px-4 py-8 md:px-6 lg:px-8 lg:py-10 xl:w-4/5">
      {step !== data.length ? (
        <Game
          data={data}
          step={step}
          onClickIncrementStep={onClickIncrementStep}
          onClickDecrementStep={onClickDecrementStep}
          isFrontSide={isFrontSide}
          onClickWord={onClickWord}
        />
      ) : (
        <div className="flex flex-col justify-center items-center gap-10">
          <p className="text-xl font-medium text-center">Карточка завершена</p>
          <div className="w-full flex flex-col gap-4 sm:gap-0 sm:flex-row sm:justify-around">
            <button
              className="font-medium flex items-center justify-center rounded-lg bg-[#0582ff] text-white pt-[10px] px-5 pb-3 transition-colors [@media(hover:hover){&:hover}]:bg-[#045ac3] [@media(hover:none){&:active}]:bg-[#045ac3] xm:min-w-48"
              onClick={() => setStep(0)}
            >
              Пройти заново
            </button>
            <Link
              className="font-medium flex items-center justify-center rounded-lg bg-[#ebf5fe] text-[#087fe7] pt-[10px] px-5 pb-3 transition-colors [@media(hover:hover){&:hover}]:bg-[#d6e1f5] [@media(hover:none){&:active}]:bg-[#d6e1f5] xm:min-w-48"
              href="/home/cards"
            >
              <p>Назад к карточкам</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quize;
