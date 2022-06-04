import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  games: [
    {
      name: "League Of Legends",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl6uu80m12oUPuUItxiYt4nsxAkOfdF3YJwg&usqp=CAU",
      description:
        "League of Legends is a team-based game with over 140 champions to make epic plays with",
    },
    {
      name: "Counter-Strike: Global Offensive",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxRod6_Na62T5EHC2utnqiP2-6lLGwNj0BBg&usqp=CAU",
      description:
        "The game pits two teams, Terrorists and Counter-Terrorists, against each other in different objective-based game modes. The most common game modes involve the Terrorists planting a bomb while Counter-Terrorists attempt to stop them, or Counter-Terrorists attempting to rescue hostages that the Terrorists have captured.",
    },
    {
      name: "Apex Legends",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdQ-C8g5Y6Z51lTEMCy5LFiHS3Im1Wxn4iCA&usqp=CAU",
      description:
        "Apex Legends is an online multiplayer battle royale game featuring squads of three players using pre-made characters with distinctive abilities, called 'Legends', similar to those of hero shooters. Alternate modes have been introduced allowing for single and for two-player squads since the game's release.",
    },
    {
      name: "Valorant",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE-HIk06LJjuB-DxMI39RgxiCS1Bi4VB0yxQ&usqp=CAU",
      description:
        "Valorant is a team-based first-person hero shooter set in the near future. Players play as one of a set of Agents, characters designed based on several countries and cultures around the world",
    },
    {
      name: "Elden Ring",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLnCw46kaxOCrhYcZ2Tl-UjMznzysAFnYaiw&usqp=CAU",
      description:
        "Elden Ring is an action role-playing game played in a third-person perspective with gameplay focusing on combat and exploration; it features elements similar to those found in other games developed by FromSoftware, such as the Souls series, Bloodborne, and Sekiro.",
    },
    {
      name: "Outlast 2",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQR9bHsJlu3JdncLleiFOTSpXJWJ8I_yRr1w&usqp=CAU",
      description:
        "Outlast 2 is a first-person survival horror title set to take players on a wild ride through a rural area Arizona as they investigate the gruesome attempted murder of a pregnant woman found on the side of the road",
    },
    {
      name: "Guild Wars 2",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjo7xnO4pb87TLxwYP6R4Qqj_tON0KxxVE3g&usqp=CAU",
      description:
        "Guild Wars 2 is an online role-playing game with fast-paced action combat, a rich and detailed universe of stories, awe-inspiring landscapes to explore, two challenging player vs. player modes—and no subscription fees!",
    },
    {
      name: "Star Wars Jedi: Fallen Order ",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP6jmsTEZ2yPLRmU2QzsGivOJnYd1dAwpj-w&usqp=CAU",
      description:
        "Star Wars Jedi: Fallen Order is an action-adventure game set after the events of Star Wars: Revenge of the Sith. Develop your Force abilities, hone your lightsaber techniques, and explore the ancient mysteries of a long-lost civilization – all while staying one step ahead of the Empire and its deadly Inquisitors.",
    },
  ],
};

export const GameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    addgame: (state, action) => {
      state.games.push(action.payload);
    },
    removegame: (state, action) => {
      state.games = state.games.filter((el) => el.name !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addgame, removegame } = GameSlice.actions;

export default GameSlice.reducer;
