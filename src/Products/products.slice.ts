import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const validateProduct = (product: Product): Promise<Product> => new Promise((resolve, reject) => setTimeout(() => {
    if (product.title.length === 0) {
        reject('No title')
    }
    if (product.price <= 0) {
        reject('Price is incorrect')
    }
    resolve(product)
}, 500)) 


export enum ValidationState {
    Fulfilled,
    Pending,
    Rejected
}

interface ProductsSliceState {
    products: Product[],
    validationState?: ValidationState,
    errorMessage?: string,
}

export interface Product {
  title: string;
  price: number;
  id: string;
}

// async actions
export const addProductAsync = createAsyncThunk('products/addNewProduct', async (initalProduct: Product) => {
    const product = await validateProduct(initalProduct)
    return product;
})

const initialProducts: Product[] = [
  { title: "Escape From Tarkov", price: 60, id: "eft" },
  { title: "Huntdown", price: 70, id: "huny" },
  { title: "Hell From Tarkov", price: 55, id: "hell" },
];

const initialState : ProductsSliceState = {
    products: initialProducts,
    validationState: undefined,
    errorMessage: undefined
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            // return [action.payload, ...state];
            state.products.push(action.payload);
        },
        removeProduct: (state, action: PayloadAction<string>) => ({
            ...state,
            products: state.products.filter(product => product.id !== action.payload)
        })
    },
    extraReducers: builder => {
        builder.addCase(addProductAsync.fulfilled, (state, action) => ({
            ...state,
            validationState: ValidationState.Fulfilled,
            errorMessage: undefined,
            products: [...state.products, action.payload]
        }))
        builder.addCase(addProductAsync.rejected, (state, action) => ({
            ...state,
            validationState: ValidationState.Rejected,
            errorMessage: action.error.message,
        }))
        builder.addCase(addProductAsync.pending, (state, action) => ({
            ...state,
            validationState: ValidationState.Pending,
            errorMessage: undefined,
        }))
    }
})

export const { addProduct, removeProduct } = productsSlice.actions;

export const getProductsSelector = (state: RootState) => state.products.products;

export default productsSlice.reducer;

