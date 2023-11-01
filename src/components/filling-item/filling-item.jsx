import { useDrag, useDrop } from "react-dnd";
import styles from "./filling-item.module.css";
import { getCartList } from "../../services/selectors/burger-constructor-selector";
import { useDispatch, useSelector } from "react-redux";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { deleteFromCart, sortCart } from "../../services/reducers/burger-constructor-slice";
//import PropTypes from "prop-types";

function FillingItem({ ingredient, index }) {
  const dispatch = useDispatch();
  const fillingList = useSelector(getCartList);

  const [{ isDragging }, dragRef] = useDrag({
    type: "sort",
    item: { item:  ingredient},
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const findIndex = (el) => {
    return fillingList.indexOf(el);
  };

  const [, dropRef] = useDrop({
    accept: "sort",
    hover({ item }) {
      if (!item ||item.uid === ingredient.uid) return;
      dispatch(sortCart({
        indexFrom: findIndex(item),
        indexTo: index,
        ingredient: item,
      }));
    },
  });

 

  return (
    <li
      ref={(node) => dropRef(dragRef(node))}
      className={`${styles.element} pr-2 ${
        isDragging ? `${styles.element_dragged}` : ""
      }`}
    >
      <DragIcon />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={() => dispatch(deleteFromCart(ingredient))}
      />
    </li>
  );
}

// ModalOverlay.propTypes = {
//   onClose: PropTypes.func.isRequired,
// };

export default FillingItem;


