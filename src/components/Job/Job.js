import React from "react";
import { useGlobalContext } from "../../context";
import Row from "../Row/Row";
import "./Job.scss";

export default function Job({ id, name, image, category, area }) {
  const {
    viewportHeight,
    amountRows,
    rowHeight,
    setScrollTop,
    indexStart,
    indexEnd,
    rowsRef,
    state,
  } = useGlobalContext();

  const update = (e) => {
    setScrollTop(e.target.scrollTop);
  };

  return (
    <>
      <div
        className="list"
        onScroll={update}
        style={{ height: viewportHeight }}
      >
        <div
          className="rows"
          style={{ height: amountRows * rowHeight }}
          ref={rowsRef}
        >
          {[...state].slice(indexStart, indexEnd + 1).map((item) => {
            return (
              <Row
                key={item.ID}
                style={{ top: item?.index * rowHeight }}
                item={item}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
