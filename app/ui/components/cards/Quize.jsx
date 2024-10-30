"use client";

import { useState } from "react";
import Game from "./Game";
import Link from "next/link";

const Quize = ({ data }) => {
  const [step, setStep] = useState(0);
  const [languageIsEnglish, setLanguageIsEnglish] = useState(true);

  const onClickCard = () => {
    setStep(step + 1);
    setLanguageIsEnglish(true);
  };

  const onClickWord = (isEnglish) => {
    setLanguageIsEnglish(isEnglish);
  };

  return (
    <div className="w-[500px] max-h-[90vh] overflow-y-auto rounded-[30px] p-10 bg-white">
      {step !== data.length ? (
        <Game
          data={data}
          step={step}
          onClickCard={onClickCard}
          languageIsEnglish={languageIsEnglish}
          onClickWord={onClickWord}
        />
      ) : (
        <>
          <button onClick={() => setStep(0)}>Начачть карточку занво</button>
          <Link href="/home/cards">
            <p>Назад</p>
          </Link>
        </>
      )}
    </div>
  );
};

export default Quize;
