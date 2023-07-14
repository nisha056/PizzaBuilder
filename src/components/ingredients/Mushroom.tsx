import { Add, Minus } from 'iconsax-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, select, deselect } from '../../reducers/mushroomReducer';

const Mushroom = () => {
    const mushroomIngredient = {
        id: 2,
        name: 'Mushroom',
        imagemushroom: "https://cdn0.iconfinder.com/data/icons/vegetables-ii-color/290/21-512.png"
    };
    const count = useSelector(
        (state: { mushroom: { count: number } }) =>
            state.mushroom.count
    );
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };
    const handleSelection = () => {
        dispatch(select(mushroomIngredient))
    };
    const handleDeselection = () => {
        dispatch(deselect());
    }

    return (
        <button className="flex items-center justify-between mx-10 px-6 py-2 bg-gray-200">
            <p className="text-xl text-gray-600 mx-2">Mushroom ({count})</p>
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

export default Mushroom;
