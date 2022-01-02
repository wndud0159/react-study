import { useCallback, useReducer } from "react";

const initialState = {
  loading: false,
  error: null,
  data: null,
  extra: null,
  identifier: null,
};

const httpReducer = (currentHttpState, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null, data: null, extra: null, identifier: action.identifier };
    case "RESPONSE":
      return { ...currentHttpState, loading: false, data: action.responseData, extra: action.extra };
    case "ERROR":
      return { loading: false, error: action.errorData };
    case "CLEAR":
      return initialState;
    default:
      throw new Error("Should not be reached");
  }
};
const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, initialState);

  const clear = useCallback(() => {
    dispatchHttp({ type: "CLEAR" });
  }, []);

  const sendRequest = useCallback((url, method, body, reqExtra, reqIdentifier) => {
    dispatchHttp({ type: "SEND", identifier: reqIdentifier });
    fetch(url, {
      method: method,
      body: body,
      headers: { "Content-type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        // setIsLoading(false);
        // setIngredients((prev) => ingredients.filter((v) => v.id !== key));
        // dispatch({ type: "DELETE", id: key });
        dispatchHttp({ type: "RESPONSE", responseData: responseData, extra: reqExtra });
      })
      .catch((error) => {
        dispatchHttp({ type: "ERROR", errorData: "Someting went wrong!" });
        // setError("Someting went wrong!");
        // setIsLoading(false);
      });
  }, []);

  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    sendRequest: sendRequest,
    reqExtra: httpState.extra,
    reqIdentifier: httpState.identifier,
    clear: clear,
  };
};

export default useHttp;