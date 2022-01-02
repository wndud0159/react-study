import React, { useCallback, useEffect, useMemo, useReducer } from "react";
import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";
import ErrorModal from "../UI/ErrorModal";
import useHttp from "../../hooks/http";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter((ing) => ing.id !== action.id);
    default:
      return new Error("Should not get there");
  }
};

function Ingredients() {
  const [ingredients, dispatch] = useReducer(ingredientReducer, []);
  const { isLoading, error, data, sendRequest, reqExtra, reqIdentifier, clear } = useHttp();
  // const [ingredients, setIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  useEffect(() => {
    console.log("effect");
    // fetch(`${process.env.REACT_APP_FIREBASE_DB_URL}/ingredients.json`, {})
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
    //     // setIngredients(loadedIngredients);
    //     dispatch({ type: "SET", ingredients: loadedIngredients });
    //   })
    //   .catch((error) => {
    //     console.log("ingredients list get request error:", error);
    //   });
    if (!isLoading && !error && reqIdentifier === "REMOVE_INGREDIENT") {
      dispatch({ type: "DELETE", id: reqExtra });
    } else if (!isLoading && !error && reqIdentifier === "ADD_INGREDIENT") {
      dispatch({ type: "ADD", ingredient: { id: data.name, ...reqExtra } });
    }
  }, [data, reqExtra, reqIdentifier, isLoading, error]);

  const addIngredientHandler = useCallback(
    (requestData) => {
      // setIsLoading(true);
      // dispatchHttp({ type: "SEND" });
      // fetch(`${process.env.REACT_APP_FIREBASE_DB_URL}/ingredients.json`, {
      //   method: "POST",
      //   body: JSON.stringify(data),
      //   headers: { "Content-Type": "application/json" },
      // })
      //   .then((response) => {
      //     // setIsLoading(false);
      //     dispatchHttp({ type: "RESPONSE" });
      //     return response.json();
      //   })
      //   .then((responseData) => {
      //     console.log("response data: ", responseData);
      //     // setIngredients((prev) => [...prev, { id: responseData.name, ...data }]);
      //     dispatch({ type: "ADD", ingredient: { id: responseData.name, ...data } });
      //   })
      //   .catch((error) => {
      //     console.log("Create post error: ", error);
      //   });
      sendRequest(`${process.env.REACT_APP_FIREBASE_DB_URL}/ingredients.json`, "POST", JSON.stringify(requestData), requestData, "ADD_INGREDIENT");
    },
    [sendRequest]
  );

  const removeIngredientHandler = useCallback(
    (key) => {
      // setIsLoading(true);
      // dispatchHttp({ type: "SEND" });
      sendRequest(`${process.env.REACT_APP_FIREBASE_DB_URL}/ingredients/${key}.json`, "DELETE", null, key, "REMOVE_INGREDIENT");
    },
    [sendRequest]
  );

  const filteredIngredientHandler = useCallback((data) => {
    // setIngredients(data);
    console.log("filter fn");
    dispatch({ type: "SET", ingredients: data });
  }, []);

  // const clearError = useCallback(() => {
  //   // setError(null);
  //   // dispatchHttp({ type: "CLEAR" });
  // }, []);

  const ingredientList = useMemo(() => {
    return <IngredientList ingredients={ingredients} onRemoveItem={removeIngredientHandler} />;
  }, [ingredients, removeIngredientHandler]);

  // if (ingredients === []) {
  //   console.log("return");
  //   return;
  // }

  return (
    <div className="App">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}

      <IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading} />

      <section>
        <Search onFilteredIngredient={filteredIngredientHandler} />
        {ingredientList}
      </section>
    </div>
  );
}

export default Ingredients;
