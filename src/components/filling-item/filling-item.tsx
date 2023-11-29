import styles from "./filling-item.module.css";

import { useDispatch, useSelector } from "react-redux";
import { useDrag, useDrop } from "react-dnd";

import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { getCartList } from "../../services/selectors/burger-constructor-selector";
import {
  deleteFromCart,
  sortCart,
} from "../../services/slices/burger-constructor-slice";
import { FC } from "react";
import { TFillingItem } from "../../utils/types";

type TFillingItemProps = {
  ingredient: TFillingItem;
  index: number;
};

const FillingItem: FC<TFillingItemProps> = ({ ingredient, index }) => {
  const dispatch = useDispatch();
  const fillingList = useSelector(getCartList) as Array<TFillingItem>;

  const [{ isDragging }, dragRef] = useDrag({
    type: "sort",
    item: { item: ingredient },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const findIndex = (item: TFillingItem): number => {
    return fillingList.indexOf(item);
  };

  const [, dropRef] = useDrop({
    accept: "sort",
    hover({ item }: { item: TFillingItem }) {
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
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={() => dispatch(deleteFromCart(ingredient))}
      />
    </li>
  );
};

export default FillingItem;
