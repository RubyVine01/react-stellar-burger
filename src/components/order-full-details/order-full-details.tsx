import styles from "./order-full-details.module.css";

import { FC } from "react";
import { useLocation, useParams } from "react-router-dom";

import { getIngredients } from "../../services/selectors/ingredients-data-selector";
import { useAppSelector } from "../../hooks/hooks";
import { TIngredient } from "../../utils/types";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";

type TOrderItem = {
  ingredients: string[];
  _id: string;
  status: "created" | "pending" | "done";
  number: string;
  createdAt: string;
  updatedAt: string;
  name: string;
};

const order: TOrderItem = {
  ingredients: [
    "643d69a5c3f7b9001cfa093c",
    "643d69a5c3f7b9001cfa093e",
    "643d69a5c3f7b9001cfa0941",
    "643d69a5c3f7b9001cfa0941",
    "643d69a5c3f7b9001cfa093e",
  ],
  _id: "",
  status: "done",
  number: "034535",
  createdAt: "2021-06-23T14:43:22.587Z",
  updatedAt: "2021-06-23T14:43:22.603Z",
  name: "Death Star Starship Main бургер Death Star Starship Main бургер",
};

export type TUniqueOrderItem = TIngredient & {
  count: number;
};

const OrderFullDetails: FC = () => {
  const location = useLocation();
  const { id } = useParams();
  const allIngredients = useAppSelector(getIngredients);
  const background = location.state && location.state.background;

  // const ingredient = useAppSelector((state) => {
  //   if (background && ingredientDetail) {
  //     return getIngredientDetails(state);
  //   } else {
  //     return ingredients.find((item) => item._id === id);
  //   }
  // });

  // if (!ingredient) {
  //   return (
  //     <p className={`text pb-8 text_type_main-medium pt-5`}>
  //       Ингрединт не найден
  //     </p>
  //   );
  // }

  const orderIdArray = order.ingredients;
  const orderIngredients = orderIdArray
    .map((orderIngredientId: string) => {
      return allIngredients.find(
        (ingredient) => ingredient._id === orderIngredientId
      );
    })
    .filter((ingredient) => ingredient !== undefined) as TIngredient[];

  // const map = new Map();

  // orderIngredients.forEach((item) => {
  //   if (map.has(item._id)) {
  //     map.get(item._id).count++;
  //   } else {
  //     map.set(item._id, { ...item, count: 1 });
  //   }
  // });

  // const uniqueOrderIngredients = Array.from(map.values());

  const uniqueIngredients: { [key: string]: TUniqueOrderItem } = {};

  orderIngredients.forEach((item) => {
    if (uniqueIngredients[item._id]) {
      uniqueIngredients[item._id].count++;
    } else {
      uniqueIngredients[item._id] = { ...item, count: 1 } as TUniqueOrderItem;
    }
  });

  const uniqueOrderIngredients = Object.values(uniqueIngredients);

  const totolPrice = orderIngredients.reduce((previousValue, item) => {
    return previousValue + item.price;
  }, 0);

  return (
    <div className={styles.ingredient_details}>
      <p
        className={`text text_type_digits-default ${styles.order_number}`}
      >{`# ${order.number}`}</p>
      <h2 className="text text_type_main-medium mt-5">{order.name}</h2>
      <p
        className="text text_type_main-default mt-2"
        style={
          order?.status === "done" ? { color: "#00CCCC" } : { color: "#FFFFFF" }
        }
      >
        {order.status}
      </p>
      <h2 className="text text_type_main-medium mt-10 mb-6">Состав:</h2>
      <ul className={`${styles.list}  ${styles.scroll}`}>
        {uniqueOrderIngredients.map((ingridient, index) => (
          <li className={styles.list_item} key={index}>
            <div className={styles.img_conteiner}>
              <img
                className={styles.image}
                src={ingridient?.image_mobile}
                alt={ingridient?.name}
              />
            </div>

            <p
              className={`${styles.ingridient_name} text text_type_main-default`}
            >
              {ingridient?.name}
            </p>

            <div className={`${styles.price} ${styles.ingridient_price} `}>
              <span className="text_type_digits-default">
                {ingridient?.type === "bun"
                  ? `${ingridient?.count * 2} x ${ingridient?.price * 2}`
                  : `${ingridient?.count} x ${ingridient?.price}`}
              </span>
              <CurrencyIcon type="primary" />
            </div>
          </li>
        ))}

        <li className={styles.list_item}></li>
      </ul>

      <div className={`${styles.date_and_price}  mt-15`}>
        <FormattedDate
          className="text text_type_main-default text_color_inactive"
          date={new Date(order.createdAt)}
        />
        <div className={styles.price}>
          <span className="text_type_digits-default">{totolPrice}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};

export default OrderFullDetails;
