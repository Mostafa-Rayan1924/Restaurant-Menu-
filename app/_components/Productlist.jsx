"use client";
import useMenuStore from "../../store/MenuStore";
import ProductItem from "./ProductItem";
const Productlist = () => {
  let { Products } = useMenuStore();
  let productMap = Products.map((product) => {
    return <ProductItem key={product.id} item={product} />;
  });
  return (
    <div>
      <div className="grid grid-cols-1 gap-5">
        {Products.length > 0 ? productMap : <p>No Products</p>}
      </div>
    </div>
  );
};

export default Productlist;
