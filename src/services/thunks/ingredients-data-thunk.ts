import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../utils/const";
import { request } from "../../utils/api";

const urlIngrData:Readonly<string> = `${baseURL}/ingredients`

export const fetchIngredients = createAsyncThunk(
  "ingredients/get",
  async () => {
    return request(urlIngrData)
    .then((res) => res.data);
  }
);

