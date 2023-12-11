import styles from "./order-details-ingredient.module.css";

import { FC } from "react";

import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { TIngredient } from "../../utils/types";

export type TUniqueOrderItem = TIngredient & {
  count: number;
};

type TIngredientsItemProps = {
  ingredient: TUniqueOrderItem;
  index: number;
};

const OrderDetailsIngredient: FC<TIngredientsItemProps> = ({
  ingredient,
  index,
}) => {
  return (
    <li className={styles.list_item} key={index}>
      <div className={styles.img_conteiner}>
        <img
          className={styles.image}
          src={ingredient?.image_mobile}
          alt={ingredient?.name}
        />
      </div>

      <p className={`${styles.ingredient_name} text text_type_main-default`}>
        {ingredient?.name}
      </p>

      <div className={`${styles.price} ${styles.ingredient_price} `}>
        <span className="text_type_digits-default">
          {ingredient?.count} x {ingredient?.price}
        </span>
        <CurrencyIcon type="primary" />
      </div>
    </li>
  );
};

export default OrderDetailsIngredient;
