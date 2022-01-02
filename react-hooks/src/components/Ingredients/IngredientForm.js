import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";
import LoadingIndicator from "../UI/LoadingIndicator";

const IngredientForm = React.memo((props) => {
  console.log("ingredient Form");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const changeNameHandler = (e) => {
    setName(e.target.value);
  };

  const changeAmountHandler = (e) => {
    setAmount(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddIngredient({ title: name, amount: amount });
    setName("");
    setAmount("");
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input value={name} onChange={changeNameHandler} type="text" id="title" />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input value={amount} onChange={changeAmountHandler} type="number" id="amount" />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.loading && <LoadingIndicator />}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
