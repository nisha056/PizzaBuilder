import { createSlice } from '@reduxjs/toolkit';
interface PepperoniState {
    count: number;
    selectedPepperoni: string[];
}
const initialState: PepperoniState = {
    count: 20,
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
            state.count -= 1;
        },
        select: (state, action) => {
            state.selectedPepperoni.push(action.payload);
        },
        deselect: (state, action) => {
            state.selectedPepperoni = action.payload;
        }
    },
});

export const { increment, decrement, select, deselect } = pepperoniSlice.actions;
export default pepperoniSlice.reducer;
