import { Add, Minus } from 'iconsax-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, select, deselect } from '../../reducers/oliveReducer';

const Olive = () => {
    const oliveIngredient = {
        id: 4,
        name: "olive",
        imageOlive: "https://cdn1.iconfinder.com/data/icons/vegetables-62/500/SingleCartoonVegetablesYulia_2-64.png"
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
        dispatch(deselect())
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
