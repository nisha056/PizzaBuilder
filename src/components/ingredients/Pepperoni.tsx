import { Add, Minus } from 'iconsax-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, select, deselect } from '../../reducers/pepperoniReducer';

const Pepperoni: React.FC = () => {
    const count = useSelector(
        (state: { pepperoni: { count: number } }) =>
            state.pepperoni.count
    );
    const selectedPepperoni = useSelector(
        (state: { pepperoni: { selectedPepperoni: string[] } }) =>
            state.pepperoni.selectedPepperoni
    );
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };
    const handleSelection = () => {
        dispatch(select('pepperoni'));
    };
    const handleDeselection = () => {
        if (selectedPepperoni.length > 0) {
            const updatedPepperoni = selectedPepperoni.slice(0, selectedPepperoni.length - 1);
            dispatch(deselect(updatedPepperoni));
        }
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
