import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import nextId from "react-id-generator";

import Character from "../Character/Character";
import { getCharactersOperation } from "../../redux/operations/getCharactersOPeration";

import css from "./SelectedBook.module.css";

const SelectedBook = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const selectedBook = useSelector((state) => state.selectedBook);
  const charactersInfoList = useSelector((state) => state.charactersList);

  const charactersLinks = selectedBook.povCharacters;

  const onClick = () => {
    history.push("/");
  };

  const fetchCharacterInfo = useCallback(
    (linkItem) => {
      dispatch(getCharactersOperation(linkItem));
    },
    [dispatch]
  );

  useEffect(() => {
    fetchCharacterInfo(charactersLinks);
  }, [fetchCharacterInfo, charactersLinks]);

  return (
    <>
      <button onClick={onClick} className={css.book__goback_btn}>
        Go Back
      </button>
      <div className={css.book}>
        <div className={css.book__description}>
          <h2 className={css.book__name}>{`${selectedBook.name}`}</h2>
          <p className={css.book__author}>
            Author: {`${selectedBook.authors}`}
          </p>
          <span className={css.book__pages}>
            Pages: {`${selectedBook.numberOfPages}`}
          </span>
          <p className={css.book__publisher}>
            Publisher: {`${selectedBook.publisher}`}
          </p>
          <span className={css.book__type}>
            Type: {`${selectedBook.mediaType}`}
          </span>
        </div>
        <div className={css.book__characters}>
          {!!charactersInfoList.length && <h2 className={css.book__characters_title}>Characters</h2>}
          <ul className={css.book__characters_list}>
            {charactersInfoList.map((item) => (
              <li key={nextId()}>
                <Character characterInfo={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SelectedBook;
