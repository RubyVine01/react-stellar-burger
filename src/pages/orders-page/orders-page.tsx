import { FC, useEffect } from "react";
import styles from "./orders-page.module.css";
import OrderList from "../../components/order-list/order-list";
import OrdersStatistics from "../../components/orders-statistics/orders-statistics";
import { useAppDispatch } from "../../hooks/hooks";
import { useLocation } from "react-router-dom";
import {
  setWebsocketConnect,
  setWebsocketDisconnect,
} from "../../services/slices/order-slice";
import { wssUrl } from "../../utils/const";

const OrdersPage: FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(setWebsocketConnect(`${wssUrl}/orders/all`));
    return () => {
      dispatch(setWebsocketDisconnect());
    };
  }, [location.pathname]);

  return (
    <main className={styles.content}>
      <p className={`text text_type_main-large mb-4 mt-10  ${styles.title}`}>
        Лента заказов
      </p>
      <div className={styles.orders_content}>
        <OrderList />
        <OrdersStatistics />
      </div>
    </main>
  );
};

export default OrdersPage;
