import PropTypes from "prop-types";
import { ingredientType } from "../../utils/prop-types.js";
import styles from "./ingredients-set.module.css";
import IngredientsItem from "../ingredients-item/ingredients-item.jsx";

function IngredientsSet({ headline, ingredients, onClick, type }) {
  return (
    <li>
      <h2 className={`text text_type_main-medium pb-6`}>{headline}</h2>
      <ul className={styles.item_box}>
        {ingredients
          .filter((item) => {
            return item.type === type;
          })
          .map((ingredient) => {
            return (
              <IngredientsItem
                key={ingredient._id}
                ingredient={ingredient}
                onClick={onClick}
              />
            );
          })}
      </ul>
    </li>
  );
}

IngredientsSet.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType).isRequired,
  onClick: PropTypes.func.isRequired,
  headline: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default IngredientsSet;
