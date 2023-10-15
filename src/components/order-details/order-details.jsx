import styles from "./order-details.module.css";
import OrderAccpetedDone from "../../images/order-accpeted-done.svg";

function OrderDetails() {
  const orderNumb = "034536";
  return (
    <div className={`${styles.order_details} pt-4 pb-15`}>
      <span className={`text text_type_digits-large`}>{orderNumb}</span>
      <p className={`text text_type_main-medium pt-8`}>идентификатор заказа</p>
      <img className="pt-15" src={OrderAccpetedDone} alt="" />
      <p className={`text text_type_main-default pt-15`}>
        Ваш заказ начали готовить
      </p>
      <p className={`text text_type_main-default text_color_inactive pt-2`}>
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

export default OrderDetails;
