function Filter({ options, currentFilter, onChange }) {
  return (
    <div className="flex justify-center items-center">
      <p className="ml-2 text-[10px] md:text-xs lg:text-sm dark:text-gray-400 ">
        وضعیت
      </p>
      <div className="flex bg-white md:gap-x-2 rounded-md dark:bg-gray-800 dark:text-gray-400 ">
        {options.map(({ value, label }) => {
          const isActive = value === currentFilter;
          return (
            <button
              key={value}
              disabled={isActive}
              onClick={() => onChange(value)}
              className={`px-3 py-1 text-[10px] md:text-xs lg:text-sm  ${
                isActive ? "bg-blue-700 rounded-xl text-white" : ""
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
