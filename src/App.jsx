import { useState } from "react";
import "./App.css";
import ProjectHeader from "./components/ProjectHeader";
import ProjectTable from "./components/ProjectTable";

const projects = [
  {
    _id: 1,
    title: "طراحی اپلیکیشن سفر آنلاین",
    description: "طراحی رابط کاربری و تجربه کاربری اپلیکیشن سفر آنلاین",
    status: "CLOSED",
    category: {
      id: 1,
      title: "طراحی UI/UX",
      englishTitle: "design-ui/ux",
    },
    budget: 10000,
    tags: ["Ui/UX", "Figma"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 2,
    title: "توسعه سایت فروشگاهی",
    description: "یک سایت فروشگاهی کامل با پنل ادمین",
    status: "OPEN",
    category: {
      id: 2,
      title: "برنامه نویسی وب",
      englishTitle: "web development",
    },
    budget: 50000,
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 3,
    title: "توسعه گرافیک سایت",
    description: "یک سایت فروشگاهی کامل با پنل ادمین",
    status: "OPEN",
    category: {
      id: 3,
      title: "گرافیست",
      englishTitle: "graphic",
    },
    budget: 3000,
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2023-11-03T12:55:48.610Z",
    createdAt: "2023-10-23T18:18:20.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 4,
    title: "توسعه اندروید",
    description: "یک سایت فروشگاهی کامل با پنل ادمین",
    status: "CLOSED",
    category: {
      id: 4,
      title: "برنامه نویسی اندروید",
      englishTitle: "Android development",
    },
    budget: 30000,
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2023-02-23T12:33:48.740Z",
    createdAt: "2023-05-23T18:18:11.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
];

function App() {
  const [isOpen, setIsopen] = useState(false);
  const [allProject, setAllProject] = useState(projects);
  const [status, setStatus] = useState("all");
  const [sort, setSort] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const statusHandler = (item) => {
    setStatus(item);
    switch (item) {
      case "all": {
        return setAllProject(projects);
      }
      case "open": {
        return setAllProject(projects.filter((i) => i.status === "OPEN"));
      }
      case "closed": {
        return setAllProject(projects.filter((i) => i.status === "CLOSED"));
      }
      default:
        return setAllProject(projects);
    }
  };

  const categoryHandler = (category) => {
    const filterCategory = projects.filter(
      (item) => item.category.englishTitle === category
    );
    setSelectedCategory(filterCategory);
  };

  const sortByCreatedAt = (sortDirection) => {
    // کپی کردن آرایه پروژه‌ها برای جلوگیری از تغییر مستقیم state
    const sortedProjects = [...allProject];

    // مرتب‌سازی بر اساس createdAt
    sortedProjects.sort((a, b) => {
      const dateA = new Date(a.deadline);
      const dateB = new Date(b.deadline);

      if (sortDirection === "asc") {
        return dateA - dateB; // مرتب‌سازی صعودی بر اساس زمان ایجاد
      } else if (sortDirection === "desc") {
        return dateB - dateA; // مرتب‌سازی نزولی بر اساس زمان ایجاد
      } else {
        return 0; // بدون تغییر
      }
    });

    // به روز رسانی state پروژه‌های مرتب شده
    setAllProject(sortedProjects);
    // تنظیم جهت مرتب‌سازی
    setSort(sortDirection);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className=" container mx-auto py-40">
        {!isOpen ? (
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="">
                <h1 className="dark:text-white text-xl">لیست پروژه ها</h1>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-blue-600 text-white px-10 py-4 rounded-xl text-3xl mt-28"
                  onClick={() => setIsopen((is) => !is)}
                >
                  نشان دادن پروژه ها
                </button>
              </div>
            </div>
          </div>
        ) : null}
        {isOpen ? (
          <div className="grid grid-cols-12 border-blue-600 border md:mx-6">
            <div className="col-span-12">
              <ProjectHeader
                status={status}
                onStatusHandler={statusHandler}
                sortByCreatedAt={sortByCreatedAt}
                allProject={allProject}
                categoryHandler={categoryHandler}
              />
            </div>
            <div className="col-span-12">
              <ProjectTable allProject={selectedCategory} status={status} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
