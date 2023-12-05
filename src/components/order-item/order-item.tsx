import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order-item.module.css";

import { FC } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { getIngredients } from "../../services/selectors/ingredients-data-selector";
import { TIngredient } from "../../utils/types";


type TOrderItemType = {
  ingredients: string[];
  _id: string;
  status: "created" | "pending" | "done";
  number: string;
  createdAt: string;
  updatedAt: string;
  name: string;
};

type TOrderItem = {
  order: TOrderItemType;
};

const OrderItem: FC<TOrderItem> = ({ order }) => {
  const allIngredients = useAppSelector(getIngredients);

  const orderIdArray = order.ingredients;

  const orderIngredients = orderIdArray
    .map((orderIngredientId: string) => {
      return allIngredients.find(
        (ingredient) => ingredient._id === orderIngredientId
      );
    })
    .filter((ingredient) => ingredient !== undefined) as TIngredient[];

  const totolPrice = orderIngredients.reduce((previousValue, item) => {
    return previousValue + item.price;
  }, 0);

  return (
    <section className={`p-6 ${styles.order_item}`}>
      <div className={styles.row}>
        <p className="text text_type_digits-default">{`# ${order.number}`}</p>
        <FormattedDate
          className="text text_type_main-default text_color_inactive"
          date={new Date(order.createdAt)}
        />
      </div>

      <h2 className="text text_type_main-medium mt-6">{order.name}</h2>
      <p
        className="text text_type_main-default mt-2"
        style={
          order?.status === "done" ? { color: "#00CCCC" } : { color: "#FFFFFF" }
        }
      >
        {order.status}
      </p>

      <div className={`${styles.row} ${styles.row_img} mt-6`}>
        <ul className={styles.img_list}>
          {orderIngredients.slice(0, 6).map((ingridient, index) => (
            <li
              className={styles.img_item}
              key={ingridient?._id}
              style={{
                zIndex: 5 - index,
                left: `${index * 50}px`,
              }}
            >
              <img
                className={styles.image}
                src={ingridient?.image_mobile}
                alt={ingridient?.name}
              />
              {orderIngredients.length > 6 && index === 5 ? (
                <div className={styles.overlay}>
                  <span className="text text_type_main-default">{`+${
                    orderIngredients.length - 6
                  }`}</span>
                </div>
              ) : null}
            </li>
          ))}
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
