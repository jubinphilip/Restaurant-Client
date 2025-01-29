import React, { useState, ChangeEvent } from "react";
import styles from "./addmenu.module.css";
import { MdClose } from "react-icons/md";
import axios from "axios";

interface ModalProps {
    state: React.Dispatch<React.SetStateAction<boolean>>;
  }

  const AddMenu= ({ state }: ModalProps) => {

    const handleClose = () => {
        state(false);
      };
  const [record, setRecord] = useState({ title: "", description: "" });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setRecord({ ...record, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    console.log("Submitted Data:", record);
    axios
      .post("https://restaurant-server-yc21.onrender.com/user/add-menu", record)
      .then((response) => {
        alert(response.data.message || "Menu item added successfully!");
      })
      .catch((error) => {
        alert(error.response?.data?.message || "Error adding menu item");
      });
  }
  return (
    <div className={styles.overlay}>
     
      <div className={styles.closeIcon}>
        <MdClose onClick={handleClose} />
      </div>

 
      <div className={styles.inputContainer}>
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          value={record.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="description"
          placeholder="Enter Description"
          value={record.description}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default AddMenu;
