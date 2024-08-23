import FilterStatus from "./FilterStatus";

function ProjectHeader({
  onStatusHandler,
  status,
  sortByCreatedAt,
  allProject,
  categoryHandler,
  sort,
  selectedCategory,
}) {
  const newCategory = allProject.map((item) => {
    return {
      label: item.category.title,
      value: item.category.englishTitle,
    };
  });

  const allCategory = [
    { label: " دسته بندی ( همه )", value: "all" },
    ...newCategory,
  ];

  const allSort = [
    {
      id: 1,
      label: "مرتب سازی ( قدیمی ترین )",
      value: "asc",
    },
    {
      id: 2,
      label: "مرتب سازی ( جدید ترین )",
      value: "desc",
    },
  ];

  return (
    <div className="grid grid-cols-12 font-bold py-5 mx-1 md:mx-3 lg:mx-5">
      <div className="col-span-12 md:col-span-3 lg:col-span-5 my-1 md:my-0">
        <div className="">
          <h1 className="md:text-lg dark:text-gray-400">لیست پروژه ها</h1>
        </div>
      </div>
      <div className="col-span-12 md:col-span-9 lg:col-span-7">
        <div className="flex justify-between items-center lg:gap-x-2">
          <FilterStatus
            onStatusHandler={onStatusHandler}
            filterStatus={status}
          />
          <div className="">
            <SortByDate
              value={sort}
              onChange={sortByCreatedAt}
              option={allSort}
            />
          </div>
          <div className="">
            <SortByCategories
              value={selectedCategory}
              onChange={categoryHandler}
              option={allCategory}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectHeader;

function SortByDate({ value, onChange, option }) {
  return (
    <select
      className="p-1 rounded-md text-[10px] md:text-xs lg:text-sm dark:bg-gray-800 dark:text-gray-400"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {option.map((item) => (
        <option key={item.id} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

function SortByCategories({ value, onChange, option }) {
  return (
    <select
      className="p-1 rounded-md text-[10px] md:text-xs lg:text-sm  dark:bg-gray-800 dark:text-gray-400"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {option.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}
