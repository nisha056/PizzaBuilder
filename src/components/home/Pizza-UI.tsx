import React from "react";
import { useSelector } from "react-redux";
const Pizza: React.FC = () => {
    const selectedSalami = useSelector(
        (state: { salami: { selectedSalami: { id: number, name: string, imagesalami: string }[] } }) =>
            state.salami.selectedSalami
    );
    const selectedMushroom = useSelector(
        (state: { mushroom: { selectedMushroom: { id: number, name: string, imagemushroom: string }[] } }) =>
            state.mushroom.selectedMushroom
    );
    const selectedChicken = useSelector(
        (state: { chicken: { selectedChicken: { id: number, name: string, imageChicken: string }[] } }) =>
            state.chicken.selectedChicken
    );
    const selectedOlive = useSelector(
        (state: { olive: { selectedOlive: { id: number, name: string, imageOlive: string }[] } }) =>
            state.olive.selectedOlive

    );
    const selectedPepper = useSelector(
        (state: { pepper: { selectedPepper: { id: number, name: string, imagePepper: string }[] } }) =>
            state.pepper.selectedPepper
    );
    const selectedPepperoni = useSelector(
        (state: { pepperoni: { selectedPepperoni: { id: number, name: string, imagePepperoni: string }[] } }) =>
            state.pepperoni.selectedPepperoni
    );
    const selectedCheese = useSelector(
        (state: { cheese: { selectedCheese: { id: number, name: number, imageCheese: string }[] } }) =>
            state.cheese.selectedCheese
    );
    const selectedTomato = useSelector(
        (state: { tomato: { selectedTomato: { id: number, name: string, imageTomato: string }[] } }) =>
            state.tomato.selectedTomato
    );
    const getRandomPosition = (minLeft: number, maxLeft: number, minTop: number, maxTop: number) => {
        const left = Math.floor(Math.random() * (maxLeft - minLeft + 1)) + minLeft;
        const top = Math.floor(Math.random() * (maxTop - minTop + 1)) + minTop;
        return { left, top };
    };

    return (
        <div className="w-80 h-80 bg-red-300 rounded-full relative">
            {selectedSalami.map((salami, index) => {
                const { left, top } = index < 4 ? { left: 30, top: index * 10 } : getRandomPosition(15, 60, 4, 70);

                return (
                    <img
                        key={index}
                        src={salami.imagesalami}
                        className="absolute h-10"
                        style={{ top: `${top}%`, left: `${left}%` }}
                    />
                );
            })}
            {selectedMushroom.map((mushroom, index) => {
                const { left, top } = index < 5 ? {
                    left: 62, top: index * 10
                } : getRandomPosition(15, 60, 4, 70);

                return (
                    <img
                        key={index}
                        src={mushroom.imagemushroom}
                        className="absolute h-9"
                        style={{ top: `${top}%`, left: `${left}%` }}
                    />
                );
            })}
            {selectedChicken.map((chicken, index) => {
                const { left, top } = index < 5 ? {
                    left: 55, top: index * 10
                } : getRandomPosition(15, 60, 4, 70);

                return (
                    <img
                        key={index}
                        src={chicken.imageChicken}
                        className="absolute h-6"
                        style={{ top: `${top}%`, left: `${left}%` }}
                    />
                );
            })}
            {selectedOlive.map((olive, index) => {
                const { left, top } = index < 3 ? {
                    left: index * 10, top: 48
                } : getRandomPosition(15, 60, 4, 70);

                return (
                    <img
                        key={index}
                        src={olive.imageOlive}
                        className="absolute h-10"
                        style={{ top: `${top}%`, left: `${left}%` }}
                    />
                );
            })}
            {selectedPepper.map((pepper, index) => {
                const { left, top } = index < 3 ? {
                    left: 18, top: index * 10
                } : getRandomPosition(15, 60, 4, 70);

                return (
                    <img
                        key={index}
                        src={pepper.imagePepper}
                        className="absolute h-9"
                        style={{ top: `${top}%`, left: `${left}%` }}
                    />
                );
            })}
            {selectedPepperoni.map((pepperoni, index) => {
                const { left, top } = index < 5 ? {
                    left: index * 15, top: 37
                } : getRandomPosition(15, 60, 4, 70);

                return (
                    <img
                        key={index}
                        src={pepperoni.imagePepperoni}
                        className="absolute h-10"
                        style={{ top: `${top}%`, left: `${left}%` }}
                    />
                );
            })}
            {selectedCheese.map((cheese, index) => {
                const { left, top } = index < 5 ? {
                    left: 45, top: index * 10
                } : getRandomPosition(15, 60, 4, 70);

                return (
                    <img
                        key={index}
                        src={cheese.imageCheese}
                        className="absolute h-8"
                        style={{ top: `${top}%`, left: `${left}%` }}
                    />
                );
            })}
            {selectedTomato.map((tomato, index) => {
                const { left, top } = index < 5 ? {
                    left: index * 10, top: 62
                } : getRandomPosition(15, 60, 4, 70);

                return (
                    <img
                        key={index}
                        src={tomato.imageTomato}
                        className="absolute h-6"
                        style={{ top: `${top}%`, left: `${left}%` }}
                    />
                );
            })}
        </div >
    );
};

export default Pizza;
