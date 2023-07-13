import { Add, Minus } from 'iconsax-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../reducers/pepperReducer';

const Pepper: React.FC = () => {
    const count = useSelector((state: { pepper: { count: number } }) => state.pepper.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    return (
        <button className="flex items-center justify-between mx-10 px-6 py-2 bg-gray-200">
            <p className="text-xl text-gray-600 mx-2">Pepper({count})</p>
            <Add size="32" color="black" onClick={handleIncrement} />
            <Minus size="32" color="black" onClick={handleDecrement} />
        </button>
    );
};

export default Pepper;
