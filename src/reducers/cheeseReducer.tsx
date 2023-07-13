import { createSlice } from '@reduxjs/toolkit';
interface CheeseState {
    count: number;
    selectedCheese: string[];
}
const initialState: CheeseState = {
    count: 0,
    selectedCheese: [],
};

const cheeseSlice = createSlice({
    name: 'Cheese',
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
            const cheeseIngredient = action.payload;
            state.selectedCheese.push(cheeseIngredient)
        },
        deselect: (state, action) => {
            state.selectedCheese.pop()
        }
    },
});

export const { increment, decrement, select, deselect } = cheeseSlice.actions;
export default cheeseSlice.reducer;
