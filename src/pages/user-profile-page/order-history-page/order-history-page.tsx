import { FC, useEffect } from "react";
import styles from "./order-history-page.module.css";
import OrderList from "../../../components/order-list/order-list";
import {
  setWebsocketConnect,
  setWebsocketDisconnect,
} from "../../../services/slices/orders-slice";
import { useAppDispatch } from "../../../hooks/hooks";
import { useLocation } from "react-router-dom";
import { wssUrl } from "../../../utils/const";

const OrderHistory: FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const getAccessToken = () => {
    const fullToken = localStorage.getItem("accessToken");
    return fullToken ? fullToken.split(" ")[1] : null;
  };

  const accessToken = getAccessToken();

  useEffect(() => {
    dispatch(setWebsocketConnect(`${wssUrl}/orders?token=${accessToken}`));
    return () => {
      dispatch(setWebsocketDisconnect());
    };
  }, [location.pathname]);

  return (
    <div className={`${styles.content} pt-10`}>
      <OrderList />
    </div>
  );
};

export default OrderHistory;
