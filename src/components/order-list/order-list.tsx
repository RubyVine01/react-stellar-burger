// Styles
import { useAppSelector } from "../../hooks/hooks";
import { getOrders } from "../../services/selectors/orders-selector";
import OrderItem from "../order-item/order-item";
import styles from "./order-list.module.css";

// Library
import { FC } from "react";

type TOrderItem = {
  ingredients: string[];
  _id: string;
  status: "created" | "pending" | "done";
  number: string;
  createdAt: string;
  updatedAt: string;
  name: string;
};

const orderList: TOrderItem[] = [
  {
    ingredients: [
      "643d69a5c3f7b9001cfa093c",
      "643d69a5c3f7b9001cfa093e",
      "643d69a5c3f7b9001cfa0941",
      "643d69a5c3f7b9001cfa0941",
      "643d69a5c3f7b9001cfa093e",
    ],
    _id: "",
    status: "done",
    number: "034533",
    createdAt: "2021-06-23T14:43:22.587Z",
    updatedAt: "2021-06-23T14:43:22.603Z",
    name: "Death Star Starship Main бургер",
  },
  {
    ingredients: [
      "643d69a5c3f7b9001cfa093c",
      "643d69a5c3f7b9001cfa093e",
      "643d69a5c3f7b9001cfa0941",
      "643d69a5c3f7b9001cfa0941",
      "643d69a5c3f7b9001cfa093e",
      "643d69a5c3f7b9001cfa093e",
      "643d69a5c3f7b9001cfa093e",
      "643d69a5c3f7b9001cfa093e",
    ],
    _id: "",
    status: "done",
    number: "034534",
    createdAt: "2021-06-23T20:11:01.403Z",
    updatedAt: "2021-06-23T20:11:01.406Z",
    name: "Interstellar бургер",
  },
  {
    ingredients: [
      "643d69a5c3f7b9001cfa093c",
      "643d69a5c3f7b9001cfa093e",
      "643d69a5c3f7b9001cfa0941",
    ],
    _id: "",
    status: "done",
    number: "034535",
    createdAt: "2021-06-23T20:13:23.654Z",
    updatedAt: "2021-06-23T20:13:23.657Z",
    name: "Black Hole Singularity острый бургер",
  },
  {
    ingredients: [
      "643d69a5c3f7b9001cfa093c",
      "643d69a5c3f7b9001cfa093e",
      "643d69a5c3f7b9001cfa0941",
    ],
    _id: "",
    status: "done",
    number: "034536",
    createdAt: "2021-06-23T20:13:23.654Z",
    updatedAt: "2021-06-23T20:13:23.657Z",
    name: "Black Hole Singularity острый бургер",
  },
];

const OrderList: FC = () => {

  const orders = useAppSelector(getOrders);
  console.log(orders);
  
  return (
    <section className={`${styles.order_list} ${styles.scroll} pr-2`}>
      {orderList.map((order) => (
        <OrderItem order={order} key={order.number} />
      ))}
    </section>
  );
};

export default OrderList;
