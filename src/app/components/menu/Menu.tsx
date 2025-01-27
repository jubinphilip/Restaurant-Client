'use client'
import React, { useEffect, useState } from "react";
import styles from "./menu.module.css";
import axios from "axios";
import { IoIosAddCircleOutline } from "react-icons/io";
import AddMenu from "@/app/modals/add-menu/AddMenu";
interface MenuItem {
  _id: string;
  title: string;
}

function Menu() {
  const [items, setItems] = useState<MenuItem[]>([]);
const[state,setState]=useState(Boolean)
  useEffect(() => {
    axios
      .get("http://localhost:9000/user/get-menu")
      .then((response) => {
        if (Array.isArray(response.data.data)) {
          setItems(response.data.data);
        } else {
          console.error("Expected an array, received:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching menu:", error));
  }, []);

  return (
    <div className={styles.container}>
        {state && <AddMenu  state={setState} />}
      <div className={styles.buttonContainer}>
        {Array.isArray(items) &&
          items.map((item) => (
            <button className={styles.item} key={item._id}>
              {item.title}
            </button>
          ))}
        <IoIosAddCircleOutline className={styles.addMenu} onClick={()=>setState(true)} />
      </div>
    </div>
  );
}

export default Menu;
