import { createSlice } from '@reduxjs/toolkit';
interface OliveState {
    count: number;
    selectedOlive: string[];
}
const initialState: OliveState = {
    count: 30,
    selectedOlive: [],
};

const oliveSlice = createSlice({
    name: 'olive',
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
            state.selectedOlive.push(action.payload);
        },
        deselect: (state, action) => {
            state.selectedOlive = action.payload;
        }
    },
});

export const { increment, decrement, select, deselect } = oliveSlice.actions;
export default oliveSlice.reducer;
