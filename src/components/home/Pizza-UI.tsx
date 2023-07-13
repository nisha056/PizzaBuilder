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
        (state: { pepperoni: { selectedPepperoni: string[] } }) =>
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


    return (
        <div className="w-80 h-80 bg-red-300 rounded-full relative">
            {selectedSalami.map((salami, index) => (
                <img key={index} src={salami.imagesalami} className={`absolute h-20`} style={{ top: `${index * 20}%`, left: `${index * 10}%` }} />
            ))}
            {
                selectedMushroom.map((mushroom) => (
                    <img key={mushroom.id} src={mushroom.imagemushroom} className="absolute top-1/4 left-0  h-20 " />
                ))
            }
            {
                selectedChicken.map((chicken) => (
                    <img key={chicken.id} src={chicken.imageChicken} className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-20 rounded-full" />
                ))
            }

            {/* {
                selectedOlive.length > 0 && (
                    <span className="bg-yellow-400 absolute top-1/2 right-1/2 transform -translate-y-1/2">
                        {selectedOlive.join(",")}
                    </span>
                )
            } */}
            {
                selectedOlive.map((olive) => (
                    <img key={olive.id} src={olive.imageOlive} className="absolute top-1/2 right-1/2  h-20 transform -translate-y-1/2" />
                ))
            }
            {
                selectedPepper.map((pepper) => (
                    <img key={pepper.id} src={pepper.imagePepper} className="absolute top-1/2 left-0  h-20 " />
                ))
            }
            {
                selectedPepperoni.length > 0 && (
                    <span className="bg-green-500 absolute top-3/4 left-0 transform -translate-x-0">
                        {selectedPepperoni.join(',')}
                    </span>
                )

            }
            {
                selectedCheese.map((cheese) => (
                    <img key={cheese.id} src={cheese.imageCheese} className="absolute top-1/4 right-0  h-20 " />
                ))
            }
            {
                selectedTomato.map((tomato) => (
                    <img key={tomato.id} src={tomato.imageTomato} className="absolute top-3/4 right-0 transform -translate-x-1/2 -translate-y-1/2 h-20 rounded-full" />
                ))
            }
        </div >
    );
};

export default Pizza;
