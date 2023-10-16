import styles from "./burger-constructor.module.css";
import CurrencyIconLarge from "../../images/currency-icon-36px.svg";
import {
  Button,
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/prop-types.js";

function BurgerConstructor({ onClick, burgerFilling }) {
  return (
    <section className={styles.burger_constructor}>
      <ul className={`${styles.ingredient_list} mr-4`}>
        <li className={`${styles.elenent} pr-4`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={1234}
            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
          />
        </li>
        <div className={`${styles.filling} ${styles.scroll} `}>
          {burgerFilling.map((ingredient) => {
            return (
              <li className={`${styles.elenent} pr-2`} key={ingredient._id}>
                <DragIcon />
                <ConstructorElement
                  text={ingredient.name}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                />
              </li>
            );
          })}
        </div>
        <li className={`${styles.elenent} pr-4`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={1234}
            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
          />
        </li>
      </ul>
      <div className={`${styles.order_price} pr-10`}>
        <span className="text_type_digits-medium">1234</span>
        <img src={CurrencyIconLarge} alt="Валюта" />
      </div>
      <Button htmlType="button" type="primary" size="medium" onClick={onClick}>
        Оформить заказ
      </Button>
    </section>
  );
}

BurgerConstructor.propTypes = {
  onClick: PropTypes.func.isRequired,
  burgerFilling: PropTypes.arrayOf(ingredientType).isRequired,
};

export default BurgerConstructor;
