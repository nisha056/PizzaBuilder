import { createSlice } from '@reduxjs/toolkit';
interface PepperoniState {
    count: number;
    selectedPepperoni: string[];
}
const initialState: PepperoniState = {
    count: 0,
    selectedPepperoni: [],
};
const pepperoniSlice = createSlice({
    name: 'pepperoli',
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
            const pepperoniIngredient = action.payload;
            state.selectedPepperoni.push(pepperoniIngredient);
        },
        deselect: (state, action) => {
            state.selectedPepperoni.pop();
        }
    },
});

export const { increment, decrement, select, deselect } = pepperoniSlice.actions;
export default pepperoniSlice.reducer;
