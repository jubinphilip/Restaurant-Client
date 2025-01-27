import React from 'react'
import styles from './navbar.module.css'


function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>

      </div>
    
        <ul className={styles.navList}>
         <li className={styles.navItem}>HOME</li>
         <li className={styles.navItem}>MENU</li>
         <li className={styles.navItem}>MAKE A RESERVATION</li>
         <li className={styles.navItem}>CONTACT US</li>
        </ul>
    </div>
  )
}

export default Navbar
