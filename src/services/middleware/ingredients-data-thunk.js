import { createAsyncThunk } from "@reduxjs/toolkit";
import { urlIngredientsData } from "../../utils/const.js";

export const fetchIngredients = createAsyncThunk(
  "ingredients/get",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(urlIngredientsData);
      const data= await res.json();
      //console.log(data.data)
      return data;
    } catch (err) {
      console.log({ err });
    }
  }
);




