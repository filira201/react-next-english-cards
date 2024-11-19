"use client";

const Termin = (props) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center">
        <label
          htmlFor={`card-word-english-${props.index + 1}`}
          className="mb-2 block text-sm font-medium"
        >
          Английское слово
        </label>
        <div className="relative">
          <input
            type="text"
            name={`english-${props.index + 1}`}
            placeholder="Введите английское слово"
            id={`card-word-english-${props.index + 1}`}
            value={props.word.english}
            onChange={(e) =>
              props.onChangeEnglishWord({
                ...props.word,
                english: e.target.value,
              })
            }
            className="peer block rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            required
          />
        </div>

        <label
          htmlFor={`card-word-russian-${props.index + 1}`}
          className="mb-2 block text-sm font-medium"
        >
          Русское слово
        </label>
        <div className="relative">
          <input
            type="text"
            name={`russian-${props.index + 1}`}
            placeholder="Введите русское слово"
            id={`card-word-russian-${props.index + 1}`}
            value={props.word.russian}
            onChange={(e) =>
              props.onChangeRussianWord({
                ...props.word,
                russian: e.target.value,
              })
            }
            className="peer block rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            required
          />
        </div>
        <button
          onClick={() => props.onDeleteWord(props.word.id)}
          className="bg-red-500  text-white p-1 rounded-md hover:bg-red-600 text-sm"
          type="button"
        >
          Удалить слово
        </button>
      </div>
    </div>
  );
};

export default Termin;
