import React from "react";
import Chicken from "../ingredients/Chicken";
import Mushroom from "../ingredients/Mushroom";
import Olive from "../ingredients/Olive";
import Pepper from "../ingredients/Pepper";
import Pepperoni from "../ingredients/Pepperoni";
import Salami from "../ingredients/Salami";

import Pizza from "./Pizza-UI";

const Home = () => {
    return (
        <>
            <h1 className="text-xl font-bold flex items-center justify-center my-10 text-sky-500">Pizza Builder</h1>
            <div className="flex gap-20">
                <div className="flex flex-col gap-5">
                    <Salami />
                    <Mushroom />
                    <Chicken />
                    <Olive />
                    <Pepper />
                    <Pepperoni />
                </div>
                <div className="mx-20  my-10 ">
                    <div className="mx-20 my-10 ">
                        <Pizza />
                        <button className="px-6 py-2 bg-sky-600 rounded text-white mt-20 mx-20">Confirm </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;
