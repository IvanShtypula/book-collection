import React from "react";

import css from "./Character.module.css"

const Character = ({ characterInfo }) => { 
  return <div className={css.character}>{`${characterInfo.name}`}</div>;
};

export default Character;
