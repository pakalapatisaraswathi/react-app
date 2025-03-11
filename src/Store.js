import { configureStore, createSlice } from "@reduxjs/toolkit";
import Login from "./Login";
import Sweets from "./Sweets";
import Fruits from "./Fruits";
import Juice from "./Juice";

//create Products slice(to group the specific functionality of related state and reducers(actions))
const productsSlice = createSlice({
  name: "products",
  initialState: {
    veg: [
      { name: "Potato", price: 34, image:"./potato.jpeg" },
      { name: "Tomato", price: 15, image:"./Tomato-red.png" },
      { name: "Green Chilli", price: 30,  image:"./greenchilli.jpeg"},
      { name: "Carrot", price: 50, image:"./carrots.webp"},
      { name:"coriander", price:30, image:"./coriander.webp"},
      { name: "Onion", price: 60, image:"./onion.jpeg" },
      { name: "brinjal",price:40, image:"./brinjal.jpg"},
      { name: "capsicum", price:80, image:"./capsicum.jpg"},
      { name: "cauliflower", price:70,image:"./cauliflower.jpg"},
      { name:"ladysfinger",price:50, image:"./ladysfinger.webp"},
      { name:"beetroot", price:30, image:"./beetroot.webp"},
      { name:"beans", price:40, image:"./beans.jpg"},
      { name:"bitter giurd", price:60, image:"./bitter gourd.webp"},
      { name:"broccoli", price:90, image:"./broccoli.webp"},
      { name:"whiteradish", price:60, image:"./whiteradish.webp"},
      { name:"amaranth leaves", price:50, image:"./Amaranth leaves.jpeg"},
      { name:"drumstick", price:45, image:"./drumstick.jpg"},
      { name:"lemons", price:30, image:"./lemons.webp"},
      { name:"cabbage", price:50, image:"./Cabbage.jpg"},
      { name:"bottle gourd", price:55, image:"./bottle gourd.jpg"},
      { name:"pumpkin", price:70, image:"./pumpkin.jpg"},
      { name:"cucumber",price:60, image:"./cucumber.jpeg"},
      { name:"peas", price:40, image:"./Peas.jpg"},
      { name:"mushroom", price:200, image:"./mushroom.jpg"},
      { name:"mint", price:40, image:"./mint.jpg"},
      { name:"garlic", price:85, image:"./garlic.jpg"},
      {name:"curry leaves", price:30, image:"./curry leaves.webp"},
      { name:"ginger", price:60, image:"./ginger.jpg"},
      { name:"taro root", price:50, image:"./taro root.webp"},
      { name:"gherkins", price:40, image:"./gherkins.jpeg"},
    ],
    nonveg: [
      { name: "Chicken", price: 240, image:"./Chicken.png" },
      { name: "Fish", price: 450, image:"./fish.jpg" },
      { name: "Mutton", price: 890, image:"./mutton.jpeg" },
      { name: "Prawns", price: 500, image:"./prawns.jpg" },
      { name: "murrel fish", price:450, image:"./murrel-fish.jpg"},
      { name: "Skin Less Chicken", price: 220, image:"./skinless chicken.jpeg" },
      { name: "Eggs", price:100, image:"./Eggs.jpg"},
      { name: "Crab", price:400, image:"./crab.jpg"},
      { name:"Boneless fish", price:600, image:"./boneless fish.jpg"},
      { name:"Tiger-Prawns", price:500, image:"./Tiger-Prawn.webp"},
      { name:"Boneless-mutton", price:1000, image:"./boneless-mutton.jpg"},
      { name:"minnow-apollo-fish", price:300, image:"./minnow-apollo-fish.webp"},
      { name:"pork meat", price:400, image:"./pork meat.webp"},
      { name:"Boneless chicken", price:450, image:"./boneless chicken.jpg"},
      { name:"Rohu fish", price:500, image:"./rohu fish.webp"},

    ],
    milk: [
      { name: "Jersey", price: 32, image:"./jersey.png" },
      { name: "Heritage", price: 31, image:"./heritage.jpeg" },
      { name: "Sagam", price: 34, image:"./sangam.png" },
      { name: "vita", price: 40, image:"./vita.jpeg" },
      { name: "verka", price: 30, image:"./verka dairy.jpg" },
      { name: "snopcap", price: 39, image:"./snopcap dairy.jpeg" },
      { name: "mother", price: 35, image:"./mother dairy.jpg" },
      { name: "parag", price: 30, image:"./parag.jpg" },
      { name: "saras", price: 32, image:"./saras.jpg" },
      { name: "sudha", price: 36, image:"./sudha.jpeg" },
      { name: "verka", price: 38, image:"./amul.png" },
      { name: "Goa", price: 34, image:"./goa.jpeg" },
      { name: "nandini", price: 30, image:"./nandini.png" },
      { name: "Amogha", price: 35, image:"./amogha.jpeg" },
      { name: "Gokul", price: 39, image:"./gokul.jpeg" },
      
    ],
    sweets: [
      { name: "Gulab Jamun", price: 150, image: "./gulab-jamuns.jpg" },
      { name: "Rasgulla", price: 250, image: "./Rasgulla.jpg" },
      { name: "Jalebi", price:150, image:"./jalebi.jpg"},
      { name: "Kaju barfi", price:120, image:"./kaju barfi.jpg"},
      { name: "motichur laddu", price:200, image:"./Motichur laddu.webp"},
      { name: "Soan papdi", price:100, image:"./SoanPapdi.png"},
      { name: "Kaja", price:200, image:"./kaja.jpeg"},
      { name: "Mysore Pak", price:300, image:"./mysore pak.jpeg"},
      { name: "Red Velvet", price:240, image:"./red velvet.jpg"},
      { name: "Chocolate Cake", price:400, image:"./chocolate cake.jpeg"},
      { name: "Bobbatlu", price:300, image:"./bobbatlu.jpg"},
      { name: "Kalakand", price:250, image:"./kalakand.jpg"},
      { name: "Sunnundalu", price:200, image:"./sunnundalu.jpg"},
      { name: "Doodh Peda", price:300, image:"./doodh peda.jpg"},
      { name: "Rasmalai", price:400, image:"./rasmalai.jpg"},
      { name: "Ice Cream", price:120, image:"./ice cream.png"},
      { name: "Jangri", price:200, image:"./jangri.jpeg"},
      { name: "Fruit Salad", price:260, image:"./fruit-salad.jpg"},
      { name:"Putharekulu", price:350, image:"./putharekulu.png"},
    ],
    Fruits:[
       { name:"Apple", price:300, image:"./apple.jpg"},
       { name:"Banana", price:90, image:"./banana.jpg"},
       { name:"Grapes", price:180, image:"./grapes.jpg"},
       { name:"Orenge", price:350, image:"./orenge.jpg"},
       { name:"Custard apple", price:250, image:"./custard apple.jpg"},
       { name:"Strawberry", price:200, image:"./strawberry.jpg"},
       { name:"Muskmelon", price:150, image:"./muskmelon.jpeg"},
       { name:"Dragon", price:400, image:"./dragon fruit.jpg"},
       { name:"WaterMelon", price:200, image:"./water melon.jpg"},
       { name:"Kiwi", price:180, image:"./kiwi.jpg"},
       { name:"Carambola Star Apple", price:250, image:"./star apple.jpg"},
       { name:"Pear", price:300, image:"./pear.png"},
       { name:"PineApple", price:150, image:"./pine apple.jpg"},
       { name:"Guava", price:100, image:"./guava.jpg"},
       { name:"BlackBerry", price:300, image:"./Blackberry.jpg"},
       { name:"Avacado", price:200, image:"./avocado.jpg"},
       { name:"Mangos", price:400, image:"./mango.jpg"},
       { name:"Cherry", price:300, image:"./cherry.jpg"},

    ],
    Juice:[
      { name:"Orange juice", price:60, image:"./orange juice.jpg"},
      { name:"Red Guava juice", price:90, image:"./red guava.jpg"},
      { name:"Sugarcane juice", price:40, image:"./sugarcane juice.jpeg"},
      { name:"cherry juice", price:80, image:"./cherry juice.jpg"},
      { name:"Strawberry juice", price:100, image:"./strawberry juice.jpg"},
      { name:"Apple juice", price:40, image:"./apple juice.jpeg"},
      { name:"Pomegranate juice", price:90, image:"./pomegranate juice.jpg"},
      { name:"Rose Milk", price:150, image:"./rose milk.jpeg"},
      { name:"Sapota juice", price:70, image:"./sapota.jpeg"},
      { name:"Pineapple juice", price:60, image:"./Pineapple juice.png"},
      { name:"Mango juice", price:90, image:"./mango juice.jpg"},
      { name:"Grape juice", price:80, image:"./Grape Juice.jpeg"},
      { name:"Beetroot juice", price:40, image:"./beetroot juice.jpg"},
      { name:"Carrot juice", price:60, image:"./Carrot Juice.jpg"},
      { name:"Kiwi juice", price:90, image:"./kiwi juice.jpg"},
      { name:"Custard apple juice", price:120, image:"./custard apple juice.jpg"},
      { name:"Oreo", price:90, image:"./Oreo.jpg"},
      { name:"Banana juice", price:70, image:"./Banana Juice.jpg"},
      { name:"Coconut Milkshake", price:80, image:"./Coconut Milkshake.jpg"},
      { name:"Muskmelon juice", price:40, image:"./muskmelon juice.jpg"},
      { name:"Avocado juice", price:120, image:"./avocado juice.jpg"},
      { name:"Watermelon juice", price:80, image:"./watermelon juice.jpg"},
      { name:"Dry fruit juice", price:150, image:"./dry fruit juice.jpeg"},
      { name:"Badam milkshake juice", price:150, image:"./Badam milkshake.jpg"},
      { name:"Coconut water", price:100, image:"./Coconut water.jpg"},
      { name:"Papaya juice", price:90, image:"./papaya juice.jpg"},
      { name:"Guava juice", price:70, image:"./guava juice.jpg"},
      { name:"Lemon juice", price:90, image:"./lemon juice.jpg"},
      { name:"Dragon juice", price:150, image:"./dragon juice.jpeg"},
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