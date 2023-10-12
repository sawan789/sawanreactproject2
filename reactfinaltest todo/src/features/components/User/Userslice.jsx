import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../../../apiservice";

const initialState = {
  userlist: [],
  loading: false,
  errormessage: "",
  //   status: "idle",
};

/* export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount) => {
    const response = 
    return response.data;
  }
);
 */
export const fetchuserAsync = createAsyncThunk("User/fetchUser", async () => {
  const response = await Api.fetchusers();
  //    Api call
  return response;
});

export const UserSlice = createSlice({
  name: "User",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchuserAsync.pending, (state) => {
        state.loading = true;
        state.errormessage = "";
      })
      .addCase(fetchuserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.userlist = action.payload;
      })
      .addCase(fetchuserAsync.rejected, (state, action) => {
        state.loading = false;
        state.errormessage = "something went wrong";
      });
  },
});

export default UserSlice.reducer;
