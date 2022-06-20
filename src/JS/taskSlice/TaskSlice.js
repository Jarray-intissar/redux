import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  listtask:[
    {
    id: 1,
    title: "MYSTERY GIRL ",
    description:"Mystery Girl est à la fois rafraîchissante et intense. Ce parfum innovant saisit la complexité féminine dans les ingrédients exceptionnels.Le parfum s'ouvre sur des notes de tête d'amande et de café, se prolonge sur des notes de cœur de jasmin sambac.",
    isDone: false,
  },
  {
    id: 2,
    title: "GLAMOUR",
    description:"Jouez le jeu de l'amour avec ce gracieux parfum, mêlant l'intensité de la rose et l'audace du cassis à un accord exubérant de jasmin, de pivoine et de poivre rose pour créer un bouquet magique de notes fleuries.",
    isDone: false,
  },
  {
    id: 3,
    title: "HAREM ",
    description:"L'alliance sensuelle et lumineuse de l'Absolu de Tubéreuse et du Jasmin se mêle aux accents orientaux de la Vanille Gousse et Vibrants du Cashmeran pour une nouvelle déclaration de féminité",
    isDone: true,
  },
  ],
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask:(state,action)=> {
    state.listtask.push(action.payload);
    },
    removeTask:(state,action)=> {
      state.listtask=state.listtask.filter((el)=>el.id !== action.payload.id);
      },
      doneTask:(state,action)=> {
        let i= state.listtask.findIndex((el)=>el.id === action.payload.id);
       state.listtask[i] =
       {
        ...state.listtask[i],
        isDone: !state.listtask[i].isDone,
       };
      },
    updateTask:(state,action)=> {
        let i= state.listtask.findIndex((el)=>el.id === action.payload.id);
       state.listtask[i] =
       {
        ...state.listtask[i],
        title: action.payload.edited.title,
        description: action.payload.edited.description,
       };
      }, 
  },
})

// Action creators are generated for each case reducer function
export const { addTask ,removeTask, doneTask, updateTask } = taskSlice.actions

export default taskSlice.reducer