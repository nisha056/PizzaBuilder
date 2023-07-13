import { Add, Minus } from 'iconsax-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, select, deselect } from '../../reducers/pepperReducer';

const Pepper: React.FC = () => {
    const count = useSelector(
        (state: { pepper: { count: number } }) =>
            state.pepper.count
    );
    const selectedPepper = useSelector(
        (state: { pepper: { selectedPepper: string[] } }) =>
            state.pepper.selectedPepper
    )
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };
    const handleSelection = () => {
        dispatch(select('pepper'));
    };
    const handleDeselection = () => {
        if (selectedPepper.length > 0) {
            const updatedPepper = selectedPepper.slice(0, selectedPepper.length - 1);
            dispatch(deselect(updatedPepper))
        }
    }

    return (
        <button className="flex items-center justify-between mx-10 px-6 py-2 bg-gray-200">
            <p className="text-xl text-gray-600 mx-2">Pepper({count})</p>
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

export default Pepper;
