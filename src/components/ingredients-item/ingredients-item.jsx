import styles from "./ingredients-item.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function IngredientsItem({ onClick, ingredient }) {
  const count = 1;

  return (
    <div
      className={styles.card}
      onClick={(event) => onClick(event, ingredient)}
    >
      <img
        className={styles.image}
        src={ingredient.image_large}
        alt={ingredient.name}
      />
      {count > 0 && (
        <Counter
          count={count}
          size={count < 100 ? "default" : "small"}
          extraClass="m-1"
        />
      )}

      <div className={styles.price}>
        <span className="text_type_digits-default">{ingredient.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`text text_type_main-default`}>{ingredient.name}</p>
    </div>
  );
}

export default IngredientsItem;
