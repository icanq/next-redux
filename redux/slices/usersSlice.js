import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: [
    {
      firstName: "Ichsan",
      lastName: "Natawijaya",
    },
  ],
  reducers: {
    addUser: (state, action) => {
      const { firstName, lastName } = action.payload;
      state.push({ firstName, lastName });
    },
  },
});

export const { addUser } = usersSlice.actions;
