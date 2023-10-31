import styles from "./burger-constructor.module.css";
import CurrencyIconLarge from "../../images/currency-icon-36px.svg";
import {
  Button,
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
// import { ingredientType } from "../../utils/prop-types.js";
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
  getAllCart,
  getCartBun,
  getCartList,
} from "../../services/selectors/burger-constructor-selector";

function BurgerConstructor() {
  const isOpen = useSelector(getStatusModal);
  const modalType = useSelector(getTypeModal);
  const fillingList= useSelector(getCartList);
  const bun = useSelector(getCartBun);
  const allCart = useSelector(getAllCart);
  const totolPrice = allCart.reduce((previousValue, item) => {
    return previousValue + item.price;
  }, 0);
  console.log(allCart);

  console.log(allCart);
  console.log(totolPrice);

  const dispatch = useDispatch();

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
          {!(allCart.length > 0) ? (
            <div className={`${styles.start_place} mt-4 mr-16`}>
              <p className={`text_type_main-medium`}>
                {" "}
                Просто кликните на ингредиент и перенесите его сюда{" "}
              </p>
            </div>
          ) : (
            <>
              <li className={`${styles.element} pr-2`}>
                {!bun ? (
                  <div
                    className={`${styles.empty_element} ${styles.empty_element_top}`}
                  >
                    <p className={`text_type_main-default`}>Выберите булочку</p>
                  </div>
                ) : (
                  <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={bun.name}
                    price={bun.price}
                    thumbnail={bun.image}
                  />
                )}
              </li>

              <div className={`${styles.filling} ${styles.scroll} `}>
                {!(fillingList.length > 0) ? (
                  <li className={`${styles.element} pr-2`}>
                    <div className={`${styles.empty_element}`}>
                      <p className={`text_type_main-default`}>
                        Выберите начинку
                      </p>
                    </div>
                  </li>
                ) : (
                  fillingList.map((ingredient, index) => {
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
                  })
                )}
              </div>
              <li className={`${styles.element} pr-2`}>
                {!bun ? (
                  <div
                    className={`${styles.empty_element} ${styles.empty_element_bottom}`}
                  >
                    <p className={`text_type_main-default`}>Выберите булочку</p>
                  </div>
                ) : (
                  <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={bun.name}
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
          onClick={onOrder}
          disabled={!fillingList || !bun}
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

// BurgerConstructor.propTypes = {
//   // onClick: PropTypes.func.isRequired,
//   //burgerFilling: PropTypes.arrayOf(ingredientType).isRequired,
// };

export default BurgerConstructor;
