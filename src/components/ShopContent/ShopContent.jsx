import ProductCatalog from "./ProductCatalog/ProductCatalog";
import styles from "./ShopContent.module.css";
import Sidebar from "./Sidebar/Sidebar";

const ShopContent = () => {
  return (
    <div className={styles.container_shopContent}>
      <Sidebar />
      <ProductCatalog />
    </div>
  );
};

export default ShopContent;
