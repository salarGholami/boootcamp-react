import { useState } from "react";
import "./App.css";
import ProjectHeader from "./features/projects/ProjectHeader";
import ProjectTable from "./features/projects/ProjectTable";
import { projects } from "./data/project";

function App() {
  const [isOpen, setIsopen] = useState(false);
  const [sort, setSort] = useState("created_desc");
  const [category, setCategory] = useState("ALL");
  const [status, setStatus] = useState("ALL");

  const sortCallback = (a, b) => {
    switch (sort) {
      case "created_desc":
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case "created_asc":
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      case "deadline_desc":
        return new Date(b.deadline).getTime() - new Date(a.deadline).getTime();
      case "deadline_asc":
        return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
      case "budget_desc":
        return b.budget - a.budget;
      case "budget_asc":
        return a.budget - b.budget;
    }
  };

  const filteredProject = projects
    .filter((p) => (status === "ALL" ? true : p.status === status))
    .filter((p) =>
      category === "ALL" ? true : p.category.englishTitle === category
    )
    .sort(sortCallback);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className=" container mx-auto py-36">
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
                onChangeStatus={(value) => setStatus(value)}
                sort={sort}
                onChangeSort={(e) => setSort(e.target.value)}
                category={category}
                onChangeCategory={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="col-span-12">
              <ProjectTable filteredProject={filteredProject} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
