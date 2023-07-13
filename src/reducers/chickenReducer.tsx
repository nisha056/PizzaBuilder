import { createSlice } from '@reduxjs/toolkit';
interface ChickenState {
    count: number;
    selectedChicken: string[];
}
const initialState: ChickenState = {
    count: 0,
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
            if (state.count > 0) {
                state.count -= 1;
            }
        },
        select: (state, action) => {
            const chickenIngredient = action.payload;
            state.selectedChicken.push(chickenIngredient);
        },
        deselect: (state, action) => {
            state.selectedChicken.pop();
        }
    },
});

export const { increment, decrement, select, deselect } = chickenSlice.actions;
export default chickenSlice.reducer;
