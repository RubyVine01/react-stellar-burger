import styles from "./burger-ingredients.module.css";

import { FC, useCallback, useRef, useState } from "react";

import IngredientsTabs from "../ingredients-tabs/ingredients-tabs";
import IngredientsSet from "../ingredients-set/ingredients-set";

import {
  getErrorIngredients,
  getLoadingIngredients,
} from "../../services/selectors/ingredients-data-selector";
import { useAppSelector } from "../../hooks/hooks";

type THandleScroll = () => void;
type TCurrentValue = "bun" | "sauce" | "main";

const BurgerIngredients: FC = () => {
  const isLoading = useAppSelector(getLoadingIngredients);
  const error = useAppSelector(getErrorIngredients);

  const [current, setCurrent] = useState<TCurrentValue>("bun");
  const bunRef = useRef<HTMLHeadingElement>(null);
  const sauceRef = useRef<HTMLHeadingElement>(null);
  const mainRef = useRef<HTMLHeadingElement>(null);

  const scrollToRef = useCallback((ref: "bun" | "sauce" | "main") => {
    if (ref === "bun" && bunRef.current) {
      bunRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (ref === "sauce" && sauceRef.current) {
      sauceRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (ref === "main" && mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleScroll: THandleScroll = () => {
    const result = [
      {
        name: "bun",
        coords: bunRef.current?.getBoundingClientRect().top,
      },
      {
        name: "sauce",
        coords: sauceRef.current?.getBoundingClientRect().top,
      },
      {
        name: "main",
        coords: mainRef.current?.getBoundingClientRect().top,
      },
    ]
      .filter((el) => el.coords && el.coords > 0)
      .sort((a, b) => Number(a.coords) - Number(b.coords));

    if (result.length) {
      setCurrent(result[0].name as TCurrentValue);
    }
  };

  return (
    <section className={styles.section}>
      <h1 className={`text text_type_main-large pt-10`}>Соберите бургер</h1>
      {isLoading ? (
        <p className={`text text_type_main-default mt-10`}>
          Выполняется загрузка ингредиентов...
        </p>
      ) : error ? (
        <p className={`text text_type_main-default mt-10`}>
          При загрузке ингредиентов произошла ошибка, попробуй перезагрузить
          страницу или обратись в службу поддержки.
        </p>
      ) : (
        <>
          <IngredientsTabs current={current} scrollToRef={scrollToRef} />
          <ul
            className={`${styles.ingredients} ${styles.scroll} mt-10`} 
            onScroll={handleScroll}
          >
            <IngredientsSet headline="Булки" type="bun" persRef={bunRef} />
            <IngredientsSet headline="Соусы" type="sauce" persRef={sauceRef} />
            <IngredientsSet headline="Начинки" type="main" persRef={mainRef} />
          </ul>
        </>
      )}
    </section>
  );
};

export default BurgerIngredients;
