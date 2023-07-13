import { createSlice } from '@reduxjs/toolkit';
interface CheeseState {
    count: number;
    selectedCheese: string[];
}
const initialState: CheeseState = {
    count: 20,
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
            state.count -= 1;
        },
        select: (state, action) => {
            state.selectedCheese.push(action.payload)
        },
        deselect: (state, action) => {
            state.selectedCheese = action.payload;
        }
    },
});

export const { increment, decrement, select, deselect } = cheeseSlice.actions;
export default cheeseSlice.reducer;
