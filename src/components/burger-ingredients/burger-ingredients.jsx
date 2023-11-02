import styles from "./burger-ingredients.module.css";
import IngredientsTabs from "../ingredients-tabs/ingredients-tabs.jsx";
import IngredientsSet from "../ingredients-set/ingredients-set.jsx";
import { useCallback, useRef, useState } from "react";

function BurgerIngredients() {
  const [current, setCurrent] = useState("bun");
  //const containerRef = useRef();
  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

  const scrollToRef = useCallback((ref) => {
  if (ref === "bun") {
    bunRef.current.scrollIntoView({ behavior: "smooth" });
  }
  if (ref === "sauce") {
    sauceRef.current.scrollIntoView({ behavior: "smooth" });
  }
  if (ref === "main") {
    mainRef.current.scrollIntoView({ behavior: "smooth" });
  }
}, []);

  const handleScroll = () => {
    const result = [
      {
        name: "bun",
        coords: bunRef.current.getBoundingClientRect().top,
      },
      {
        name: "sauce",
        coords: sauceRef.current.getBoundingClientRect().top,
      },
      {
        name: "main",
        coords: mainRef.current.getBoundingClientRect().top,
      },
    ]
      .filter((el) => el.coords > 0)
      .sort((a, b) => a.coords - b.coords);

    if (result.length) {
      setCurrent(result[0].name);
    }
  };

  return (
    <section className={styles.section}>
      <h1 className={`text text_type_main-large pt-10`}>Соберите бургер</h1>
      <IngredientsTabs current={current} scrollToRef={scrollToRef}/>
      <ul
        className={`${styles.ingredients} ${styles.scroll} mt-10`}
        onScroll={handleScroll}
        // ref={containerRef}
      >
        <IngredientsSet headline="Булки" type="bun" persRef={bunRef} />
        <IngredientsSet headline="Соусы" type="sauce" persRef={sauceRef} />
        <IngredientsSet headline="Начинки" type="main" persRef={mainRef} />
      </ul>
    </section>
  );
}

export default BurgerIngredients;


