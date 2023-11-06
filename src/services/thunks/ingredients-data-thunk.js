import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../utils/const.js";
import { request } from "../../utils/api.js";

const urlIngrData = `${baseURL}/ingredients`

export const fetchIngredients = createAsyncThunk(
  "ingredients/get",
  async () => {
    return request(urlIngrData)
    .then((res) => res.data);
  }
);

