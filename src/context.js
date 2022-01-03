import React, { useState, useEffect, useRef, useContext } from "react";
import data from "./data";

const AppContext = React.createContext();
const searchableColumns = ["FirstNameLastName", "ID"];
// You could easily add more colors to this array.
const colors = [
  "#9575cd",
  "#7986cb",
  "#f48fb1",
  "#9575cd",
  "#4fc3f7",
  "#abdbe3",
  "#ffec99",
  "#fed2df",
  "#7a4fdf",
  "#feb63d",
  "#f7ea53",
];

const AppProvider = ({ children }) => {
  const [state, setState] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [scrollTop, setScrollTop] = useState(0);
  const rowsRef = useRef(null);
  const viewportHeight = 500;
  let amountRows = state.length;
  const rowHeight = 100;
  const amountRowsBuffered = 10;
  const indexStart = Math.max(
    Math.floor(scrollTop / rowHeight) - amountRowsBuffered,
    0
  );

  const indexEnd = Math.min(
    Math.ceil((scrollTop + viewportHeight) / rowHeight - 1) +
      amountRowsBuffered,
    amountRows - 1
  );

  useEffect(() => {
    function search(data) {
      return data.filter((row) =>
        searchableColumns.some(
          (column) =>
            row[column]
              .toString()
              .toLowerCase()
              .indexOf(searchTerm.toLowerCase()) > -1
        )
      );
    }
    const searchResults = search(data);

    for (let i = 0; i < searchResults.length; i++) {
      searchResults[i].index = i;
      searchResults[i].backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
    }
    setState(searchResults);
  }, [searchTerm]);

  const value = {
    state,
    searchTerm,
    setSearchTerm,
    scrollTop,
    setScrollTop,
    rowsRef,
    viewportHeight,
    amountRows,
    rowHeight,
    indexStart,
    indexEnd,
    amountRowsBuffered,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
