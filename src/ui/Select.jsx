function Select({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="p-1 rounded-md text-[10px] md:text-xs lg:text-sm dark:bg-gray-800 dark:text-gray-400"
    >
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
