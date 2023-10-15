import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  credentialsRegisterTipe,
  credentialsLoginTipe,
  registerDataType,
} from "../../../models/credentialTipes";

import { IauthUser } from "../../../models/IauthTipes";
import { AuthState } from "../slices/AuthSlice";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk<
  registerDataType,
  credentialsRegisterTipe,
  { rejectValue: string }
>("auth/register", async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);

    token.set(data.token);

    return data;
  } catch (error) {
    let e = error as Error;
    return thunkAPI.rejectWithValue(e.message);
  }
});
export const login = createAsyncThunk<
  registerDataType,
  credentialsLoginTipe,
  { rejectValue: string }
>("auth/login", async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/login", credentials);

    token.set(data.token);

    return data;
  } catch (error) {
    let e = error as Error;
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logout = createAsyncThunk<
  undefined,
  undefined,
  { rejectValue: string }
>("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {
    let e = error as Error;
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fecthCurrentUser = createAsyncThunk<
  IauthUser,
  undefined,
  { state: { auth: AuthState } }
>("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();

  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue("Try again");
  }

  token.set(persistedToken);
  try {
    const { data } = await axios.get("/users/current");

    return data;
  } catch (error) {
    let e = error as Error;
    return thunkAPI.rejectWithValue(e.message);
  }
});
