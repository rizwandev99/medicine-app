import React, { useState } from "react";
import classes from "./Overlay.module.css";

const Overlay = (props) => {
  return (
    <div>
      {props.showOverlay && (
        <div className={classes.overlay}>
          <div className={classes["overlay-content"]}>{props.children}</div>
        </div>
      )}
    </div>
  );
};

export default Overlay;
