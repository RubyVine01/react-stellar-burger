import styles from "./ingredient-details.module.css";

function IngredientDetails() {
  const imgLink = "https://code.s3.yandex.net/react/code/sp_1-large.png";
  const itemName = "Биокотлета из марсианской Магнолии";
  const proteins = 234;
  const fat = 313;
  const carbohydrates = 232;
  const calories = 212;

  return (
    <div className={styles.ingredient_details}>
      <img className='pb-4' src={`${imgLink}`} alt="" />
      <p className={`${styles.name} pb-8 text_type_main-medium`}>{itemName}</p>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <p className={`${styles.nutrients} text_type_main-default`}>
            Калории,ккал
          </p>
          <p className={`${styles.nutrients} text_type_digits-default`}>{calories}</p>
        </li>
        <li className={styles.list_item}>
          <p className={`${styles.nutrients} text_type_main-default`}>
            Белки, г
          </p>
          <p className={`${styles.nutrients} text_type_digits-default`}>{proteins}</p>
        </li>
        <li className={styles.list_item}>
          <p className={`${styles.nutrients} text_type_main-default`}>
            Жиры, г
          </p>
          <p className={`${styles.nutrients} text_type_digits-default`}>{fat}</p>
        </li>
        <li className={styles.list_item}>
          <p className={`${styles.nutrients} text_type_main-default`}>
            Углеводы, г
          </p>
          <p className={`${styles.nutrients} text_type_digits-default`}>{carbohydrates}</p>
        </li>
      </ul>
    </div>
  );
}

export default IngredientDetails;
