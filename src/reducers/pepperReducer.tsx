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
            state.count -= 1;
        },
        select: (state, action) => {
            state.selectedPepper.push(action.payload);
        },
        deselect: (state, action) => {
            state.selectedPepper = action.payload;
        }
    },
});

export const { increment, decrement, select, deselect } = pepperSlice.actions;
export default pepperSlice.reducer;
