"use client";
import useMenuStore from "../../store/MenuStore";
const CategoriesFilter = () => {
  let { Categories, filterByCat, catClick } = useMenuStore();
  return (
    <div className="mb-10">
      <div className="flex  items-center flex-wrap  justify-center gap-2">
        {Categories.map((item) => {
          return (
            <button
              onClick={() => filterByCat(item)}
              className={`border ${
                item == catClick ? "bg-primary text-white" : ""
              } rounded px-2 py-1 transition-all duration-300 hover:bg-primary hover:text-white`}>
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesFilter;
