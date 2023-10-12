import styles from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from "../app-header/app-header.jsx"
import BurgerIngredients from "../burger-ingredients/burger-ingredients.jsx"
import BurgerConstructor from "../burger-constructor/burger-constructor.jsx"

function App() {

  // function getIngredientsDate() {
  //   fetch(`https://norma.nomoreparties.space/api/ingredients `)
  //     .then((res) => {
  //       return res.json(); 
  //     })
  //     .then((data) => {
  //       const
  //     })
  //     .catch((err) => {
  //       console.log("Ошибка. Запрос не выполнен: ", err);
  //     });
  // }

  return (
    <div className={styles.app}>
      	<AppHeader/>
        <main className={styles.content}>
          <BurgerIngredients ingredients={data} />
          <BurgerConstructor/>
        </main>
    </div>
  );
}

export default App;
