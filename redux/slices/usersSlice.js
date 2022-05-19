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
      const { id, firstName, lastName } = action.payload;
      state.push({ firstName, lastName });
    },
    updateUser: (state, action) => {
      const { firstName, lastName } = action.payload.forms;
      const { selectedIndex } = action.payload;
      state.splice(selectedIndex, 1, { firstName, lastName });
    },
    deleteUser: (state, action) => {
      const userIdx = action.payload;
      state.splice(userIdx, 1);
    },
  },
});

export const { addUser, updateUser, deleteUser } = usersSlice.actions;
