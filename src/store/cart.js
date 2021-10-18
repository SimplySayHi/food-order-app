
import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(sessionStorage.getItem('FoodyStoreCart')) || {
    items: [],
    totalQuantity: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            if( existingItem ){
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            } else {
                state.items.push({
                    ...newItem,
                    quantity: 1,
                    totalPrice: newItem.price
                });
            }

            state.totalQuantity++;
            sessionStorage.setItem('FoodyStoreCart', JSON.stringify(state));
        },
        removeItemFromCart(state, action){
            const itemId = action.payload;
            const existingItem = state.items.find(item => item.id === itemId);
            
            if( existingItem.quantity === 1 ){
                state.items = state.items.filter(item => item.id !== itemId);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }

            state.totalQuantity--;
            sessionStorage.setItem('FoodyStoreCart', JSON.stringify(state));
        }
    }
})

export default cartSlice.reducer

export const cartActions = cartSlice.actions
