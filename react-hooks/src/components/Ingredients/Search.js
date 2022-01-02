import React, { useEffect, useRef, useState } from "react";

import Card from "../UI/Card";
import "./Search.css";
import useHttp from "../../hooks/http";
import ErrorModal from "../UI/ErrorModal";

const Search = React.memo((props) => {
  console.log("serch");
  const { onFilteredIngredient } = props;
  const [filteredIngredient, setFilteredIngredient] = useState("");
  const inputRef = useRef();
  const { isLoading, data, error, sendRequest, clear } = useHttp();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (filteredIngredient === inputRef.current.value) {
        const query = filteredIngredient.length === 0 ? "" : `?orderBy="title"&equalTo="${filteredIngredient}"`;
        sendRequest(`${process.env.REACT_APP_FIREBASE_DB_URL}/ingredients.json${query}`, "GET");
        // fetch(`${process.env.REACT_APP_FIREBASE_DB_URL}/ingredients.json${query}`)
        //   .then((response) => {
        //     return response.json();
        //   })
        //   .then((responseData) => {
        //     const loadedIngredients = [];
        //     for (const key in responseData) {
        //       loadedIngredients.push({
        //         id: key,
        //         title: responseData[key].title,
        //         amount: responseData[key].amount,
        //       });
        //     }
        //     onFilteredIngredient(loadedIngredients);
        //   })
        //   .catch((error) => {
        //     console.log("ingredients list get request error:", error);
        //   });
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [filteredIngredient, sendRequest, inputRef]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const loadedIngredients = [];
      for (const key in data) {
        loadedIngredients.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount,
        });
      }
      onFilteredIngredient(loadedIngredients);
    }
  }, [data, isLoading, error, onFilteredIngredient]);

  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <span>loading....</span>}
          <input
            ref={inputRef}
            type="text"
            value={filteredIngredient}
            onChange={(event) => {
              setFilteredIngredient(event.target.value);
            }}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
