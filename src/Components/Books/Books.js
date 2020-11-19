import React from "react";
import { useSelector } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import BooksItem from "../BooksItem/BooksItem";

import css from "./Books.module.css";
import ListTransition from "./ListTransition.module.css";

const Books = () => {
  const booksToRender = useSelector((state) => state.books);
  const isBooksRender = !!booksToRender;

  return (
    <div>
      <TransitionGroup component="ul" className={css.booksList}>
        {booksToRender.map((item) => (
          <CSSTransition
            in={isBooksRender}
            key={item.isbn}
            timeout={250}
            classNames={ListTransition}
          >
            <BooksItem item={item} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default Books;
