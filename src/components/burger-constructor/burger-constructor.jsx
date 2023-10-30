import styles from "./burger-constructor.module.css";
import CurrencyIconLarge from "../../images/currency-icon-36px.svg";
import {
  Button,
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/prop-types.js";
import { useDispatch, useSelector } from "react-redux";
import {
  getStatusModal,
  getTypeModal,
} from "../../services/selectors/modal-selector";
import { closeModal, openModal } from "../../services/reducers/modal-slice";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { orderData } from "../../utils/data";
import {
  getCartBun,
  getCartList,
} from "../../services/selectors/burger-constructor-selector";

function BurgerConstructor() {
  const isOpen = useSelector(getStatusModal);
  const modalType = useSelector(getTypeModal);

  const dispatch = useDispatch();

  const listIngr = useSelector(getCartList);
  const bun = useSelector(getCartBun);

  const onOrder = () => {
    dispatch(openModal("order"));
  };

  const onClose = () => {
    dispatch(closeModal);
  };

  return (
    <>
      <section className={styles.burger_constructor}>
        <ul className={`${styles.ingredient_list} mr-4`}>
          <li className={`${styles.elenent} pr-4`}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={bun.name}
              price={bun.price}
              thumbnail={bun.image}
            />
          </li>
          <div className={`${styles.filling} ${styles.scroll} `}>
            {listIngr.map((ingredient, index) => {
              console.log(index);
              return (
                <li className={`${styles.element} pr-2`} key={index}>
                  <DragIcon />
                  <ConstructorElement
                    text={ingredient.name}
                    price={ingredient.price}
                    thumbnail={ingredient.image}
                  />
                </li>
              );
            })}
          </div>
          <li className={`${styles.elenent} pr-4`}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text="Краторная булка N-200i (верх)"
              price={1234}
              thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
            />
          </li>
        </ul>
        <div className={`${styles.order_price} pr-10`}>
          <span className="text_type_digits-medium">1234</span>
          <img src={CurrencyIconLarge} alt="Валюта" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="medium"
          onClick={onOrder}
        >
          Оформить заказ
        </Button>
      </section>

      {isOpen && modalType === "order" && (
        <Modal title="" handleClose={onClose}>
          <OrderDetails order={orderData} />
        </Modal>
      )}

      {/* {orderModal && (
        <Modal onClose={closeModal}>
          <OrderDetails order={orderData} />
        </Modal>
      )} */}
    </>
  );
}

BurgerConstructor.propTypes = {
  // onClick: PropTypes.func.isRequired,
  burgerFilling: PropTypes.arrayOf(ingredientType).isRequired,
};

export default BurgerConstructor;
