import styles from "./order-details.module.css";
import OrderAccpetedDone from "../../images/order-accpeted-done.svg";
import PropTypes from "prop-types";
import { orderType } from "../../utils/prop-types.js";

function OrderDetails({ order }) {
  return (
    <div className={`${styles.order_details} pt-4 pb-15`}>
      <span className={`text text_type_digits-large`}>{order.number}</span>
      <p className={`text text_type_main-medium pt-8`}>идентификатор заказа</p>
      <img className="pt-15" src={OrderAccpetedDone} alt="" />
      <p className={`text text_type_main-default pt-15`}>{order.status}</p>
      <p className={`text text_type_main-default text_color_inactive pt-2`}>
        {order.message}
      </p>
    </div>
  );
}

OrderDetails.propTypes = {
  order: PropTypes.arrayOf(orderType).isRequired,
};
export default OrderDetails;
