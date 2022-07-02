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
                className="absolute p-6 grid grid-rows-6 grid-row bg-white border-8 border-primary w-4/5 h-4/5 sm:w-2/5 sm:h-3/5 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-50"

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
                <div
                    className="row-span-1 h-auto sm:m-auto"
                >
                    <h1
                        className="text-3xl font-GilroyBold mb-4 text-primary h-10"
                    >
                        {props.title}
                    </h1>
                </div>
                {/* TODO: fix scroll height */}
                <div
                    className="text-sm sm:text-lg text-left row-span-5 text-black h-full overflow-scroll scrollbar-hide"
                    dangerouslySetInnerHTML={{ __html: props.longtext }}
                >
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