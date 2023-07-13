import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 20,
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
    },
});

export const { increment, decrement } = pepperoniSlice.actions;
export default pepperoniSlice.reducer;
