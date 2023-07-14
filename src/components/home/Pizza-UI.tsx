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
        let left: number, top: number;
        let isOverlapping;

        do {
            left = Math.floor(Math.random() * (maxLeft - minLeft + 1)) + minLeft;
            top = Math.floor(Math.random() * (maxTop - minTop + 1)) + minTop;

            isOverlapping = false;
            if (
                (left >= 15 && left <= 60 && top >= 4 && top <= 70) &&
                selectedSalami.some(salami => isOverlap(left, top, salami)) ||
                selectedMushroom.some(mushroom => isOverlap(left, top, mushroom)) ||
                selectedChicken.some(chicken => isOverlap(left, top, chicken)) ||
                selectedOlive.some(olive => isOverlap(left, top, olive)) ||
                selectedPepper.some(pepper => isOverlap(left, top, pepper)) ||
                selectedPepperoni.some(pepperoni => isOverlap(left, top, pepperoni)) ||
                selectedCheese.some(cheese => isOverlap(left, top, cheese)) ||
                selectedTomato.some(tomato => isOverlap(left, top, tomato))
            ) {
                isOverlapping = true;
            }
        } while (isOverlapping);

        return { left, top };
    };

    const isOverlap = (left: number, top: number, ingredient: any) => {
        const ingredientLeft = ingredient.left || 0;
        const ingredientTop = ingredient.top || 0;

        const ingredientWidth = 10;
        const ingredientHeight = 10;

        if (
            left + ingredientWidth > ingredientLeft &&
            left < ingredientLeft + ingredientWidth &&
            top + ingredientHeight > ingredientTop &&
            top < ingredientTop + ingredientHeight
        ) {
            return true; // Overlapping
        }
        return false; // Not overlapping
    };

    return (
        <div className="w-80 h-80 bg-red-300 rounded-full relative">
            {selectedSalami.map((salami, index) => {
                const { left, top } = getRandomPosition(15, 60, 4, 70);

                return (
                    <img
                        key={index}
                        src={salami.imagesalami}
                        className="absolute h-10"
                        style={{ top: `${top}%`, left: `${left}%` }}
                    />
                );
            })}

            {selectedMushroom.map((mushroom) => {
                const { left, top } = getRandomPosition(15, 60, 4, 70);

                return (
                    <img
                        key={mushroom.id}
                        src={mushroom.imagemushroom}
                        className="absolute top-1/4 left-0 h-10"
                        style={{ top: `${top}%`, left: `${left}%` }}
                    />
                );
            })}

            {selectedChicken.map((chicken) => {
                const { left, top } = getRandomPosition(15, 60, 4, 70);

                return (
                    <img
                        key={chicken.id}
                        src={chicken.imageChicken}
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-10 rounded-full"
                        style={{ top: `${top}%`, left: `${left}%` }}
                    />
                );
            })}

            {selectedOlive.map((olive) => {
                const { left, top } = getRandomPosition(15, 60, 4, 70);

                return (
                    <img
                        key={olive.id}
                        src={olive.imageOlive}
                        className="absolute top-1/2 right-1/2 h-10 transform -translate-y-1/2"
                        style={{ top: `${top}%`, left: `${left}%` }}
                    />
                );
            })}

            {selectedPepper.map((pepper) => {
                const { left, top } = getRandomPosition(15, 60, 4, 70);

                return (
                    <img
                        key={pepper.id}
                        src={pepper.imagePepper}
                        className="absolute top-1/2 left-0 h-10"
                        style={{ top: `${top}%`, left: `${left}%` }}
                    />
                );
            })}

            {selectedPepperoni.map((pepperoni) => {
                const { left, top } = getRandomPosition(15, 60, 4, 70);

                return (
                    <img
                        key={pepperoni.id}
                        src={pepperoni.imagePepperoni}
                        className="absolute top-3/4 left-1/2 h-10"
                        style={{ top: `${top}%`, left: `${left}%` }}
                    />
                );
            })}

            {selectedCheese.map((cheese) => {
                const { left, top } = getRandomPosition(15, 60, 4, 70);

                return (
                    <img
                        key={cheese.id}
                        src={cheese.imageCheese}
                        className="absolute top-1/4 right-0 h-10"
                        style={{ top: `${top}%`, left: `${left}%` }}
                    />
                );
            })}

            {selectedTomato.map((tomato) => {
                const { left, top } = getRandomPosition(15, 60, 4, 70);

                return (
                    <img
                        key={tomato.id}
                        src={tomato.imageTomato}
                        className="absolute top-3/4 right-0 transform -translate-x-1/2 -translate-y-1/2 h-8 "
                        style={{ top: `${top}%`, left: `${left}%` }}
                    />
                );
            })}
        </div>
    );
};

export default Pizza;
