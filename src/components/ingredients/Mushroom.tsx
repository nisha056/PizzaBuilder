import { Add, Minus } from 'iconsax-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, select, deselect } from '../../reducers/mushroomReducer';

const Mushroom: React.FC = () => {
    const count = useSelector(
        (state: { mushroom: { count: number } }) =>
            state.mushroom.count
    );
    const selectedMushroom = useSelector(
        (state: { mushroom: { selectedMushroom: string[] } }) =>
            state.mushroom.selectedMushroom
    );
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };
    const handleSelection = () => {
        dispatch(select('mushroom'))
    };
    const handleDeselection = () => {
        if (selectedMushroom.length > 0) {
            const updatedSelectedMushroom = selectedMushroom.slice(0, selectedMushroom.length - 1);
            dispatch(deselect(updatedSelectedMushroom));
        }
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
