import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://norma.nomoreparties.space/api/orders";
const array = ["643d69a5c3f7b9001cfa093c", "643d69a5c3f7b9001cfa093e"];
const options = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ ingredients: array }),
};

export const fetchOrder = createAsyncThunk("order/get", async (_, thunkAPI) => {
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (err) {
    console.log({ err });
  }
});
