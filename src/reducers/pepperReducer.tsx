import { createSlice } from '@reduxjs/toolkit';
interface PepperState {
    count: number;
    selectedPepper: string[];
}
const initialState: PepperState = {
    count: 20,
    selectedPepper: [],
};
const pepperSlice = createSlice({
    name: 'pepper',
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
            const pepperIngredient = action.payload;
            state.selectedPepper.push(pepperIngredient);
        },
        deselect: (state, action) => {
            state.selectedPepper.pop();
        }
    },
});

export const { increment, decrement, select, deselect } = pepperSlice.actions;
export default pepperSlice.reducer;
