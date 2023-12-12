import styles from "./order-item.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { FC, useMemo } from "react";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { TIngredient, TOrderItem } from "../../utils/types";
import { getStatusDisplay } from "../../utils/order-utils";
import { getIngredients } from "../../services/selectors/ingredients-data-selector";
import { setOrder } from "../../services/slices/order-info-slice";

type TOrder = {
  order: TOrderItem;
};

const OrderItem: FC<TOrder> = ({ order }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const allIngredients = useAppSelector(getIngredients);

  const orderIdArray = order.ingredients;

  const orderIngredients = orderIdArray
    .map((orderIngredientId: string) => {
      return allIngredients.find(
        (ingredient) => ingredient._id === orderIngredientId
      );
    })
    .filter((ingredient) => ingredient !== undefined) as TIngredient[];

  const totalPrice = useMemo(() => {
    return orderIngredients.reduce((sum, item) => sum + item.price, 0);
  }, [orderIngredients]);

  const onOpen = () => {
    dispatch(setOrder(order));
    const newPath = location.pathname.includes("/profile")
      ? `/profile/orders-history/${order.number}`
      : `/orders/${order.number}`;

    navigate(newPath, { state: { background: location } });
  };

  return (
    <section className={`p-6 ${styles.order_item}`} onClick={onOpen}>
      <div className={styles.row}>
        <p className="text text_type_digits-default">{`# ${order.number}`}</p>
        <FormattedDate
          className="text text_type_main-default text_color_inactive"
          date={new Date(order.createdAt)}
        />
      </div>
      <h2 className="text text_type_main-medium mt-6">{order.name}</h2>
      <p
        className="text text_type_main-default mt-2"
        style={
          order?.status === "done" ? { color: "#00CCCC" } : { color: "#FFFFFF" }
        }
      >
        {getStatusDisplay(order.status)}
      </p>

      <div className={`${styles.row} ${styles.row_img} mt-6`}>
        <ul className={styles.img_list}>
          {orderIngredients.slice(0, 6).map((ingredient, index) => (
            <li
              className={styles.img_item}
              key={index}
              style={{
                zIndex: 5 - index,
                left: `${index * 50}px`,
              }}
            >
              <img
                className={styles.image}
                src={ingredient?.image_mobile}
                alt={ingredient?.name}
              />
              {orderIngredients.length > 6 && index === 5 && (
                <div className={styles.overlay}>
                  <span className="text text_type_main-default">{`+${
                    orderIngredients.length - 6
                  }`}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className={styles.price}>
          <span className="text_type_digits-default">{totalPrice}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  );
};

export default OrderItem;
