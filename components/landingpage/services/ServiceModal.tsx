import { useState } from "react";
import { classNames } from "../../../lib/design";
import { CrossIcon } from "../../../lib/Icons";
import Button, { ButtonType } from "../../general/Button";

export default function ServiceModal(props: any) {

    return (
        <div
            className={classNames(
                props.showModal ? "z-30 opacity-100" : "opacity-0 -z-10",
                "fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 backdrop-blur-md transition-opacity duration-150 ease-in-out",
            )}
        >
            {props.infos}
            <div
                className="absolute p-6 bg-white border-8 border-primary w-4/5 h-4/5 sm:h-2/5 sm:w-2/5 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-50"

            >
                <span
                    className="absolute top-2 right-2 m-4 cursor-pointer"
                    onClick={() => props.setShowModal(false)}
                >
                    <CrossIcon
                        width={20}
                        height={20}
                        color="#193BF5"
                    />
                </span>
                <h1
                    className="text-3xl font-GilroyBold mb-4 text-primary"
                >
                    {props.title}
                </h1>
                <p
                    className="text-sm mb-4 text-left text-black"
                >
                    {props.description}
                </p>
            </div>
            <div
                className="absolute h-full w-full z-20"
                onClick={() => props.setShowModal(false)}
            >
            </div>

        </div>
    )
}