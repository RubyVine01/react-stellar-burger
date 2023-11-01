import React, { useState } from "react";
import styles from "./ingredients-tabs.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

function IngredientsTabs({ current, scrollToRef }) {
//  const [current, setCurrent] = React.useState("Булки");
console.log("IngredientsTabs render");

  return (
    <div className={`${styles.tabs} pt-5`}>
      <Tab
        value="Булки"
        active={current === "bun"}
        onClick={() => scrollToRef("bun")}
      >
        Булки
      </Tab>
      <Tab
        value="Соусы"
        active={current === "sauce"}
        onClick={() => scrollToRef("sauce")}
      >
        Соусы
      </Tab>
      <Tab
        value="Начинки"
        active={current === "main"}
        onClick={() => scrollToRef("main")}
      >
        Начинки
      </Tab>
    </div>
  );
}

export default IngredientsTabs;
