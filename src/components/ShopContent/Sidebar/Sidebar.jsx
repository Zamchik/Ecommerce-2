import Brand from './Brand/Brand'
import PriceRange from './PriceRange/PriceRange'
import styles from './Sidebar.module.css'
import SpecialDeal from './SpecialDeal/SpecialDeal'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.container_filters}>
        <label className={styles.label_filters}>
          Filters
        </label>
        <div className={styles.container_brand_priceRange}>
          <Brand />
          <PriceRange />
          <button className={styles.apply_filters}>Apply Filters</button>
        </div>
      </div>
      <section className={styles.register_banner}>
        <SpecialDeal />
      </section>
    </aside>

  )
}

export default Sidebar