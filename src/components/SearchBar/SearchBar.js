import React, { useRef } from "react";
import { debounce } from "../../utils/utils";
import { useGlobalContext } from "../../context";
import { useHistory } from "react-router-dom";
import "./SearchBar.scss";

export default function SearchBar() {
  const history = useHistory();

  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  function searchJob() {
    history.push(`/`);
    setSearchTerm(searchValue.current.value);
  }

  const betterSearch = debounce(searchJob, 300);

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="section-search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            type="search"
            name="name"
            id="name"
            ref={searchValue}
            onChange={betterSearch}
            placeholder="  Enter the user's ID or name..."
          />
        </div>
      </form>
    </section>
  );
}
