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
    <div className="w-[90%] max-w-[1000px] overflow-y-auto rounded-xl p-10 border">
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
        <>
          <button onClick={() => setStep(0)}>Начачть карточку заново</button>
          <Link href="/home/cards">
            <p>Назад</p>
          </Link>
        </>
      )}
    </div>
  );
};

export default Quize;
