import styles from "./modal.module.css";

import PropTypes from "prop-types";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay.jsx";

import { closeModal } from "../../services/reducers/modal-slice";
import { getTypeModal } from "../../services/selectors/modal-selector";
import { deleteIngredientDetails } from "../../services/reducers/ingredient-details-slice";

function Modal({ children, title }) {
  const dispatch = useDispatch();
  const typeModal = useSelector(getTypeModal);

  const onClose = () => {
    dispatch(closeModal());
    if (typeModal === "ingredient") {
      dispatch(deleteIngredientDetails());
    }
  };
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
  title: PropTypes.string,
  children: PropTypes.element,
};

export default Modal;
