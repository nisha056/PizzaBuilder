import { Add, Minus } from 'iconsax-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, select, deselect } from '../../reducers/pepperoniReducer';

const Pepperoni = () => {
    const pepperoniIngredient = {
        id: 6,
        name: "Pepperoni",
        imagePepperoni: "https://cdn0.iconfinder.com/data/icons/italian-pizza-2/64/PIZZA_4-13-512.png"
    }
    const count = useSelector(
        (state: { pepperoni: { count: number } }) =>
            state.pepperoni.count
    );
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };
    const handleSelection = () => {
        dispatch(select(pepperoniIngredient));
    };
    const handleDeselection = () => {
        dispatch(deselect(pepperoniIngredient));
    }

    return (
        <button className="flex items-center justify-between mx-10 px-6 py-2 bg-gray-200">
            <p className="text-xl text-gray-600 mx-2">Pepperoni ({count})</p>
            <Add size="32" color="black" onClick={() => {
                handleIncrement();
                handleSelection();
            }} />
            <Minus size="32" color="black" onClick={() => {
                handleDecrement();
                handleDeselection();
            }} />
        </button>
    );
};

export default Pepperoni;
