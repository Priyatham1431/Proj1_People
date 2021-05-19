import React from "react";
import "././search.styles.css";
const Search = props => {
  return (
    <>
      <div className="container">
        <center>
          <input type="text" name="search" placeholder="Search" onChange={props.onSearch}/>
        </center>
      </div>
    </>
  );
};

export default Search;
