import React, { useState } from "react";
import classes from "./Overlay.module.css";
import { useContext } from "react";
import { UserContext } from "../../Store";

const Overlay = (props) => {
  const user = useContext(UserContext);

  return (
    <div>
      {user.showOverlay && (
        <div className={classes.overlay}>
          <div className={classes["overlay-content"]}>{props.children}</div>
        </div>
      )}
    </div>
  );
};

export default Overlay;
