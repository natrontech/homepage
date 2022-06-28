import ExportedImage from "next-image-export-optimizer";
import { useRouter } from "next/router";
import Button, { ButtonType } from "../../general/Button";
import Tilt from 'react-parallax-tilt';
import { useState } from "react";

export default function MateCard({ image, name, position, email }: { image: string, name: string, position: string, email: string }) {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);

    return (
        <div
            className="border-8 border-white sm:w-full w-full m-auto"
        >
            <a
                href={`mailto:${email}`}
                className="cursor-pointer"
            >
                <div
                    className="h-128 sm:hover:scale-110 active:hover:scale-105 transition-all duration-150 ease-in-out"
                >
                    <Tilt
                        className="h-128"
                    >
                        <ExportedImage
                            className="pointer-events-none"
                            src={image}
                            alt="Catch Phrase"
                            objectFit="cover"
                            layout="fill"
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-primary mix-blend-normal"
                        ></div>
                        <div
                            className="absolute bottom-5 left-5 translate-z-4 text-white"
                        >
                            <h1
                                className="text-3xl font-GilroyBold"
                            >
                                {name}
                            </h1>
                            <p
                                className="text-lg font-GilroyRegular"
                            >
                                {position}
                            </p>
                        </div>
                    </Tilt>
                </div>
            </a>
        </div>
    )
}