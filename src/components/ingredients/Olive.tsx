import { Add, Minus } from 'iconsax-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, select, deselect } from '../../reducers/oliveReducer';

const Olive = () => {
    const oliveIngredient = {
        id: 4,
        name: "olive",
        imageOlive: "https://cdn2.iconfinder.com/data/icons/fruit-and-vegetable-64/340/oil_olive_natural_healthy_organic_vegetarian-512.png"
    }
    const count = useSelector(
        (state: { olive: { count: number } }) =>
            state.olive.count
    );
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };
    const handleSelection = () => {
        dispatch(select(oliveIngredient))
    };
    const handleDeselection = () => {
        dispatch(deselect(oliveIngredient))
    }

    return (
        <button className="flex items-center justify-between mx-10 px-6 py-2 bg-gray-200">
            <p className="text-xl text-gray-600 mx-2">Olive ({count})</p>
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

export default Olive;
