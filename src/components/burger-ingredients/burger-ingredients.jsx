import styles from "./burger-ingredients.module.css";
import IngredientsTabs from "../ingredients-tabs/ingredients-tabs.jsx";
import IngredientsSet from "../ingredients-set/ingredients-set.jsx";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDrop } from "react-dnd";

function BurgerIngredients() {
 

  const containerRef = useRef();
  const bunRef = useRef();
  const sauceRef = useRef();
  const mainRef = useRef();

  const [current, setCurrent] = useState("bun");

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












  return (
    <section className={styles.section}>
      <h1 className={`text text_type_main-large pt-10`}>Соберите бургер</h1>
      <IngredientsTabs
      scrollToRef={scrollToRef}
      current={current}
      />
      <ul
        className={`${styles.ingredients} ${styles.scroll} mt-10`}
        ref={containerRef}
      >
        <IngredientsSet
          headline="Булки"
          type="bun"
          ref={bunRef}
        />
        <IngredientsSet
          headline="Соусы"
          type="sauce"
          ref={sauceRef}
        />
        <IngredientsSet
          headline="Начинки"
          type="main"
          ref={mainRef}
        />
      </ul>
    </section>
  );
}

export default BurgerIngredients;


// const scrollRef = useRef();

// const handleScroll = () => {
//   console.log("scroll");
// };

// useEffect(() => {
//   scrollRef.current.addEventListener("scroll", handleScroll);
// }, []);



  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const activeIngredientSection = entries[0];

  //       if (!activeIngredientSection.isIntersecting) {
  //         return;
  //       }

  //       if (activeIngredientSection.target === bunRef.current) {
  //         setCurrent("bun");
  //       } else if (activeIngredientSection.target === sauceRef.current) {
  //         setCurrent("sauce");
  //       } else if (activeIngredientSection.target === mainRef.current) {
  //         setCurrent("main");
  //       }
  //     },
  //     {
  //       root: containerRef.current,
  //       rootMargin: "0px 0px -90% 0px",
  //     }
  //   );
  //   observer.observe(bunRef.current);
  //   observer.observe(sauceRef.current);
  //   observer.observe(mainRef.current);
  // }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const containerOffset = containerRef.current.getBoundingClientRect();
  //     const bunOffset = bunRef.current.getBoundingClientRect();
  //     const sauceOffset = sauceRef.current.getBoundingClientRect();
  //     const mainOffset = mainRef.current.getBoundingClientRect();

  //     const containerTop = containerOffset.top;

  //     if (containerTop >= bunOffset.top && containerTop < sauceOffset.top) {
  //       setCurrent("bun");
  //     } else if (containerTop >= sauceOffset.top && containerTop < mainOffset.top) {
  //       setCurrent("sauce");
  //     } else if (containerTop >= mainOffset.top) {
  //       setCurrent("main");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

