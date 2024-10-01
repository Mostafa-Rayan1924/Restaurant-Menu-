import Image from "next/image";
import { Zoom } from "react-reveal";

const ProductItem = ({ item }) => {
  return (
    <Zoom>
      <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start sm:flex-row relative border hover:border-primary transition-all duration-200  rounded-lg p-2 gap-3">
        <Image src={item.imgUrl} width={200} height={200} alt={item.title} />
        <div className="flex flex-col items-center sm:items-start text-center sm:text-start  gap-2">
          <h1 className="text-xl font-bold">{item.title}</h1>
          <p className="text-gray-500">{item.description}</p>
          <p className="sm:absolute top-2 right-2 text-primary">{item.price}</p>
        </div>
      </div>
    </Zoom>
  );
};

export default ProductItem;
