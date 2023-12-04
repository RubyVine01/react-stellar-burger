import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order-item.module.css";

import { FC } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { getIngredients } from "../../services/selectors/ingredients-data-selector";
import { TIngredient } from "../../utils/types";

const date = "2021-06-23T14:43:22.603Z";

type TOrderItem = {
  ingredients: string[];
  _id: string;
  status: "created" | "pending" | "done";
  number: string;
  createdAt: string;
  updatedAt: string;
  name: string;
};

const orderData: TOrderItem = {
  ingredients: [
    "643d69a5c3f7b9001cfa093c",
    "643d69a5c3f7b9001cfa093e",
    "643d69a5c3f7b9001cfa0941",
    "643d69a5c3f7b9001cfa093e",
  ],
  _id: "",
  status: "done",
  number: "034535",
  createdAt: "2023-12-03T14:43:22.587Z",
  updatedAt: "2023-12-03T14:43:22.603Z",
  name: "Death Star Starship Main бургер",
};

const OrderItem: FC = () => {
  const allIngredients = useAppSelector(getIngredients);

  const orderIdArray = orderData.ingredients;

  const orderIngredients = orderIdArray.map((orderIngredientId: string) => {
    return allIngredients.find(
      (ingredient) => ingredient._id === orderIngredientId
    );
  }).filter(ingredient => ingredient !== undefined) as TIngredient[];

  const totolPrice = orderIngredients.reduce((previousValue, item) => {
    return previousValue + item.price;
  }, 0);

  return (
    <section className={`p-6 ${styles.order_item}`}>
      <div className={styles.row}>
        <p className="text text_type_digits-default">{`# ${orderData.number}`}</p>
        <FormattedDate
          className="text text_type_main-default text_color_inactive"
          date={new Date(orderData.createdAt)}
        />
      </div>

      <h2 className="text text_type_main-medium ">{orderData.name}</h2>

      <div className={styles.row}>
        <ul className={styles.img_list}>
          <li className={styles.img_item} >
            <img className={styles.image} src="https://code.s3.yandex.net/react/code/bun-02-mobile.png"/>
          </li>
          <li className={styles.img_item} >
            <img className={styles.image} src="https://code.s3.yandex.net/react/code/bun-02-mobile.png"/>
          </li>
        </ul>
        <div className={styles.price}>
          <span className="text_type_digits-default">{totolPrice}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  );
};

export default OrderItem;
