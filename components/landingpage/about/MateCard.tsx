import ExportedImage from "next-image-export-optimizer";
import { useRouter } from "next/router";
import Button, { ButtonType } from "../../general/Button";
import Tilt from 'react-parallax-tilt';
import { useState } from "react";
import { EmailHeartIcon } from "../../../lib/Icons";

export default function MateCard({ image, name, position, email, nickname, github }: { image: string, name: string, position: string, email: string, nickname: string, github: string }) {
    const router = useRouter();

    const sendMail = () => {
        const url = `mailto:${email}`;
        window.open(url, '_blank');
    }

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
                            className="absolute top-5 left-5"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github inline" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                           &nbsp;{github}
                        </div>
                        <div
                            className="absolute bottom-5 left-5 translate-z-4 text-white"
                        >
                            <p
                                className="text-sm font-GilroyLight"
                            >
                                &quot;{nickname}&quot;
                            </p>
                            <h1
                                className="text-3xl font-GilroyBold"
                            >
                                {name}
                            </h1>
                            <p
                                className="text-sm font-GilroyLight mb-5"
                            >
                                {position}
                            </p>
                            <span
                                onClick={sendMail}
                                className="inline"
                            >
                                <EmailHeartIcon width={30} height={30} color="white" /> {email}
                            </span>
                        </div>
                    </Tilt>
                </div>
            </a>
        </div>
    )
}