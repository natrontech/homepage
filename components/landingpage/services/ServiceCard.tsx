import ExportedImage from "next-image-export-optimizer";
import { useRouter } from "next/router";
import Button, { ButtonType } from "../../general/Button";
import Tilt from 'react-parallax-tilt';
import { useEffect, useState } from "react";
import ServiceModal from "./ServiceModal";

export default function ServiceCard({ image, title, description, longtext }: { image: string, title: string | null, description: string | null, longtext: string | null }) {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);

    // on key escape, close modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setShowModal(false);
            }
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, [showModal]);

    return (
        <div
            className="border-8 grid grid-rows-2 h-auto border-white sm:w-auto xl:w-96 w-auto m-auto"
        >
            <div
                className=" row-span-1 sm:hover:scale-110 active:hover:scale-105 transition-all duration-150 ease-in-out"
            >
                <Tilt
                    className="h-full"
                >
                    <ExportedImage
                        className="pointer-events-none"
                        src={image}
                        alt="Catch Phrase"
                        objectFit="contain"
                        layout="fill"
                    />
                </Tilt>
            </div>
            <div
                className="p-5 relative row-span-1 border-t-8 border-white"
            >
                <h1
                    className="sm:text-2xl text-3xl font-GilroyBold mb-4 15"
                >
                    {title}
                </h1>
                <p
                    className="text-sm mb-4 h-20 overflow-scroll scrollbar-hide"
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
                longtext={longtext}
            />
        </div>
    )
}