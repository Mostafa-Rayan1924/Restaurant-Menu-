import Productlist from "./_components/Productlist";
import CategoriesFilter from "./_components/CategoriesFilter";

export default function Home() {
  return (
    <div className="my-10 container">
      <h1 className="text-2xl mb-10 w-fit border-b-2 border-dotted border-slate-800">
        Our Menu
      </h1>
      <CategoriesFilter />
      <Productlist />
    </div>
  );
}
