import styles from './Header.module.css'
import Navigation from './Navigation/Navigation'

const Header = ( { activeTab, onTabChange } ) => {
  return (
    <header className={styles.header}>
        <Navigation activeTab={activeTab} onTabChange={onTabChange} />
    </header>
  )
}

export default Header