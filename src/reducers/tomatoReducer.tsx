import { createSlice } from '@reduxjs/toolkit';
interface TomatoState {
    count: number;
    selectedTomato: string[];
}
const initialState: TomatoState = {
    count: 0,
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
            if (state.count > 0) {
                state.count -= 1;
            }
        },
        select: (state, action) => {
            const tomatoIngredient = action.payload;
            state.selectedTomato.push(tomatoIngredient)
        },

        deselect: (state) => {
            state.selectedTomato.pop()
        },
    },
});

export const { increment, decrement, select, deselect } = tomatoSlice.actions;
export default tomatoSlice.reducer;
