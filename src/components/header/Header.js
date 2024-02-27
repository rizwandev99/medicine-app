import classes from "./Header.module.css";
import { useContext } from "react";
import { UserContext } from "../../Store";

const Header = () => {
  const user = useContext(UserContext);

  return (
    <div className={classes.header}>
      <h1>Medicine Order App</h1>
      <div className={classes.cart} onClick={user.toggleOverlay}>
        <span>Cart </span>
        <span>{user.counter}</span>
      </div>
    </div>
  );
};

export default Header;
