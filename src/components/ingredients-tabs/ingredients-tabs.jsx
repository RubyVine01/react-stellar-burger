import React, { useState } from "react";
import styles from "./ingredients-tabs.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

function IngredientsTabs() {
  const [current, setCurrent] = React.useState("Булки");
  return (
    <div className={`${styles.tabs} pt-5`}>
      <Tab value="Булки" active={current === "Булки"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="Соусы" active={current === "Соусы"} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="Начинки" active={current === "Начинки"} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
}

export default IngredientsTabs;
