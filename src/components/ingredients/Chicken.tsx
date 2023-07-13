import { Add, Minus } from 'iconsax-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, select, deselect } from '../../reducers/chickenReducer';

const Chicken: React.FC = () => {
    const chickenIngredient = {
        id: 3,
        name: "Chicken",
        imageChicken: "https://cdn4.iconfinder.com/data/icons/food-drinks-vol-2/66/98-512.png"
    }
    const count = useSelector(
        (state: { chicken: { count: number } }) =>
            state.chicken.count
    );
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };
    const handleSelection = () => {
        dispatch(select(chickenIngredient))
    };
    const handleDeselection = () => {
        dispatch(deselect(chickenIngredient));
    }

    return (
        <button className="flex items-center justify-between mx-10 px-6 py-2 bg-gray-200">
            <p className="text-xl text-gray-600 mx-2">Chicken ({count})</p>
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

export default Chicken;
