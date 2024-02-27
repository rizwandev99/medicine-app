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
    <ul className={classes.headings}>
      {headings.map((item, index) => {
        return (
          <div key={index}>
            <h3>{item}</h3>
          </div>
        );
      })}
    </ul>
  );
  const body = user.medArray.map((item, index) => {
    return (
      <div key={index} className={classes.meds}>
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
    );
  });
  return (
    <>
      {heads}
      {body}
    </>
  );
};
export default AddCart;
