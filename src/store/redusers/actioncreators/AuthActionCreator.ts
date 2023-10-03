import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useAppSelector } from "../../../hooks/redux";
import {
  credentialsRegisterTipe,
  credentialsLoginTipe,
} from "../../../models/credentialTipes";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials: credentialsRegisterTipe, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      let e = error as Error;
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async (credentials: credentialsLoginTipe, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/login", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      let e = error as Error;
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {
    let e = error as Error;
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fecthCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    // const state = thunkAPI.getState();
    const persistedToken = useAppSelector((state) => state.ayth.token);
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Try again");
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {}
  }
);
