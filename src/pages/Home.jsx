import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ShopContent from "../components/ShopContent/ShopContent";
import styles from './Home.module.css'

const Home = () => {
   const [activeTab, setActiveTab] = useState("TV");
   
  return (
    <div className={styles.container_home}>
      <Header activeTab={activeTab} onTabChange={setActiveTab}/>
      <main>
        <ShopContent />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
