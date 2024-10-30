import Link from "next/link";
import { UpdateCard, DeleteCard } from "./Buttons";

const Card = ({ id, name }) => {
  return (
    <div>
      <Link href={`/home/cards/${id}/card`}>
        <div className="w-40 h-16 flex justify-center items-center bg-blue-300 rounded-xl">
          <p>{name}</p>
        </div>
      </Link>
      <div className="flex gap-5 mt-1">
        <UpdateCard id={id} />
        <DeleteCard id={id} />
      </div>
    </div>
  );
};

export default Card;
