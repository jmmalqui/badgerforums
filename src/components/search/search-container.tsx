import "./search-container.css";
import Recipe from "../recipe/recipe";
import badgerPost from "../../assets/recipe-images/badger.jpg";
import { data } from "../data";
import { useState } from "react";

function SearchContainer() {
  const [search, setSearch] = useState("");
  return (
    <div className="search-container">
      <div className="searchbox-container">
        <div className="searchtext">Search a Topic! :</div>
        <input
          type="text"
          placeholder=" 'badger' 'alien' 'funny' "
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      {search
        ? data
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.title.toLowerCase().includes(search);
            })
            .map((item) => (
              <Recipe
                title={item.title}
                text={item.text}
                image={item.image}
              ></Recipe>
            ))
        : data.map((item) => (
            <Recipe
              title={item.title}
              text={item.text}
              image={item.image}
            ></Recipe>
          ))}
    </div>
  );
}

export default SearchContainer;
