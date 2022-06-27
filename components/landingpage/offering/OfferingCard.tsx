import ExportedImage from "next-image-export-optimizer";
import { useRouter } from "next/router";
import Button, { ButtonType } from "../../general/Button";
import Tilt from 'react-parallax-tilt';

export default function OfferingCard({ image, title, description }: { image: string, title: string, description: string }) {
    const router = useRouter();

    return (
        <Tilt
            className="border-8 border-white"
        >
            <div
                className="relative sm:h-72 h-52"
            >
                <ExportedImage
                    className="pointer-events-none"
                    src={image}
                    alt="Catch Phrase"
                    layout="fill"
                />
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
                    onClick={() => {
                        router.push("/services");
                    }}
                />
            </div>
        </Tilt>
    )
}