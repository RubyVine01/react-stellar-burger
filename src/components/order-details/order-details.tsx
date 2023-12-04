import styles from "./order-details.module.css";
import { FC } from "react";
import OrderAccpetedDone from "../../images/order-accpeted-done.svg";

import {
  getError,
  getIsloading,
  getOrder,
} from "../../services/selectors/order-details-selector";
import { useAppSelector } from "../../hooks/hooks";

const OrderDetails: FC = () => {
  const order = useAppSelector(getOrder);
  const orderError = useAppSelector(getError);
  const orderIsloading = useAppSelector(getIsloading);
  return (
    <div className={`${styles.order_details} pt-4 pb-15`}>
      {orderIsloading === true ? (
        <p className={`text text_type_main-large pt-10`}>
          Заказ обрабатывается...
        </p>
      ) : orderError === true ? (
        <p className={`text text_type_main-large pt-10`}>
          Ошибка при создании заказа, оформите заказ позже или обратитесь в
          службу поддержки
        </p>
      ) : (
        <>
          <span className={`text text_type_digits-large`}>{order?.number}</span>
          <p className={`text text_type_main-medium pt-8`}>
            идентификатор заказа
          </p>
          <img
            className="pt-15"
            src={OrderAccpetedDone}
            alt="Значек успешно оформленного заказа"
          />
          <p className={`text text_type_main-default pt-15`}>
            Ваш заказ начали готовить
          </p>
        </>
      )}
    </div>
  );
};

export default OrderDetails;
