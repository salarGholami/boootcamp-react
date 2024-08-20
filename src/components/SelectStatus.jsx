function SelectStatus({ options, onChange, selectValue }) {
  return (
    <div className="">
      <select
        className="p-1 rounded-md text-[10px] md:text-xs lg:text-sm  dark:bg-gray-800 dark:text-gray-400"
        value={selectValue}
        onChange={onChange}
      >
        {options.map((item) => {
          return (
            <option key={Math.random()} value={item}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectStatus;
