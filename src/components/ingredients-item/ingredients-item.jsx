// import PropTypes from "prop-types";
// import { ingredientType } from "../../utils/prop-types.js";
import styles from "./ingredients-item.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";
import { getAllCart } from "../../services/selectors/burger-constructor-selector.js";

function IngredientsItem({ ingredient }) {
  const allCart = useSelector(getAllCart);

  const count = allCart.filter((item) => item._id === ingredient._id).length;

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: ingredient,
  });

  return (
    <li className={styles.card} ref={dragRef}>
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
    </li>
  );
}

// IngredientsItem.propTypes = {
//   ingredient: ingredientType.isRequired,
//   onClick: PropTypes.func.isRequired,
// };

export default IngredientsItem;

//onClick={() => onClick(ingredient)}
