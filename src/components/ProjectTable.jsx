function ProjectTable() {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3 font-bold">#</th>
            <th className="px-6 py-3 font-bold">عنوان پروژه</th>
            <th className="px-6 py-3 font-bold">بودجه</th>
            <th className="px-6 py-3 font-bold">ددلاین</th>
            <th className="px-6 py-3 font-bold">وضعیت</th>
            <th className="px-6 py-3 font-bold">عملیات</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b text-xs dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">پروژه اول</td>
            <td className="px-6 py-4">500,000</td>
            <td className="px-6 py-4">1402/10/2</td>
            <td className="px-6 py-4">بسته</td>
            <td className="px-6 py-4">+</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProjectTable;
