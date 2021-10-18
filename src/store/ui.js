
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartIsVisible: false
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleCart(state){
            state.cartIsVisible = !state.cartIsVisible
        }
    }
});

export default uiSlice.reducer

export const uiActions = uiSlice.actions
