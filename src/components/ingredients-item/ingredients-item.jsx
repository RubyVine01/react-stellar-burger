import styles from "./ingredients-item.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function IngredientsItem({ imgLink, itemPrice, itemName }) {
  const count = 1;
  return (
    <div className={styles.card}>
      <img className={styles.image} src={imgLink} />
      {count > 0 && (
        <Counter
          count={count}
          size={count < 100 ? "default" : "small"}
          extraClass="m-1"
        />
      )}

      <div className={styles.price}>
        <span className="text_type_digits-default">{itemPrice}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`text text_type_main-default`}>{itemName}</p>
    </div>
  );
}

export default IngredientsItem;
