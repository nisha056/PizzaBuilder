import { Add, Minus } from 'iconsax-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, select, deselect } from '../../reducers/chickenReducer';

const Chicken: React.FC = () => {
    const count = useSelector(
        (state: { chicken: { count: number } }) =>
            state.chicken.count
    );
    const selectedChicken = useSelector(
        (state: { chicken: { selectedChicken: string[] } }) =>
            state.chicken.selectedChicken
    );
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };
    const handleSelection = () => {
        dispatch(select('chicken'))
    };
    const handleDeselection = () => {
        if (selectedChicken.length > 0) {
            const updatedChicken = selectedChicken.slice(0, selectedChicken.length - 1);
            dispatch(deselect(updatedChicken));
        }
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
