import { projects } from "../../data/project";
import Filter from "../../ui/Filter";
import Select from "../../ui/Select";

function ProjectHeader({
  status,
  onChangeStatus,
  sort,
  onChangeSort,
  category,
  onChangeCategory,
}) {
  const sortOptions = [
    {
      label: "تاریخ ایجاد ( جدید ترین )",
      value: "created_desc",
    },
    {
      label: "تاریخ ایجاد ( قدیمی ترین )",
      value: "created_asc",
    },
    {
      label: "قیمت ( صعودی )",
      value: "budget_asc",
    },
    {
      label: "قیمت ( نزولی )",
      value: "budget_desc",
    },
    {
      label: "ددلاین ( صعودی )",
      value: "deadline_asc",
    },
    {
      label: "ددلاین ( نزولی )",
      value: "deadline_desc",
    },
  ];

  const statusOptions = [
    {
      id: 1,
      label: "همه",
      value: "ALL",
    },
    {
      id: 2,
      label: "باز",
      value: "OPEN",
    },
    {
      id: 3,
      label: "بسته",
      value: "CLOSED",
    },
  ];

  const categories = projects.map((item) => {
    return {
      label: item.category.title,
      value: item.category.englishTitle,
    };
  });

  // unique catgory
  const uniqueCatgories = categories.filter(
    (obj1, index, self) =>
      self.findIndex((obj2) => obj2.value === obj1.value) === index
  );

  const transformedCategories = [
    { label: "دسته بندی ( همه )", value: "ALL" },
    ...uniqueCatgories,
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
          <Filter
            options={statusOptions}
            currentFilter={status}
            onChange={onChangeStatus}
          />
          <div className="">
            <Select
              onChange={onChangeSort}
              value={sort}
              options={sortOptions}
            />
          </div>
          <div className="">
            <Select
              onChange={onChangeCategory}
              value={category}
              options={transformedCategories}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectHeader;
