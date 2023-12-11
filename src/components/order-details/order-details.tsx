import styles from "./order-details.module.css";

import { FC } from "react";
import { useLocation, useParams } from "react-router-dom";

import { getIngredients } from "../../services/selectors/ingredients-data-selector";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { TIngredient } from "../../utils/types";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { getStatusDisplay } from "../../utils/order-utils";
import { getOrderInfo } from "../../services/selectors/orders-info-selector";
import { fetchOrderDetails } from "../../services/thunks/get-order-details-thunk";
import OrderDetailsIngredient from "../order-details-ingredient/order-details-ingredient";

export type TUniqueOrderItem = TIngredient & {
  count: number;
};

const OrderDetails: FC = () => {
  const location = useLocation();
  const { number } = useParams();
  const orderDetails = useAppSelector(getOrderInfo);
  const allIngredients = useAppSelector(getIngredients);
  const background = location.state && location.state.background;
  const dispatch = useAppDispatch();

  const order = useAppSelector((state) => {
    if (background && orderDetails) {
      return getOrderInfo(state);
    } else {
      // if (number) dispatch(fetchOrderDetails(number));
      // return getOrderInfo(state);
    }
  });

  console.log(order);

  if (!order) {
    return (
      <p className={`text pb-8 text_type_main-medium pt-5`}>Заказ не найден</p>
    );
  }

  const orderIdArray = order?.ingredients;

  const orderIngredients = orderIdArray
    .map((orderIngredientId: string) => {
      return allIngredients.find(
        (ingredient) => ingredient._id === orderIngredientId
      );
    })
    .filter((ingredient) => ingredient !== undefined) as TIngredient[];

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
        {getStatusDisplay(order.status)}
      </p>
      <h2 className="text text_type_main-medium mt-10 mb-6">Состав:</h2>
      <ul className={`${styles.list}  ${styles.scroll}`}>
        {uniqueOrderIngredients.map((ingredient, index) => (
          <OrderDetailsIngredient ingredient={ingredient} index={index} />
        ))}
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

export default OrderDetails;
