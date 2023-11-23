import styles from "./ingredients-set.module.css";

import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import IngredientsItem from "../ingredients-item/ingredients-item";

import { getIngredients } from "../../services/selectors/ingredients-data-selector.js";

function IngredientsSet({ headline, type, persRef }) {
  const ingredients = useSelector(getIngredients);
  return (
    <li>
      <h2 className={`text text_type_main-medium pb-6`} ref={persRef}>
        {headline}
      </h2>
      <ul className={styles.item_box}>
        {ingredients
          .filter((item) => {
            return item.type === type;
          })
          .map((ingredient) => {
            return (
              <IngredientsItem key={ingredient._id} ingredient={ingredient} />
            );
          })}
      </ul>
    </li>
  );
}

IngredientsSet.propTypes = {
  headline: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  persRef: PropTypes.object.isRequired,
};

export default IngredientsSet;
