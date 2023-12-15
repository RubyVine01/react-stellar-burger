import styles from "./ingredients-set.module.css";
import { FC } from "react";
import IngredientsItem from "../ingredients-item/ingredients-item";
import { getIngredients } from "../../services/selectors/ingredients-data-selector";
import { TIngredient } from "../../utils/types";
import { useAppSelector } from "../../hooks/hooks";

type TIngredientsSetProps = {
  headline: string;
  type: "bun" | "sauce" | "main";
  persRef?: React.RefObject<HTMLHeadingElement>;
};

const IngredientsSet: FC<TIngredientsSetProps> = ({
  headline,
  type,
  persRef,
}) => {
  const ingredients = useAppSelector(getIngredients);
  return (
    <li>
      <h2 className={`text text_type_main-medium pb-6`} ref={persRef}>
        {headline}
      </h2>
      <ul className={styles.item_box} data-test="ingredient-list">
        {ingredients
          .filter((ingredient: TIngredient) => {
            return ingredient.type === type;
          })
          .map((ingredient: TIngredient) => {
            return (
              <IngredientsItem key={ingredient._id} ingredient={ingredient}   />
            );
          })}
      </ul>
    </li>
  );
};

export default IngredientsSet;
