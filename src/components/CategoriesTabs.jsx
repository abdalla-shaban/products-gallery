import { useState } from "react";
import { useProducts } from "../context/Products/hook";

const categories = [
  "All",
  "TV",
  "Audio",
  "Laptop",
  "Mobile",
  "Gaming",
  "Appliances",
];

const CategoriesTabs = () => {
  const [activeTab, setActiveTab] = useState("All");
  const { getCatProducts, getProducts } = useProducts();
  return (
    <div className="flex items-center  *:py-2 *:px-6 *:transition-all *:duration-300 *:rounded-lg">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => {
            setActiveTab(cat);
            if (cat.toLowerCase() !== categories[0].toLowerCase()) {
              getCatProducts(cat.toLowerCase());
            } else {
              getProducts();
            }
          }}
          className={activeTab === cat ? "active-cat-tab" : ""}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoriesTabs;
