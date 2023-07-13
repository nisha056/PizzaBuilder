import { createSlice } from '@reduxjs/toolkit';
interface ChickenState {
    count: number;
    selectedChicken: string[];
}
const initialState: ChickenState = {
    count: 20,
    selectedChicken: [],
};

const chickenSlice = createSlice({
    name: 'chicken',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        select: (state, action) => {
            state.selectedChicken.push(action.payload)
        },
        deselect: (state, action) => {
            state.selectedChicken = action.payload;
        }
    },
});

export const { increment, decrement, select, deselect } = chickenSlice.actions;
export default chickenSlice.reducer;
