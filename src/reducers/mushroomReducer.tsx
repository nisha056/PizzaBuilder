import { createSlice } from '@reduxjs/toolkit';
interface MushroomState {
    count: number;
    selectedMushroom: string[];
}
const initialState: MushroomState = {
    count: 20,
    selectedMushroom: [],
};

const mushroomSlice = createSlice({
    name: 'mushroom',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        select: (state, action) => {
            state.selectedMushroom.push(action.payload)
        },
        deselect: (state, action) => {
            state.selectedMushroom = action.payload;
        }
    },
});

export const { increment, decrement, select, deselect } = mushroomSlice.actions;
export default mushroomSlice.reducer;
