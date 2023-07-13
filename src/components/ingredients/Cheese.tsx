import { Add, Minus } from 'iconsax-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, select, deselect } from '../../reducers/CheeseReducer';

const Cheese: React.FC = () => {
    const count = useSelector(
        (state: { cheese: { count: number } }) =>
            state.cheese.count
    );
    const selectedCheese = useSelector(
        (state: { cheese: { selectedCheese: string[] } }) =>
            state.cheese.selectedCheese
    );
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };
    const handleSelection = () => {
        dispatch(select('Cheese'))
    };
    const handleDeselection = () => {
        if (selectedCheese.length > 0) {
            const updatedCheese = selectedCheese.slice(0, selectedCheese.length - 1);
            dispatch(deselect(updatedCheese));
        }
    }

    return (
        <button className="flex items-center justify-between mx-10 px-6 py-2 bg-gray-200">
            <p className="text-xl text-gray-600 mx-2">Cheese ({count})</p>
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

export default Cheese;
