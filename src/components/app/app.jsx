import styles from "./app.module.css";
import AppHeader from "../app-header/app-header.jsx";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.jsx";
import BurgerConstructor from "../burger-constructor/burger-constructor.jsx";
import { urlIngredientsData } from "../../utils/const.js";
import { request } from "../../utils/api.js";
import React, { useState, useEffect } from "react";

function App() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    request(urlIngredientsData)
      .then(({ success, data }) => {
        if (success) {
          setIngredients(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.content}>
        <BurgerIngredients ingredients={ingredients} />
        <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;
