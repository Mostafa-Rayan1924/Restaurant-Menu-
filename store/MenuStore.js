import { create } from "zustand";
import { items } from "../app/_components/data";

const useMenuStore = create((set, get) => ({
  Products: items,
  Categories: ["All", ...new Set(items.map((item) => item.category))],
  catClick: "All",
  filterByCat: (cat) =>
    set((state) => {
      if (cat == "All") {
        state.catClick = cat;
        return {
          Products: items,
        };
      }
      let filterdItems = items.filter((item) => item.category == cat);
      state.catClick = cat;
      return {
        Products: filterdItems,
      };
    }),
  filterBySearch: (title) =>
    set(() => {
      if (title == "") {
        return {
          Products: items,
        };
      }
      let filterItemBySearch = items.filter((item) =>
        item.title.toLowerCase().includes(title.toLowerCase())
      );
      return {
        Products: filterItemBySearch,
      };
    }),
}));
export default useMenuStore;
