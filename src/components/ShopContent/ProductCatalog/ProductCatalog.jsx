import ProductCard from "./ProductCard/ProductCard";
import ProductSort from "./ProductSort/ProductSort";
import styles from "./ProductCatalog.module.css";
import products from "../../../data/products";

const ProductCatalog = () => {
  const tvProducts = products.filter((p) => p.category === "tv")
  return (
    <div className={styles.container_productCatalog}>
      <div className={styles.container_productSort}>
        <ProductSort />
      </div>
      <div className={styles.container_productCard}>
        {tvProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
