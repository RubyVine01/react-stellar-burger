// Styles
import OrderItem from "../order-item/order-item";
import styles from "./order-list.module.css";

// Library
import { FC } from "react";

type TOrderItem = {
  ingredients: string[];
  _id: string;
  status: "created" | "pending" | "done";
  number: number;
  createdAt: string;
  updatedAt: string;
  name: string;
};

const orderList: TOrderItem[] = [
  {
    ingredients: [
      "60d3463f7034a000269f45e7",
      "60d3463f7034a000269f45e9",
      "60d3463f7034a000269f45e8",
      "60d3463f7034a000269f45ea",
    ],
    _id: "",
    status: "done",
    number: 0,
    createdAt: "2021-06-23T14:43:22.587Z",
    updatedAt: "2021-06-23T14:43:22.603Z",
    name: "Death Star Starship Main бургер",
  },
  {
    ingredients: ["60d3463f7034a000269f45e9", "60d3463f7034a000269f45e7"],
    _id: "",
    status: "done",
    number: 1,
    createdAt: "2021-06-23T20:11:01.403Z",
    updatedAt: "2021-06-23T20:11:01.406Z",
    name: "Interstellar бургер",
  },
  {
    ingredients: ["60d3463f7034a000269f45e9"],
    _id: "",
    status: "done",
    number: 3,
    createdAt: "2021-06-23T20:13:23.654Z",
    updatedAt: "2021-06-23T20:13:23.657Z",
    name: "Black Hole Singularity острый бургер",
  },
];

const OrderList: FC = () => {
  return (
    <section className={styles.order_list}>
      <OrderItem />
    </section>
  );
};

export default OrderList;
