import styles from "./burger-ingredients.module.css";

import { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

import IngredientsTabs from "../ingredients-tabs/ingredients-tabs.jsx";
import IngredientsSet from "../ingredients-set/ingredients-set.jsx";

import {
  getErrorIngredients,
  getLoadingIngredients,
} from "../../services/selectors/ingredients-data-selector";
import {
  getStatusModal,
  getTypeModal,
} from "../../services/selectors/modal-selector";
import { closeModal } from "../../services/slices/modal-slice";
import { deleteIngredientDetails } from "../../services/slices/ingredient-details-slice";

function BurgerIngredients() {
  const dispatch = useDispatch();

  const isOpen = useSelector(getStatusModal);
  const modalType = useSelector(getTypeModal);

  const isLoading = useSelector(getLoadingIngredients);
  const error = useSelector(getErrorIngredients);

  const [current, setCurrent] = useState("bun");
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

  const onCloseIngredientModal = () => {
    dispatch(closeModal());
    dispatch(deleteIngredientDetails());
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
          {isOpen && modalType === "ingredient" && (
            <Modal title="Детали ингредиента" onClose={onCloseIngredientModal}>
              <IngredientDetails />
            </Modal>
          )}
        </>
      )}
    </section>
  );
}

export default BurgerIngredients;
