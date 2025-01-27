import React from 'react'
import  styles from './items.module.css'
function Items() {
  const items=[
    {
        item:"Avocado Toast",
        price:"$10",
        description:"Our avocado toast is made with fresh avocado, salt, pepper, and a squeeze of lemon juice."
    },
    {
        item:"Pancakes",
        price:"$5",
        description:"Our pancakes are made with a batter of eggs, flour, milk, and sugar."
    },
    {
        item:"French Toast",
        price:"$7",
        description:"Our French toast is made with thick slices of bread soaked in a mixture of eggs, milk, and sugar."
    }
] 
  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <img src="/assets/Frame (1).svg" alt="" />
      </div>
      <div className={styles.innerContainer}>
      <div className={styles.titleContainer}>
       <span  className={styles.line}></span><h2 className={styles.title}>BRUNCH COCKTAILS</h2><span className={styles.line}></span>
      </div>
<div className={styles.menu}>
     {
      items.map((item,index)=>
      {
        return(
          <div className={styles.menuItems}>
              <div className={styles.nameandPrice}>
                <p className={styles.itemName}>
                {item.item}
                </p><div className={styles.space}></div>
                <span className={styles.itemPrice}>
                  {item.price}
                </span>
                </div>
            <div className={styles.itemdescription}>
              <p>{item.description}</p>
              </div> 
          </div>
        )
      })
     }
     </div>
      </div>
      <div className={styles.frame}>
      <img src="/assets/Frame.svg" alt="" />
      </div>
    </div>
  )
}

export default Items
