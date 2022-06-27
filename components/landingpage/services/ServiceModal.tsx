import { useState } from "react";
import { classNames } from "../../../lib/design";
import { CrossIcon } from "../../../lib/Icons";
import Button, { ButtonType } from "../../general/Button";

export default function ServiceModal(props: any) {

    return (
        <div
            className={classNames(
                props.showModal ? "z-30 opacity-100" : "opacity-0 -z-50",
                "fixed top-0 left-0 w-full h-full bg-gray-200 bg-opacity-50 transition-opacity duration-150 ease-in-out",
            )}
        >
            {props.infos}
            <div
                className="absolute bg-black rounded-lg w-4/5 h-4/5 sm:h-2/5 sm:w-2/5 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-50"

            >
                <span
                    className="absolute top-0 right-0 m-4"
                    onClick={() => props.setShowModal(false)}
                >
                    <CrossIcon
                        width={20}
                        height={20}
                        color="white"
                    />
                </span>
                <h1
                    className="text-3xl font-GilroyBold mb-4 text-center mt-20"
                >
                    {props.title}
                </h1>
                <p
                    className="text-sm mb-4 text-center"
                >
                    {props.description}
                </p>
                <div
                    className="bottom-10 absolute w-4/5 left-1/2 -translate-x-1/2"
                >
                    <Button
                        buttonType={ButtonType.Primary}
                        buttonText="OK"
                        onClick={() => props.setShowModal(false)}
                    />
                </div>
            </div>
            <div
                className="absolute h-full w-full z-20"
                onClick={() => props.setShowModal(false)}
            >
            </div>

        </div>
    )
}