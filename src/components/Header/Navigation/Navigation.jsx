import styles from "./Navigation.module.css";
import CartIcon from "../assets/Cart.png";
import ProfileIcon from "../assets/Profile.png";

const Navigation = ({ activeTab, onTabChange }) => {
  const handleTabClick = (tab) => {
    onTabChange(tab);
  };

  return (
    <nav className={styles.container_header}>
      <a href="/tv" className={styles.logoLink}>
        <span className={styles.techstore}>TechStore</span>
      </a>

      <div className={styles.tabs_row}>
        <button
          className={`${styles.tab} ${activeTab === "tv" ? styles.active : ""}`}
          onClick={() => handleTabClick("tv")}
        >
          TV
        </button>
        <button
          className={`${styles.tab} ${activeTab === "phone" ? styles.active : ""}`}
          onClick={() => handleTabClick("phone")}
        >
          Phone
        </button>
        <button
          className={`${styles.tab} ${activeTab === "laptop" ? styles.active : ""}`}
          onClick={() => handleTabClick("laptop")}
        >
          Laptop
        </button>
      </div>

      <div className={styles.navigation_right}>
        <button className={styles.iconButton}>
          <img src={CartIcon} alt="cart" />
        </button>
        <button className={styles.iconButton}>
          <img src={ProfileIcon} alt="profile" />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;