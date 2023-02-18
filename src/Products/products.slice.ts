import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';

interface ProductsListProps {}

export interface Product {
  title: string;
  price: number;
  id: string;
}

const initialState: Product[] = [
  { title: "Escape From Tarkov", price: 60, id: "eft" },
  { title: "Huntdown", price: 70, id: "huny" },
  { title: "Hell From Tarkov", price: 55, id: "hell" },
];

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            // return [action.payload, ...state];
            state.push(action.payload);
        },
        removeProduct: (state, action: PayloadAction<string>) => state.filter(product => product.id !== action.payload)
    }
})

export const { addProduct, removeProduct } = productSlice.actions;

export const getProductsSelector = (state: RootState) => state.products;

export default productSlice.reducer;