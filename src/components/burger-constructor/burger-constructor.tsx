import styles from "./burger-constructor.module.css";

import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";

import CurrencyIconLarge from "../../images/currency-icon-36px.svg";
import {
  Button,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import FillingItem from "../filling-item/filling-item";

import {
  getStatusModal,
  getTypeModal,
} from "../../services/selectors/modal-selector";
import {
  getAllCart,
  getCartBun,
  getCartList,
} from "../../services/selectors/burger-constructor-selector";
import {
  addToCart,
  clearCart,
} from "../../services/slices/burger-constructor-slice";
import { closeModal, openModal } from "../../services/slices/modal-slice";
import { fetchOrder } from "../../services/thunks/order-details-thunk";
import { getUser } from "../../services/selectors/user-selector";
import { TFillingItem, TIngredient, TOrder } from "../../utils/types";

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isOpen = useSelector(getStatusModal) as boolean;
  const modalType = useSelector<"order" | "ingredient">(getTypeModal);
  const fillingList = useSelector(getCartList) as Array<TFillingItem>;
  const bun = useSelector(getCartBun) as TFillingItem;
  const allCart = useSelector(getAllCart) as Array<TFillingItem>;
  const user = useSelector<TOrder | null>(getUser);

  const ingrList = allCart.map((item) => item._id);
  const totolPrice = allCart.reduce((previousValue, item) => {
    return previousValue + item.price;
  }, 0);

  const [, dropRef] = useDrop<TIngredient, void, void>({
    accept: "ingredient",
    drop(ingredient) {
      const uid = uuid();
      dispatch(addToCart({ ...ingredient, uid }));
    },
  });

  const handleOpenOrderModal = () => {
    if (user) {
      dispatch(openModal("order"));
      // dispatch(fetchOrder(ingrList));
      dispatch(clearCart());
    } else {
      navigate("/login");
    }
  };

  const onCloseOrderModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <section className={styles.burger_constructor}>
        <ul className={`${styles.ingredient_list} mr-4`} ref={dropRef}>
          {!(allCart.length > 0) ? (
            <div className={`${styles.start_place} mt-4 mr-16`}>
              <p className={`text_type_main-medium ml-2 mr-2`}>
                {" "}
                Просто кликни на ингредиент и перенеси его сюда{" "}
              </p>
            </div>
          ) : (
            <>
              <li className={`${styles.element} pr-2`}>
                {!bun ? (
                  <div
                    className={`${styles.empty_element} ${styles.empty_element_top}`}
                  >
                    <p className={`text_type_main-default`}>Выбери булочку</p>
                  </div>
                ) : (
                  <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${bun.name} (верх)`}
                    price={bun.price}
                    thumbnail={bun.image}
                  />
                )}
              </li>

              <div className={`${styles.filling} ${styles.scroll} `}>
                {!(fillingList.length > 0) ? (
                  <li className={`${styles.element} pr-2`}>
                    <div className={`${styles.empty_element}`}>
                      <p className={`text_type_main-default`}>Выбери начинку</p>
                    </div>
                  </li>
                ) : (
                  fillingList.map((ingredient, index) => {
                    return (
                      <FillingItem
                        key={ingredient.uid}
                        ingredient={ingredient}
                        index={index}
                      />
                    );
                  })
                )}
              </div>
              <li className={`${styles.element} pr-2`}>
                {!bun ? (
                  <div
                    className={`${styles.empty_element} ${styles.empty_element_bottom}`}
                  >
                    <p className={`text_type_main-default`}>Выбери булочку</p>
                  </div>
                ) : (
                  <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${bun.name} (низ)`}
                    price={bun.price}
                    thumbnail={bun.image}
                  />
                )}
              </li>
            </>
          )}
        </ul>

        <div className={`${styles.order_price} pr-10`}>
          <span className="text_type_digits-medium">{totolPrice}</span>
          <img src={CurrencyIconLarge} alt="Валюта" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="medium"
          onClick={handleOpenOrderModal}
          disabled={!fillingList.length || !bun}
        >
          Оформить заказ
        </Button>
      </section>

      {isOpen && modalType === "order" && (
        <Modal title="" onClose={onCloseOrderModal}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
};

export default BurgerConstructor;
