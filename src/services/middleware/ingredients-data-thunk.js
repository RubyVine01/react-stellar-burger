import { createAsyncThunk } from "@reduxjs/toolkit";
import { urlIngredientsData } from "../../utils/const.js";

export const fetchIngredients = createAsyncThunk(
  "ingredients/get",
  async () => {
    try {
      const res = await fetch(urlIngredientsData);
      const data = await res.json();
      return data;
    } catch (err) {
      console.log({ err });
    }
  }
);
