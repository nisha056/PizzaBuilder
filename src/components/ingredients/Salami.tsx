import { Add, Minus } from 'iconsax-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, select, deselect } from '../../reducers/salamiReducer';

const Salami: React.FC = () => {
    const count = useSelector(
        (state: { salami: { count: number } }) =>
            state.salami.count
    );
    const selectedSalami = useSelector(
        (state: { salami: { selectedSalami: string[] } }) =>
            state.salami.selectedSalami
    );
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };
    const handleSelection = () => {
        dispatch(select('salami'))
    };
    // const handleDeselection = () => {
    //     dispatch(deselect('salami'));
    // }
    const handleDeselection = () => {
        if (selectedSalami.length > 0) {
            const updatedSelectedSalami = selectedSalami.slice(0, selectedSalami.length - 1);
            dispatch(deselect(updatedSelectedSalami));
        }
    };



    return (
        <button className="flex items-center justify-between mx-10 px-6 py-2 bg-gray-200" >
            <p className="text-xl text-gray-600 mx-2">Salami ({count})</p>
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

export default Salami;
