import React, { useState } from "react";
import classes from "./AddProduct.module.css";
import { useContext } from "react";
import { UserContext } from "../../Store";

const AddProduct = () => {
  const user = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const obj = {
      name: event.target.name.value,
      desc: event.target.desc.value,
      price: parseInt(event.target.price.value),
    };

    user.addUser(obj);
    console.log("Hi", obj);
  };
  return (
    <div className={classes.form}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Medicine Name </label>
        <input type="text" id="name" name="name" />
        <br />
        <br />
        <label htmlFor="desc">Medicine Desc </label>
        <input type="text" id="desc" name="desc" />
        <br />
        <br />
        <label htmlFor="price">Medicine Price </label>
        <input type="number" id="price" name="price" />
        <br />
        <br />
        <button type="submit" className={classes.button}>
          {" "}
          Add To Cart
        </button>
      </form>
    </div>
  );
};
export default AddProduct;
