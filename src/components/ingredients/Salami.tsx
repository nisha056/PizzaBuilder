import { Add, Minus } from "iconsax-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, select, deselect } from "../../reducers/salamiReducer";

const Salami = () => {
    const salamiIngredient = {
        id: 1,
        name: 'Salami',
        imagesalami: "https://cdn3.iconfinder.com/data/icons/meat-23/512/Artboard_12-512.png"
    };
    const count = useSelector(
        (state: { salami: { count: number } }) => state.salami.count
    );
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };
    // const handleSelection = () => {
    //     dispatch(select('salami'));
    // };
    const handleSelection = () => {
        dispatch(select(salamiIngredient));
    }
    const handleDeselection = () => {
        // if (selectedSalami.length > 0) {
        //     const updatedSalami = selectedSalami.slice(0, selectedSalami.length - 1);
        dispatch(deselect(salamiIngredient));
        // }
    }

    return (
        <button className="flex items-center justify-between mx-10 px-6 py-2 bg-gray-200">
            <p className="text-xl text-gray-600 mx-2">Salami ({count})</p>
            <Add
                size="32"
                color="black"
                onClick={() => {
                    handleIncrement();
                    handleSelection();
                }}
            />
            <Minus
                size="32"
                color="black"
                onClick={() => {
                    handleDecrement();
                    handleDeselection();
                }}
            />
        </button>
    );
};

export default Salami;
