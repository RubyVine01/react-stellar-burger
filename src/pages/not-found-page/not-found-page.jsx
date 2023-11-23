import styles from "./not-found-page.module.css";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className={styles.content}>
      <p className={`${styles.num} text_type_digits-default text mb-4 `}>404</p>
      <p className={`text text_type_main-large mb-20`}>
        Страница не существует
      </p>
      <p className={`text text_type_main-small mb-4`}>
        Скорее всего страница была удалена или у нее сменился URL адрес!{" "}
      </p>
      <Link
        to="/"
        className={`${styles.link}  text text_type_main-default text_color_accent`}
      >
        Перейти на главную страницу
      </Link>
    </main>
  );
}

export default NotFoundPage;
