import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch('/api/products');
    return await response.json();
});

const productSlice = createSlice({
    name: 'products',
    initialState: { items: [], loading: false },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.products;
            });
    },
});

export default productSlice.reducer;
