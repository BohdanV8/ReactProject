import React from "react";
import { useMemo } from "react";
import styles from "./Pagination.module.css";
const Pagination = ({ totalPages, page, changePage }) => {
  var pagesArray = useMemo(() => {
    let newPagesArray = [];
    for (let i = 0; i < totalPages; i++) {
      newPagesArray.push(i + 1);
    }
    return newPagesArray;
  }, [totalPages]);
  return (
    <div className={styles.page__wrapper}>
      {pagesArray.map((p) => (
        <span
          onClick={() => {
            changePage(p);
          }}
          key={p}
          className={
            page === p
              ? [styles.page_current, styles.page].join(" ")
              : styles.page
          }
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
