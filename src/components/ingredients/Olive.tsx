import { Add, Minus } from 'iconsax-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, select, deselect } from '../../reducers/oliveReducer';

const Olive: React.FC = () => {
    const count = useSelector(
        (state: { olive: { count: number } }) =>
            state.olive.count
    );
    const selectedOlive = useSelector(
        (state: { olive: { selectedOlive: string[] } }) =>
            state.olive.selectedOlive
    )
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };
    const handleSelection = () => {
        dispatch(select('olive'))
    };
    const handleDeselection = () => {
        if (selectedOlive.length > 0) {
            const updatedOlive = selectedOlive.slice(0, selectedOlive.length - 1);
            dispatch(deselect(updatedOlive))
        }
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
