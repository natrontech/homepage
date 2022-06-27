import ExportedImage from "next-image-export-optimizer";
import { useRouter } from "next/router";
import Button, { ButtonType } from "../../general/Button";
import Tilt from 'react-parallax-tilt';
import { useState } from "react";
import ServiceModal from "./ServiceModal";

export default function ServiceCard({ image, title, description }: { image: string, title: string, description: string }) {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);


    console.log(showModal)

    return (
        <div
            className="border-8 border-white sm:w-auto xl:w-96 w-auto m-auto"
        >
            <div
                className="h-52 sm:hover:scale-110 active:hover:scale-105 transition-all duration-150 ease-in-out"
            >
                <Tilt
                    className="h-52"
                >
                    <ExportedImage
                        className="pointer-events-none"
                        src={image}
                        alt="Catch Phrase"
                        objectFit="cover"
                        layout="fill"
                    />
                </Tilt>
            </div>

            <hr
                className="border-4 border-white"
            />
            <div
                className="p-5"
            >
                <h1
                    className="text-3xl font-GilroyBold mb-4"
                >
                    {title}
                </h1>
                <p
                    className="text-sm mb-4"
                >
                    {description}
                </p>
                <Button
                    buttonType={ButtonType.Primary}
                    buttonText="Learn More"
                    onClick={() => setShowModal(true)}
                />
            </div>
            <ServiceModal
                showModal={showModal}
                setShowModal={setShowModal}
                title={title}
                description={description}
            />
        </div>
    )
}