import { FC } from "react";
import styles from "./modal-overlay.module.css";

type TModalOverlay = {
  onClose: () => void;
}
const ModalOverlay: FC<TModalOverlay> = ({ onClose }) => {
  console.log(onClose);
  return <div className={styles.overlay} onClick={onClose}></div>;
}

export default ModalOverlay;
