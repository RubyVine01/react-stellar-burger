import styles from "./modal.module.css";

import PropTypes from "prop-types";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay.jsx";

function Modal({ children, title, onClose }) {
  useEffect(() => { 
    function onKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return createPortal(
    <>
      <ModalOverlay onClose={onClose} />
      <div className={`${styles.modal} pr-10 pl-10`}>
        <div className={`${styles.modal_head} `}>
          <h2 className={`text text_type_main-large `}>{title}</h2>
          <button className={styles.btn_close} onClick={onClose}>
            <CloseIcon type="primary" />
          </button>
        </div>
        {children}
      </div>
    </>,
    document.getElementById("modals")
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.element,
};

export default Modal;
