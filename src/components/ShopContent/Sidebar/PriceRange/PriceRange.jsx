import { useState } from 'react';
import styles from './PriceRange.module.css';

const PriceRange = () => {
  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("5000");
  
  const handlerMinChange = (event) => { 
    setMinPrice(event.target.value);
  };

  const handlerMaxChange = (event) => {
    setMaxPrice(event.target.value);
  };

  return (
    <div className={styles.container_priceRange}>
      <label className={styles.label_priceRange}>Price Range</label>
      <div className={styles.container_min_max_PriceRange}>
        <input
          className={styles.min_PriceRange}
          value={minPrice}
          onChange={handlerMinChange}
          type="number"
        />
        <input
          className={styles.max_PriceRange}
          value={maxPrice}
          onChange={handlerMaxChange}
          type="number"
        />
      </div>
    </div>
  );
};

export default PriceRange;