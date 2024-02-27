import { useContext } from "react";
import { UserContext } from "../../Store";
import classes from "./AddCart.module.css";

const headings = ["Med-Name", "Med-Desc", "Med-Price", "Qty", "AddToCart"];

const AddCart = () => {
  const user = useContext(UserContext);

  const addQty = (index) => {
    user.increaseQty(index);
  };

  const heads = (
    <ul className={[classes.headings, classes.alignedContent].join(" ")}>
      {headings.map((item, index) => (
        <li key={index}>
          <h3>{item}</h3>
        </li>
      ))}
    </ul>
  );

  const body = user.medArray.map((item, index) => (
    <div
      key={index}
      className={[classes.meds, classes.alignedContent].join(" ")}
    >
      <span>{item.name}</span>
      <span>{item.desc}</span>
      <span>{item.price}</span>
      <span>{item.qty}</span>
      <button
        onClick={() => {
          addQty(index);
        }}
      >
        Add me
      </button>
    </div>
  ));

  return (
    <>
      {heads}
      {body}
    </>
  );
};

export default AddCart;
