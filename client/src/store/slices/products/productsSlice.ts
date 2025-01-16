import { RootState } from '@/store/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
export interface ProductsState {
  products: unknown[],
}

// Define the initial state using that type
const initialState: ProductsState = {
  products: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<unknown[]>) => { state.products = [...state.products, ...action.payload] },
  },
})

export const { setProducts } = productsSlice.actions

export const selectProducts = (state: RootState) => state.products.products
export const selectHasProducts = (state: RootState) => state.products.products.length > 0

export default productsSlice.reducer