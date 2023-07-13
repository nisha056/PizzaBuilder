import React from "react";
import { useSelector } from "react-redux";

const Pizza: React.FC = () => {
    const selectedSalami = useSelector(
        (state: { salami: { selectedSalami: string[] } }) =>
            state.salami.selectedSalami
    );
    const selectedMushroom = useSelector(
        (state: { mushroom: { selectedMushroom: string[] } }) =>
            state.mushroom.selectedMushroom
    );
    const selectedChicken = useSelector(
        (state: { chicken: { selectedChicken: string[] } }) =>
            state.chicken.selectedChicken
    );
    const selectedOlive = useSelector(
        (state: { olive: { selectedOlive: string[] } }) =>
            state.olive.selectedOlive

    );
    return (
        <div className="w-80 h-80 bg-red-300 rounded-full relative">
            {selectedSalami.length > 0 && (
                <span className="bg-gray-300 absolute top-0 left-1/2 transform -translate-x-1/2">
                    Selected: {selectedSalami.join(",")}
                </span>
            )}

            {selectedMushroom.length > 0 && (
                <span className="bg-white absolute top-1/2 left-0 transform -translate-y-1/2">
                    Selected: {selectedMushroom.join(",")}
                </span>
            )}
            {
                selectedChicken.length > 0 && (
                    <span className="bg-red-500 absolute bottom-0 left-1/2 transform -translate-x-1/2">
                        Selected: {selectedChicken.join(',')}
                    </span>
                )

            }
            {selectedOlive.length > 0 && (
                <span className="bg-yellow-400 absolute top-1/2 right-0 transform -translate-y-1/2">
                    Selected: {selectedOlive.join(",")}
                </span>
            )}
        </div >
    );
};

export default Pizza;
