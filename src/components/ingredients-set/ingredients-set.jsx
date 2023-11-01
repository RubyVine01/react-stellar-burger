// import PropTypes from "prop-types";
// import { ingredientType } from "../../utils/prop-types.js";
import styles from "./ingredients-set.module.css";
import IngredientsItem from "../ingredients-item/ingredients-item.jsx";
import { useSelector } from "react-redux";
import { getIngredients } from "../../services/selectors/ingredients-data-selector.js";

function IngredientsSet({ headline,  type }) {

  const ingredients = useSelector(getIngredients);
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
                
              />
            );
          })}
      </ul>
    </li>
  );
}

// IngredientsSet.propTypes = {
//   ingredients: PropTypes.arrayOf(ingredientType).isRequired,
//   onClick: PropTypes.func.isRequired,
//   headline: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
// };

export default IngredientsSet;
