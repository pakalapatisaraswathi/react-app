import { configureStore, createSlice } from "@reduxjs/toolkit";
import Login from "./Login";

//create Products slice(to group the specific functionality of related state and reducers(actions))
const productsSlice = createSlice({
  name: "products",
  initialState: {
    veg: [
      { name: "Potato", price: 34, image:"./potato.jpeg" },
      { name: "Tomato", price: 15, image:"./Tomato-red.png" },
      { name: "Green Chilli", price: 30,  image:"./greenchilli.jpeg"},
      { name: "Carrot", price: 50, image:"./carrots.webp"},
      { name: "Onion", price: 60, image:"./onion.jpeg" },
    ],
    nonveg: [
      { name: "Chicken", price: 240, image:"./Chicken.png" },
      { name: "Fish", price: 450, image:"./fish.jpg" },
      { name: "Mutton", price: 890, image:"./mutton.jpeg" },
      { name: "Prawns", price: 500, image:"./prawns.jpg" },
      { name: "Skin Less Chicken", price: 220, image:"./skinless chicken.jpeg" },
    ],
    milk: [
      { name: "Jersey", price: 32, image:"./jersey.png" },
      { name: "Heritage", price: 31, image:"./heritage.jpeg" },
      { name: "Sagam", price: 34, image:"./sangam.png" },
    ],
  },
  reducers: {},
});

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      let item = state.find((item) => item.name === action.payload.name);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    increament: (state, action) => {
      let item = state.find((item) => item.name === action.payload.name);
      if (item) {
        item.quantity += 1;
      }
    },
    decrement: (state, action) => {
      let item = state.find((item) => item.name === action.payload.name);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        return state.filter((item) => item.name !== action.payload.name);
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.name !== action.payload.name);
    },
    clearCart: () => [],
  },
});

let purchaseDetails = createSlice({
  name: "purchase",
  initialState: [],
  reducers: {
    purchaseList: (state, action) => {
      state.push({ ...action.payload });
    },
  },
});

const authslice=createSlice({
  name:"auth",
  initialState:{
    isAuthenticated: localStorage.getItem("username")?true:false,
    user:localStorage.getItem("username")
  },
  reducers:{
    login:(state,action)=>
    {
      state.isAuthenticated=true;
      state.user=action.payload;
      localStorage.setItem("username",action.payload);
    },
    logout:(state)=>{
      state.isAuthenticated=false;
      state.user=" ";
      localStorage.removeItem("username");
    }
  }
});
//configure store
const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    purchase: purchaseDetails.reducer,
    auth:authslice.reducer
  },
});

//export the cart reducers as actions addToCart

export const { addToCart, increament, decrement, removeFromCart, clearCart } =
  cartSlice.actions;

export const { purchaseList } = purchaseDetails.actions;
export const {login,logout}=authslice.actions;
//export store
export default store;