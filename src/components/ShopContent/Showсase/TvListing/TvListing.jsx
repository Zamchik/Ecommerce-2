import { useState, useEffect } from "react";
import productsData from "../../../../data/products";
import styles from "./TvListing.module.css";
import Sidebar from "../../Sidebar/Sidebar";
import ProductCatalog from "../../ProductCatalog/ProductCatalog";

const TvListing = ({ cart, setCart }) => {
  const category = "tv";

  // Локальное состояние фильтров (до нажатия Apply)
  const [brandFilter, setBrandFilter] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState(5000);
  const [sortBy, setSortBy] = useState("price-asc");

  // Применённые фильтры (обновляются по кнопке Apply)
  const [appliedFilters, setAppliedFilters] = useState({
    brand: "",
    min: "",
    max: 5000,
  });

  // Сброс фильтров при монтировании (при переходе на эту категорию)
  useEffect(() => {
    setBrandFilter("");
    setMinPrice("");
    setMaxPrice(5000);
    setSortBy("price-asc");
    setAppliedFilters({ brand: "", min: "", max: 5000 });
  }, []);

  // Список брендов для текущей категории
  const brands = [
    ...new Set(
      productsData.filter((p) => p.category === category).map((p) => p.brand)
    ),
  ];

  // Применить фильтры
  const applyFilters = () => {
    setAppliedFilters({
      brand: brandFilter,
      min: minPrice,
      max: maxPrice,
    });
  };

  // Фильтрация товаров
  const filteredProducts = productsData
    .filter((p) => p.category === category)
    .filter((p) => {
      if (appliedFilters.brand && p.brand !== appliedFilters.brand) return false;
      const minOk =
        appliedFilters.min === "" || p.price >= Number(appliedFilters.min);
      const maxOk = p.price <= Number(appliedFilters.max);
      return minOk && maxOk;
    });

  // Сортировка
  const sortedProducts = [...filteredProducts].sort((a, b) =>
    sortBy === "price-asc" ? a.price - b.price : b.price - a.price
  );

  return (
    <div className={styles.container_shopContent}>
      <Sidebar
        brands={brands}
        brandFilter={brandFilter}
        setBrandFilter={setBrandFilter}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        onApply={applyFilters}
      />
      <ProductCatalog
        products={sortedProducts}
        cart={cart}
        setCart={setCart}
        sortBy={sortBy}
        setSortBy={setSortBy}
        totalCount={sortedProducts.length}
      />
    </div>
  );
};

export default TvListing;