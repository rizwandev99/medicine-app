import { useContext } from "react";
import { UserContext } from "../../Store";
import classes from "./CartOpenPage.module.css";

const CartOpenPage = (props) => {
  const user = useContext(UserContext);

  const addQty = (index) => {
    user.increaseQty(index);
  };
  const subtractQty = (index) => {
    user.decreaseQty(index);
  };

  const clear = () => {
    user.clearQty();
    user.toggleOverlay();
  };

  const body = user.medArray.map((item, index) => {
    return (
      <div className={classes.orderBody} key={index}>
        <span className={classes.singleOrder}>{item.name}</span>
        <span className={classes.singleOrder}>{`Rs ${item.price}`}</span>

        <div className={classes.qtyModify}>
          <button
            onClick={() => {
              subtractQty(index);
            }}
          >
            -
          </button>
          <span className={classes.singleQty}>{item.qty}</span>
          <button
            onClick={() => {
              addQty(index);
            }}
          >
            +
          </button>
        </div>

        <span className={classes.singleOrder}>{`Rs ${
          item.price * item.qty
        }`}</span>
      </div>
    );
  });

  const total = () => {};
  return (
    <>
      <h3>Final Order:</h3>
      {body}
      <div
        className={classes.totalAmt}
      >{`Total amt is : Rs ${user.total}`}</div>

      <button onClick={user.toggleOverlay} className={classes.button}>
        Order
      </button>
      <button
        onClick={() => {
          clear();
        }}
        className={classes.button}
      >
        Clear
      </button>
    </>
  );
};
export default CartOpenPage;
