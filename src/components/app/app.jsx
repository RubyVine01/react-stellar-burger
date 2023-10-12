import styles from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from "../app-header/app-header.jsx"
import BurgerIngredients from "../burger-ingredients/burger-ingredients.jsx"

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
      <pre style={{
      	margin: "auto",
      	fontSize: "1.5rem"
      }}>
      	<AppHeader/>
        <main className={styles.content}>
          <BurgerIngredients ingredients={data} />
        </main>
      </pre>
    </div>
  );
}

export default App;
