"use client";

const Termin = (props) => {
  return (
    <div className="mb-4 border rounded-md p-2 flex flex-col gap-4">
      <div className="flex flex-col gap-4 xl:flex-row xl:gap-10">
        <div className="grow flex flex-col gap-2">
          <label
            htmlFor={`card-word-english-${props.index + 1}`}
            className="text-sm font-medium"
          >
            Лицевая сторона
          </label>
          <textarea
            rows="1"
            name={`english-${props.index + 1}`}
            placeholder="Ваш текст..."
            id={`card-word-english-${props.index + 1}`}
            value={props.word.english}
            onChange={(e) =>
              props.onChangeEnglishWord({
                ...props.word,
                english: e.target.value,
              })
            }
            className="rounded-md border border-gray-200 p-2 text-sm placeholder:text-gray-500"
            required
          ></textarea>
        </div>

        <div className="grow flex flex-col gap-2">
          <label
            htmlFor={`card-word-russian-${props.index + 1}`}
            className="text-sm font-medium"
          >
            Оборотная сторона
          </label>
          <textarea
            rows="1"
            name={`russian-${props.index + 1}`}
            placeholder="Ваш текст..."
            id={`card-word-russian-${props.index + 1}`}
            value={props.word.russian}
            onChange={(e) =>
              props.onChangeRussianWord({
                ...props.word,
                russian: e.target.value,
              })
            }
            className="rounded-md border border-gray-200 p-2 text-sm placeholder:text-gray-500"
            required
          ></textarea>
        </div>
      </div>
      <button
        onClick={() => props.onDeleteWord(props.word.id)}
        className="w-full self-center font-medium flex items-center justify-center rounded-lg bg-red-500 text-white pt-[4px] px-5 pb-2 transition-colors [@media(hover:hover){&:hover}]:bg-red-600 [@media(hover:none){&:active}]:bg-red-600"
        type="button"
      >
        Удалить термин
      </button>
    </div>
  );
};

export default Termin;
