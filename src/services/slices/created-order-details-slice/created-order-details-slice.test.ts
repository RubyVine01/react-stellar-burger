import createdOrderReducer, {
  initialState,
} from "./created-order-details-slice";

const fakeRes = {
  success: true,
  name: "Флюоресцентный space бургер",
  order: {
    ingredients: [
      {
        _id: "643d69a5c3f7b9001cfa0943",
        name: "Соус фирменный Space Sauce",
        type: "sauce",
        proteins: 50,
        fat: 22,
        carbohydrates: 11,
        calories: 14,
        price: 80,
        image: "https://code.s3.yandex.net/react/code/sauce-04.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa093d",
        name: "Флюоресцентная булка R2-D3",
        type: "bun",
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: "https://code.s3.yandex.net/react/code/bun-01.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa093d",
        name: "Флюоресцентная булка R2-D3",
        type: "bun",
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: "https://code.s3.yandex.net/react/code/bun-01.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
        __v: 0,
      },
    ],
    _id: "657b464187899c001b822c1b",
    owner: {
      name: "Lera",
      email: "leraprokofevaiera1@gmail.com",
      createdAt: "2023-11-17T12:59:31.113Z",
      updatedAt: "2023-11-30T12:30:24.310Z",
    },
    status: "done",
    name: "Флюоресцентный space бургер",
    createdAt: "2023-12-14T18:15:29.594Z",
    updatedAt: "2023-12-14T18:15:30.113Z",
    number: 29213,
    price: 2056,
  },
};

describe("Test createdOrderSlice", () => {
  it("Обработка начального значения", () => {
    expect(
      createdOrderReducer(undefined, {
        type: "unknown",
      })
    ).toEqual(initialState);
  });

  test("Обработка fetchCreateOrder.pending", () => {
    expect(
      createdOrderReducer(initialState, {
        type: "order/post/pending",
      })
    ).toEqual({
      ...initialState,
      isLoading: true,
      error: false,
    });
  });

  test("Обработка fetchCreateOrder.fulfilled", () => {
    expect(
      createdOrderReducer(initialState, {
        type: "order/post/fulfilled",
        payload: fakeRes,
      })
    ).toEqual({
      ...initialState,
      orderDetails: fakeRes,
      isLoading: false,
      error: false,
    });
  });

  test("Обработка fetchCreateOrder.rejected", () => {
    expect(
      createdOrderReducer(initialState, {
        type: "order/post/rejected",
      })
    ).toEqual({
      ...initialState,
      isLoading: false,
      error: true,
    });
  });
});
