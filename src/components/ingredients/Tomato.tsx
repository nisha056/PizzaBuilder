import { Add, Minus } from 'iconsax-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, select, deselect } from '../../reducers/tomatoReducer';

const Tomato: React.FC = () => {
    const count = useSelector(
        (state: { tomato: { count: number } }) =>
            state.tomato.count
    );
    const selectedTomato = useSelector(
        (state: { tomato: { selectedTomato: string[] } }) =>
            state.tomato.selectedTomato
    );
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };
    const handleSelection = () => {
        dispatch(select('tomato'))
    };
    const handleDeselection = () => {
        if (selectedTomato.length > 0) {
            const updatedTomato = selectedTomato.slice(0, selectedTomato.length - 1);
            dispatch(deselect(updatedTomato));
        }
    }

    return (
        <button className="flex items-center justify-between mx-10 px-6 py-2 bg-gray-200">
            <p className="text-xl text-gray-600 mx-2">Tomato({count})</p>
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

export default Tomato;
