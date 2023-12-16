import { TFillingItem, TIngredient, TOrderItem, TOrders, TUser } from "./types";

export const fakeUrl = "some-url";
export const fakeError = "some-error";

export const fakeUser: TUser = {
  email: "user@example.com",
  name: "Test User",
};

export const fakeResSuccess = {
  success: true,
  message: "some-message",
};

export const fakeIngredient: TIngredient = {
  _id: "some-id",
  name: "Ingredient",
  type: "sauce",
  proteins: 10,
  fat: 10,
  carbohydrates: 10,
  calories: 10,
  price: 100,
  image: "some-url",
  image_mobile: "some-url",
  image_large: "some-url",
  __v: 0,
};

export const fakeFillingIngredient: TFillingItem = {
  ...fakeIngredient,
  uid: "some-unique-id",
};

export const fakeResFetchCreateOrder = {
  success: true,
  name: "Burger name",
  order: {
    ingredients: [
      { ...fakeIngredient, _id: "some-id-0", type: "bun" },
      { ...fakeIngredient, _id: "some-id-0", type: "bun" },
      { ...fakeIngredient, _id: "some-id-1", type: "main" },
    ],
    _id: "657b464187899c001b822c1b",
    owner: {
      name: "Name",
      email: "example@gmail.com",
      createdAt: "2023-11-17T12:59:31.113Z",
      updatedAt: "2023-11-30T12:30:24.310Z",
    },
    status: "done",
    name: "Burger name",
    createdAt: "2023-12-14T18:15:29.594Z",
    updatedAt: "2023-12-14T18:15:30.113Z",
    number: 29213,
    price: 300,
  },
};

export const fakeIngridients: TIngredient[] = [
  { ...fakeIngredient, _id: "some-id-0", type: "bun" },
  { ...fakeIngredient, _id: "some-id-1", type: "sauce" },
  { ...fakeIngredient, _id: "some-id-2", type: "main" },
];

export const fakeOrderInfo: TOrderItem = {
  _id: "some-order-id",
  ingredients: ["some-id-bun", "some-id-filling", "some-id-bun"],
  owner: "some-owner-id",
  status: "done",
  name: "Burger name",
  createdAt: "2023-12-14T20:27:43.718Z",
  updatedAt: "2023-12-14T20:27:44.168Z",
  number: 29236,
  __v: 0,
};

export const fakeOrders: TOrders = {
  success: true,
  orders: [
    {
      _id: "some-order-id-0",
      ingredients: ["some-id-bun", "some-id-filling", "some-id-bun"],
      status: "done",
      name: "Burger name",
      createdAt: "2023-12-14T20:57:54.493Z",
      updatedAt: "2023-12-14T20:57:54.955Z",
      number: 29239,
    },
    {
      _id: "some-order-id-1",
      ingredients: ["some-id-bun", "some-id-filling", "some-id-bun"],
      status: "done",
      name: "Burger name",
      createdAt: "2023-12-14T20:51:25.807Z",
      updatedAt: "2023-12-14T20:51:26.273Z",
      number: 29238,
    },
  ],
  total: 28865,
  totalToday: 89,
};
