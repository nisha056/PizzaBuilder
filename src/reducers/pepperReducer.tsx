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
    },
});

export const { increment, decrement } = pepperSlice.actions;
export default pepperSlice.reducer;
