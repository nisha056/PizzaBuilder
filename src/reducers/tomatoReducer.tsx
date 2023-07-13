import { createSlice } from '@reduxjs/toolkit';
interface TomatoState {
    count: number;
    selectedTomato: string[];
}

const initialState: TomatoState = {
    count: 10,
    selectedTomato: [],
};

const tomatoSlice = createSlice({
    name: 'tomato',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        select: (state, action) => {
            state.selectedTomato.push(action.payload)
        },

        deselect: (state, action) => {
            state.selectedTomato = action.payload;
        },



    },
});

export const { increment, decrement, select, deselect } = tomatoSlice.actions;
export default tomatoSlice.reducer;
