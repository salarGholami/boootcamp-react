function ProjectHeader() {
  return (
    <div className="grid grid-cols-12 font-bold p-5">
      <div className="col-span-12 md:col-span-3 lg:col-span-5 my-1 md:my-0">
        <div className="">
          <h1 className="md:text-lg dark:text-gray-400">لیست پروژه ها</h1>
        </div>
      </div>
      <div className="col-span-12 md:col-span-9 lg:col-span-7">
        <div className="flex justify-between items-center lg:gap-x-10">
          <div className="flex justify-center items-center">
            <p className="ml-2 text-[10px] md:text-xs lg:text-sm dark:text-gray-400">
              وضعیت
            </p>
            <div className="flex bg-white md:gap-x-2 p-1 rounded-md  dark:bg-gray-800 dark:text-gray-400">
              <button className="bg-blue-500 text-[10px] md:text-xs lg:text-sm text-white px-3 rounded-md ">
                همه
              </button>
              <button className="px-3 text-[10px] md:text-xs lg:text-sm ">
                باز
              </button>
              <button className="px-3 text-[10px] md:text-xs lg:text-sm">
                بسته
              </button>
            </div>
          </div>
          <div className="">
            <select
              className="p-1 rounded-md text-[10px] md:text-xs lg:text-sm dark:bg-gray-800 dark:text-gray-400"
              name=""
              id=""
            >
              <option value="">مرتب سازی ( جدید ترین )</option>
              <option value="">مرتب سازی ( قدیمی ترین )</option>
            </select>
          </div>
          <div className="">
            <select
              className="p-1 rounded-md text-[10px] md:text-xs lg:text-sm  dark:bg-gray-800 dark:text-gray-400"
              name=""
              id=""
            >
              <option value="">دسته بندی(همه)</option>
            </select>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}

export default ProjectHeader;
