import { FC, useEffect } from "react";
import styles from "./orders-page.module.css";
import OrderList from "../../components/order-list/order-list";
import OrdersStatistics from "../../components/orders-statistics/orders-statistics";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useLocation } from "react-router-dom";
import {
  setWebsocketConnect,
  setWebsocketDisconnect,
} from "../../services/slices/orders-slice/orders-slice";
import { wssUrl } from "../../utils/const";
import { getOrders } from "../../services/selectors/orders-selector";

const OrdersPage: FC = () => {
  const orders = useAppSelector(getOrders);
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
      {!orders ? (
        <p className={`text text_type_main-medium mt-2}`}>Загрузка данных...</p>
      ) : (
        <div className={styles.orders_content}>
          <OrderList />
          <OrdersStatistics />
        </div>
      )}
    </main>
  );
};

export default OrdersPage;
