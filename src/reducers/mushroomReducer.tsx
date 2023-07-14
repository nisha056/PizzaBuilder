import { createSlice } from '@reduxjs/toolkit';
interface MushroomState {
    count: number;
    selectedMushroom: string[];
}
const initialState: MushroomState = {
    count: 0,
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
            if (state.count > 0) {
                state.count -= 1;
            }
        },
        select: (state, action) => {
            const mushroomIngredient = action.payload;
            state.selectedMushroom.push(mushroomIngredient);
        },
        deselect: (state) => {
            state.selectedMushroom.pop();
        }
    },
});

export const { increment, decrement, select, deselect } = mushroomSlice.actions;
export default mushroomSlice.reducer;
