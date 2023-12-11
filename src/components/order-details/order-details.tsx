import styles from "./order-details.module.css";

import { FC, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { TIngredient } from "../../utils/types";

import OrderDetailsIngredient from "../order-details-ingredient/order-details-ingredient";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { getStatusDisplay } from "../../utils/order-utils";
import {
  getOrderInfo,
  getTotalPrice,
  getUniqueOrderIngredients,
} from "../../services/selectors/orders-info-selector";
import { fetchOrderDetails } from "../../services/thunks/get-order-details-thunk";

export type TUniqueOrderItem = TIngredient & {
  count: number;
};

const OrderDetails: FC = () => {
  const location = useLocation();
  const { number } = useParams();

  const background = location.state && location.state.background;
  const dispatch = useAppDispatch();

  const order = useAppSelector(getOrderInfo);

  const uniqueOrderIngredients = useAppSelector(getUniqueOrderIngredients);
  const totolPrice = useAppSelector(getTotalPrice);

  useEffect(() => {
    if (number && !background) {
      dispatch(fetchOrderDetails(number));
    }
  }, [number, background, dispatch]);

  if (!order) {
    return (
      <p className={`text pb-8 text_type_main-medium pt-5`}>Поиск заказа</p>
    );
  }

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
          <OrderDetailsIngredient ingredient={ingredient} key={index} />
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
