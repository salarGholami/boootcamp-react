function FilterStatus({ filterStatus, onStatusHandler }) {
  const status = [
    {
      id: 1,
      label: "همه",
      value: "all",
    },
    {
      id: 2,
      label: "باز",
      value: "open",
    },
    {
      id: 3,
      label: "بسته",
      value: "closed",
    },
  ];
  return (
    <div className="flex justify-center items-center">
      <p className="ml-2 text-[10px] md:text-xs lg:text-sm dark:text-gray-400">
        وضعیت
      </p>
      <div className="flex bg-white md:gap-x-2 rounded-md dark:bg-gray-800 dark:text-gray-400">
        {status.map((item) => {
          const isActive = item.value === filterStatus;
          return (
            <button
              key={item.value}
              onClick={() => onStatusHandler(item.value)}
              className={`px-3 py-1 text-[10px] md:text-xs lg:text-sm ${
                isActive ? "bg-blue-700 rounded-xl text-white" : ""
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FilterStatus;
