import styles from "./filling-item.module.css";
import { ingredientType } from "../../utils/prop-types";

import { useDispatch, useSelector } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import PropTypes from "prop-types";

import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { getCartList } from "../../services/selectors/burger-constructor-selector";
import {
  deleteFromCart,
  sortCart,
} from "../../services/reducers/burger-constructor-slice";

function FillingItem({ ingredient, index }) {

  const dispatch = useDispatch();
  const fillingList = useSelector(getCartList);

  const [{ isDragging }, dragRef] = useDrag({
    type: "sort",
    item: { item: ingredient },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const findIndex = (item) => {
    return fillingList.indexOf(item);
  };

  const [, dropRef] = useDrop({
    accept: "sort",
    hover({ item }) {
      if (!item || item.uid === ingredient.uid) return;
      dispatch(
        sortCart({
          indexFrom: findIndex(item),
          indexTo: index,
          ingredient: item,
        })
      );
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

FillingItem.propTypes = {
  ingredient: ingredientType.isRequired,
 index: PropTypes.number.isRequired,
};

export default FillingItem;
