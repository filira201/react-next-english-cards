const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export const InfoCardSkeleton = () => {
  return (
    <div
      className={`${shimmer} relative overflow-hidden grow rounded-lg bg-gray-100 shadow-custom p-2`}
    >
      <div className="flex p-4">
        <div className="size-6 rounded-md bg-gray-200"></div>
        <div className="ml-2 h-6 w-[107px] rounded-md bg-gray-200 text-sm font-medium"></div>
      </div>
      <div className="flex items-center justify-center rounded-xl bg-white px-4 py-8">
        <div className="h-7 w-20 rounded-md bg-gray-200" />
      </div>
    </div>
  );
};

export const InfoCardsSkeleton = () => {
  return (
    <>
      <InfoCardSkeleton />
      <InfoCardSkeleton />
    </>
  );
};
