import styles from "./ingredients-item.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function IngredientsItem({imgLink, itemPrice, itemName }) {
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={imgLink}
      />
      <Counter count={1} size="default" extraClass="m-1" />
      <div className={styles.price} >
        <span className="text_type_digits-default">{itemPrice}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${styles.item_name} text_type_main-default`}>{itemName}</p>
    </div>
  );
}

export default IngredientsItem;
