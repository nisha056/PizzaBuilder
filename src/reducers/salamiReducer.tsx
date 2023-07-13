import { createSlice } from '@reduxjs/toolkit';
interface SalamiState {
    count: number;
    selectedSalami: string[];
}
const initialState: SalamiState = {
    count: 0,
    selectedSalami: [],
};
const salamiSlice = createSlice({
    name: 'salami',
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
            // state.selectedSalami.push(action.payload)
            const salamiIngredient = action.payload;
            state.selectedSalami.push(salamiIngredient);
        },

        deselect: (state, action) => {
            state.selectedSalami.pop();
        }
    },
});
export const { increment, decrement, select, deselect } = salamiSlice.actions;
export default salamiSlice.reducer;
