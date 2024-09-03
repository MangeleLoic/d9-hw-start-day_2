import { createSlice } from '@reduxjs/toolkit';

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: [],
  reducers: {
    addFavourite: (state, action) => {
      state.push(action.payload);
    },
    removeFavourite: (state, action) => {
      return state.filter(company => company.id !== action.payload.id);
    },
  },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
