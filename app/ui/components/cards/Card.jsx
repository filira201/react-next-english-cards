import Link from "next/link";
import { UpdateCard, DeleteCard } from "./Buttons";

const Card = ({ id, name }) => {
  return (
    <div className="flex items-center shadow-custom rounded-md px-2 py-2 gap-6">
      <Link
        className="bg-[#f7f7f5] rounded-lg grow transition-colors hover:bg-[#e3e2e080]"
        href={`/home/cards/${id}/card`}
      >
        <div className="w-full h-16 flex justify-center items-center">
          <p className="font-medium">{name}</p>
        </div>
      </Link>
      <div className="flex gap-4">
        <UpdateCard id={id} />
        <DeleteCard id={id} />
      </div>
    </div>
  );
};

export default Card;
