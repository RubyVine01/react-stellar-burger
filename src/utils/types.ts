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

export type TCartConstructorSlice = {
  cartList: Array<TFillingItem>;
  cartBun: TFillingItem | null;
};

export type TForgotPasswordSlice = {
  fetchRes: FetchResponse | null;
  isLoading: boolean;
  error: boolean;
};

export type TIngredientDetailsSlice = {
  ingredientDetails: TIngredient | null;
};

export type TIngredientsDataSlice = {
  ingredientArray: TIngredient[] | [];
  isLoading: boolean;
  error: boolean;
};

export type TModalSlice = {
  isOpen: boolean;
  modalType: string | null;
};

export type TOrderDetailsSlice = {
  orderDetails: TOrder | null;
  isLoading: boolean;
  error: boolean;
};

export type TResetPasswordSlice = {
  fetchRes: FetchResponse | null;
  isLoading: boolean;
  error: boolean;
  resetPasswordAllowed: boolean;
};

export type TUserProfileeSlice = {
  user: TUser | null;
  isAuthChecked: boolean;
  isLoading: boolean;
  error: boolean;
  errorMessage: string;
  isLoadingRegister: boolean;
  errorRegister: boolean;
  errorMessageRegister: string;
  isLoadingLogin: boolean;
  errorLogin: boolean;
  errorMessageLogin: string;
  isLoadingUpdateUser: boolean;
  errorUpdateUser: boolean;
  errorMessageUpdateUser: string;
};

export type TFetchRegister = {
  email: string;
  password: string;
  name: string;
};

export type TFetchLogin = {
  email: string;
  password: string;
};

export type TFetchUpdateUser = {
  email: string;
  name: string;
};


export type TFetchRefreshToken = {
  success: boolean;
  accessToken: string;
  refreshToken: string;
};

export type TRequestOptions = RequestInit & {
  headers: Record<string, string>;
};