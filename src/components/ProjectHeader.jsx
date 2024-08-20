// import FilterStatus from "./FilterStatus";

import FilterStatus from "./FilterStatus";

function ProjectHeader({ onStatusHandler, status, sortByCreatedAt }) {
  return (
    <div className="grid grid-cols-12 font-bold p-5">
      <div className="col-span-12 md:col-span-3 lg:col-span-5 my-1 md:my-0">
        <div className="">
          <h1 className="md:text-lg dark:text-gray-400">لیست پروژه ها</h1>
        </div>
      </div>
      <div className="col-span-12 md:col-span-9 lg:col-span-7">
        <div className="flex justify-between items-center lg:gap-x-5">
          <FilterStatus
            onStatusHandler={onStatusHandler}
            filterStatus={status}
          />
          <div className="">
            <select
              className="p-1 rounded-md text-[10px] md:text-xs lg:text-sm dark:bg-gray-800 dark:text-gray-400"
              onChange={(e) => sortByCreatedAt(e.target.value)}
            >
              <option value="asc">مرتب سازی ( قدیمی ترین )</option>
              <option value="desc">مرتب سازی ( جدید ترین )</option>
            </select>
          </div>
          <div className="">
            <select className="p-1 rounded-md text-[10px] md:text-xs lg:text-sm  dark:bg-gray-800 dark:text-gray-400">
              <option value="">دسته بندی (همه)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectHeader;
