import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  upgames: [
    {
      name: "Forspoken",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQruvH5R3Rj9_KBZV7atZnHJWfYRA_z_dLJTA&usqp=CAU",
      description:
        "Forspoken follows the journey of Frey, a young New Yorker transported to the beautiful and cruel land of Athia. In search of a way home, Frey must use her newfound magical abilities to traverse sprawling landscapes and battle monstrous creatures.",
      releaseDate: "October 11, 2022",
    },
    {
      name: "Black Myth: Wukong",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPwf81CrdRsmFgJFdlBTwSSSTlKOJZPhlcjA&usqp=CAU",
      description:
        "Black Myth: Wukong (黑神话：悟空) is an upcoming action role-playing game by Chinese indie developer Game Science, based on the classical 16th-century Chinese novel Journey to the West.",
      releaseDate: "2023",
    },
    {
      name: "Starfield",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR39sPwDuBjI1Qc6dp0kBnhknbj2JdpVtdisQ&usqp=CAU",
      description:
        "Starfield is an upcoming action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. The game was formally announced during Bethesda's E3 Press Conference in 2018. The game was described as a wholly new, next-generation experience set in an entirely new space-themed world",
      releaseDate: "",
    },
    {
      name: "Zelda Breath of the Wild 2",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIvb5snEkRv4VdqfM1RE04RsCja3USt3YHuA&usqp=CAU",
      description:
        "An untitled sequel to the 2017 action-adventure game The Legend of Zelda: Breath of the Wild is in development by Nintendo. It is a mainline installment of The Legend of Zelda series and is currently aimed to be released in the first half of 2023 for the Nintendo Switch.",
      releaseDate: "2023",
    },
    {
      name: "Pragmata",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwnP_tKfxiGFXtxfhS5YlA4iRFK3WN28CLlg&usqp=CAU",
      description:
        "Pragmata is weird. From what we can discern from the first teaser trailer, this wild game revolves around a little girl and a person in an astronaut suit. The aforementioned child doesn't appear to be human, as she can breathe in space and do some strange stuff with her eyes",
      releaseDate: "2023",
    },
    {
      name: "Project Relic",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT82ISqOQ2qi7eKvs2G8EBt6Vfn7QjL0PMnNA&usqp=CAU",
      description:
        "Project Relic – 5-man indie studio showcases a new gameplay footage for new multiplayer soulslike game Project Relic's vision is an online-based multiplayer action game based on scenarios related to relics of ancient human civilizations, with PC and consoles as the main platforms.",
      releaseDate: "2023",
    },
    {
      name: "Payday 3",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSSp0HGiY9DcidPk80eypgbLrQdieHvx2L0A&usqp=CAU",
      description:
        "It has been officially confirmed that Payday 3 is set within New York, which is still rather close to the locational setting of its predecessor, with Payday 2 taking place in Washington D.C. In addition to this, it has been strongly teased that Payday 3 will have a much more modern setting, within a more contemporary ",
    },
    {
      name: "Star Wars Jedi: survivor ",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgF6tBDFtoR9hkQo33LgHJIWDDvwHZ-tmdwg&usqp=CAU",
      description:
        "Cal Kestis' journey is officially continuing in Star Wars Jedi: Survivor, set for a PS5, Xbox Series, and PC release in 2023. The sequel is coming nearly four years after Jedi: Fallen Order introduced us to new Jedi, new Inquisitors, and one of the cutest droids in the galaxy.",
      releaseDate: "2023",
    },
  ],
};

export const UpcomingSlice = createSlice({
  name: "upcoming",
  initialState,
  reducers: {
    addupgame: (state, action) => {
      state.upgames.push(action.payload);
    },
    removeupgame: (state, action) => {
      state.upgames = state.games.filter(
        (el) => el.name !== action.payload.name
      );
    },
    editupgame: (state, action) => {
      let i = state.upgames.findIndex((el) => el.name === action.payload.name);
      state.upgames[i] = {
        ...state.upgames[i],
        name: action.payload.gameEdited.name,
        posterUrl: action.payload.gameEdited.posterUrl,
        description: action.payload.gameEdited.description,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addupgame, removeupgame, editupgame } = UpcomingSlice.actions;

export default UpcomingSlice.reducer;
