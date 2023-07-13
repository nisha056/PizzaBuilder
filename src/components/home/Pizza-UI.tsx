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
    const selectedPepper = useSelector(
        (state: { pepper: { selectedPepper: string[] } }) =>
            state.pepper.selectedPepper
    );
    const selectedPepperoni = useSelector(
        (state: { pepperoni: { selectedPepperoni: string[] } }) =>
            state.pepperoni.selectedPepperoni
    );
    const selectedCheese = useSelector(
        (state: { cheese: { selectedCheese: string[] } }) =>
            state.cheese.selectedCheese
    );
    const selectedTomato = useSelector(
        (state: { tomato: { selectedTomato: string[] } }) =>
            state.tomato.selectedTomato
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
                    <span className="bg-red-700 absolute bottom-0 left-1/2 transform -translate-x-1/2">
                        Selected: {selectedChicken.join(',')}
                    </span>
                )

            }
            {
                selectedOlive.length > 0 && (
                    <span className="bg-yellow-400 absolute top-1/2 right-0 transform -translate-y-1/2">
                        Selected: {selectedOlive.join(",")}
                    </span>
                )
            }
            {
                selectedPepper.length > 0 && (
                    <span className="bg-sky-500 absolute top-1/4 left-0 transform -translate-x-0">
                        Selected: {selectedPepper.join(',')}
                    </span>
                )

            }
            {
                selectedPepperoni.length > 0 && (
                    <span className="bg-green-500 absolute top-3/4 left-0 transform -translate-x-0">
                        Selected: {selectedPepperoni.join(',')}
                    </span>
                )

            }
            {
                selectedCheese.length > 0 && (
                    <span className="bg-yellow-700 absolute top-1/4 right-0 transform -translate-x-0">
                        Selected: {selectedCheese.join(',')}
                    </span>
                )

            }
            {
                selectedTomato.length > 0 && (
                    <span className="bg-red-500 absolute top-3/4 right-0 transform -translate-y-0">
                        Selected: {selectedTomato.join(',')}
                    </span>
                )

            }
        </div >
    );
};

export default Pizza;
