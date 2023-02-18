import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../Products/products.slice";

interface CartProduct extends Product {
    amount: number;
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: [] as CartProduct[],
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const productIndex = state.findIndex(product => product.id === action.payload.id);
            console.log(productIndex);
            if (productIndex !== -1) {
                state[productIndex].amount += 1; // can use += 1 as immer.js provides immutability
            } else {
                state.push({...action.payload, amount: 1});
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            const productIndex = state.findIndex(product => product.id === action.payload);
            if (state[productIndex].amount > 1) {
                state[productIndex].amount -= 1;
            } else {
                return state.filter(product => product.id !== action.payload)
            }
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;