import styles from "./ProductSort.module.css";
import products from "../../../../data/products";

const ProductSort = () => {

  const tvCount = products.filter(product => product.category === "tv").length;
  
  return (
    <>
      <div className={styles.count}>{tvCount} products</div>
      <select className={styles.select}>
        <option value="name">Sort by Name</option>
        <option value="price">Sort by Price</option>
      </select>
    </>
  );
};

export default ProductSort;
