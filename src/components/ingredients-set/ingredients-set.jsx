import styles from "./ingredients-set.module.css";
import IngredientsItem from "../ingredients-item/ingredients-item.jsx";

function IngredientsSet({ headline, ingredients }) {
  return (
    <div>
      <h2 className={`text text_type_main-medium pb-6`}>{headline}</h2>
      <div className={styles.item_box}>
        {ingredients.map((ingredient) => {
          return (
            <IngredientsItem
              key={ingredient._id}
              imgLink={ingredient.image_large}
              itemPrice={ingredient.price}
              itemName={ingredient.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default IngredientsSet;
