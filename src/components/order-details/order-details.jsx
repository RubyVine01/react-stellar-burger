import styles from "./order-details.module.css";
import OrderAccpetedDone from "../../images/order-accpeted-done.svg";
import PropTypes from "prop-types";

function OrderDetails({ order }) {
  return (
    <div className={`${styles.order_details} pt-4 pb-15`}>
      <span className={`text text_type_digits-large`}>{order.number}</span>
      <p className={`text text_type_main-medium pt-8`}>идентификатор заказа</p>
      <img
        className="pt-15"
        src={OrderAccpetedDone}
        alt="Значек успешно оформленного заказа"
      />
      <p className={`text text_type_main-default pt-15`}>{order.status}</p>
      <p className={`text text_type_main-default text_color_inactive pt-2`}>
        {order.message}
      </p>
    </div>
  );
}

// OrderDetails.propTypes = {
//   order: PropTypes.shape({
//     number: PropTypes.string.isRequired,
//     message: PropTypes.string.isRequired,
//     status: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default OrderDetails;
