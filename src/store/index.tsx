import { configureStore } from '@reduxjs/toolkit';
import salamiReducer from '../reducers/salamiReducer';
import mushroomReducer from '../reducers/mushroomReducer';
import chickenReducer from '../reducers/chickenReducer';
import oliveReducer from '../reducers/oliveReducer';
import pepperReducer from '../reducers/pepperReducer';
import pepporoniReducer from '../reducers/pepperoniReducer';
import cheeseReducer from '../reducers/cheeseReducer';
import tomatoReducer from '../reducers/tomatoReducer';

const store = configureStore({
    reducer: {
        salami: salamiReducer,
        mushroom: mushroomReducer,
        chicken: chickenReducer,
        olive: oliveReducer,
        pepper: pepperReducer,
        pepperoni: pepporoniReducer,
        cheese: cheeseReducer,
        tomato: tomatoReducer,
    },
});

export default store;
