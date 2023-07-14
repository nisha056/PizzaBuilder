import React, { useState } from "react";
import Cheese from "../ingredients/Cheese";
import Chicken from "../ingredients/Chicken";
import Mushroom from "../ingredients/Mushroom";
import Olive from "../ingredients/Olive";
import Pepper from "../ingredients/Pepper";
import Pepperoni from "../ingredients/Pepperoni";
import Salami from "../ingredients/Salami";
import Tomato from "../ingredients/Tomato";
import { Modal } from "@mantine/core";
// import Image from "../../assets/pizza.jpg"
import Pizza from "./Pizza-UI";

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const handleConfirm = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };
    return (
        // <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${Image})` }}>
        <div className="bg-gray-300 h-screen">
            <h1 className="text-2xl font-bold  flex items-center justify-center py-5 text-sky-500">Pizza Builder</h1>
            <div className="flex gap-20">
                <div className="flex flex-col gap-5">
                    <Salami />
                    <Mushroom />
                    <Chicken />
                    <Olive />
                    <Pepper />
                    <Pepperoni />
                    <Cheese />
                    <Tomato />
                </div>
                <div className="mx-20  my-10 ">
                    <div className="mx-20 my-10 ">
                        <Pizza />
                        <button className="px-6 py-2 bg-sky-600 rounded text-white mt-20 mx-20" onClick={handleConfirm}>Confirm </button>
                        <Modal
                            opened={showModal}
                            onClose={handleModalClose}
                            padding="md"
                        >
                            <h2 className="text-2xl font-bold my-5  flex justify-center text-sky-500">Your Pizza is ready now ! </h2>
                            <div className="flex items-center justify-center">
                                <Pizza />
                            </div>
                            <h2 className="text-xl my-5 flex justify-center text-sky-400 font-bold">Enjoy!!</h2>
                        </Modal>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;
