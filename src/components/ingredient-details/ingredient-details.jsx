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
      <img className="pb-4" src={`${imgLink}`} alt="" />
      <p className={`text pb-8 text_type_main-medium`}>{itemName}</p>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <p className={`text text_type_main-default text_color_inactive `}>
            Калории,ккал
          </p>
          <p className={`text text_type_digits-default text_color_inactive `}>
            {calories}
          </p>
        </li>
        <li className={styles.list_item}>
          <p className={`text text_type_main-default text_color_inactive `}>
            Белки, г
          </p>
          <p className={`text text_type_digits-default text_color_inactive `}>
            {proteins}
          </p>
        </li>
        <li className={styles.list_item}>
          <p className={`text text_type_main-default text_color_inactive `}>
            Жиры, г
          </p>
          <p className={`text text_type_digits-default text_color_inactive `}>
            {fat}
          </p>
        </li>
        <li className={styles.list_item}>
          <p className={`text text_type_main-default text_color_inactive `}>
            Углеводы, г
          </p>
          <p className={`text text_type_digits-default text_color_inactive `}>
            {carbohydrates}
          </p>
        </li>
      </ul>
    </div>
  );
}

export default IngredientDetails;
