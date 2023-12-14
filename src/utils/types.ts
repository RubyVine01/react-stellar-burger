export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
};

export type TUser = {
  email: string;
  name: string;
};

export type TOrder = {
  number: number;
};

export type TFillingItem = TIngredient & {
  uid: string;
};

export type FetchResponse = {
  message: string;
  success: boolean;
};

export type TOrderItem = {
  _id: string;
  ingredients: Array<string>;
  status: "created" | "pending" | "done";
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  owner?: string;
  __v?: number;
};

export type TOrders = {
  success: boolean;
  orders: TOrderItem[];
  total: number;
  totalToday: number;
};

export type TCreatedOrder = {
  name: string;
  order: TOrderItem & {
    price: number;
    owner: {
      createdAt: string;
      email: string;
      name: string;
      updatedAt: string;
    };
  };
};
