import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../utils/const.ts";
import { request } from "../../utils/api.ts";

const urlIngrData = `${baseURL}/ingredients`

export const fetchIngredients = createAsyncThunk(
  "ingredients/get",
  async () => {
    return request(urlIngrData)
    .then((res) => res.data);
  }
);

