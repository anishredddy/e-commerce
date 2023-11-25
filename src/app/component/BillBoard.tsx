const BillBoard = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8  rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative  aspect-[2.4/1] lg:md:aspect-16/9 overflow-hidden bg-cover"
        style={{ backgroundColor: `lightblue` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            Festive Collection
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillBoard;
