import { configureStore } from "@reduxjs/toolkit";
import GameSlice from "./GameSlice";
import UpcomingSlice from "./UpcomingSlice";

export const store = configureStore({
  reducer: {
    game: GameSlice,
    upcoming: UpcomingSlice,
  },
});
