import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import css from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={css.spinner}>
      <CircularProgress />
    </div>
  );
};

export default Spinner;
