import toLocalShortDate from "../../utils/toLocalDateShort";
import { toPersianNumberWithComma } from "../../utils/toPersionNumber";
import truncateText from "../../utils/truncateText";

function ProjectTable({ filteredProject }) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-3 py-3 font-bold">#</th>
            <th className="px-3 py-3 font-bold">عنوان پروژه</th>
            <th className="px-3 py-3 font-bold">دسته بندی</th>
            <th className="px-3 py-3 font-bold">بودجه</th>
            <th className="px-3 py-3 font-bold">تاریخ ایجاد</th>
            <th className="px-3 py-3 font-bold">ددلاین</th>
            <th className="px-3 py-3 font-bold">تگ ها</th>
            <th className="px-3 py-3 font-bold">وضعیت</th>
            <th className="px-3 py-3 font-bold">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {filteredProject.map((item, index) => (
            <tr
              key={item._id}
              className="bg-white border-b text-xs dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-3 py-3">{toPersianNumberWithComma(index + 1)}</td>
              <td className="px-3 py-3">{truncateText(item.title, 30)}</td>
              <td className="px-3 py-3">{item.category.title}</td>
              <td className="px-3 py-3">
                {toPersianNumberWithComma(item.budget)}
              </td>
              <td className="px-3 py-3">{toLocalShortDate(item.createdAt)}</td>
              <td className="px-3 py-3">{toLocalShortDate(item.deadline)}</td>
              <td className="px-3 py-3">
                <div className="flex justify-start items-center gap-2">
                  {item.tags.map((tag, index) => (
                    <span
                      className="bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded-xl"
                      key={index}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
              <td className="px-3 py-4 justify-start items-center flex">
                {item.status === "OPEN" ? (
                  <p className="bg-green-800 text-white px-5 py-1 rounded-xl">
                    باز
                  </p>
                ) : (
                  <p className="bg-red-800 text-white px-3 py-1 rounded-xl">
                    بسته
                  </p>
                )}
              </td>
              <td className="px-6 py-4">
                <button className="justify-start items-center flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectTable;

// function Project({ item }) {
//   // const price = item.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

//   // const date = new Date(item.deadline).toLocaleDateString("fa-IR", {
//   //   year: "numeric",
//   //   month: "numeric",
//   //   day: "numeric",
//   // });

//   return (

//   );
// }
