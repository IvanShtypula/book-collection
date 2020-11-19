import React from 'react';

import css from "./Header.module.css"

const Header = () => {
  return (
    <div className={css.header}> 
      <h1 className={css.header__title}>ICE and FIRE</h1>
    </div>
  );
};

export default Header;