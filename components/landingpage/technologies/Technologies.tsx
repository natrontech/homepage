import ExportedImage from "next-image-export-optimizer"
import { classNames } from "../../../lib/design"
import { LinkIcon } from "../../../lib/Icons"

export default function Technologies() {
    const technologies = [
        {
            name: "Kubernetes",
            link: "https://kubernetes.io",
            image: "/images/technologies/kubernetes.png"
        },
        {
            name: "ArgoCD",
            link: "https://argoproj.github.io/cd/",
            image: "/images/technologies/argocd.png"
        },
        {
            name: "RKE2",
            link: "https://docs.rke2.io",
            image: "/images/technologies/rke2.png"
        },
        {
            name: "Cert-Manager",
            link: "https://cert-manager.io",
            image: "/images/technologies/certmanager.png"
        }
    ]

    const providers = [
        {
            name: "Google",
            link: "https://cloud.google.com/",
            services: [
                "Google Workspace",
                "Google Cloud Platform",
                "Mail Service",
            ]
        },
        {
            name: "GitHub",
            link: "https://github.com",
            services: [
                "Source Code Management",
                "Collaboration",
                "Version Control",
                "GitOps (CI/CD)",
                "Issue Tracking",
            ]
        },
        {
            name: "Bexio",
            link: "https://www.bexio.ch/",
            services: [
                "Accounting",
                "Invoicing",
                "Payment",
                "CRM",
            ]
        },
        {
            name: "Cloudflare",
            link: "https://www.cloudflare.com/",
            services: [
                "DNS",
                "ACME DNS Challenge",
            ]
        },
        {
            name: "Hostpoint",
            link: "https://www.hostpoint.ch/",
            services: [
                "Domain Names",
            ]
        },
        {
            name: "Notion",
            link: "https://www.notion.so/",
            services: [
                "Document Management",
                "Task Management",
                "Project Management",
            ]
        },
        {
            name: "Figma",
            link: "https://www.figma.com/",
            services: [
                "Design",
                "Prototyping",
                "Wireframing",
                "UI/UX",
            ]
        },
        {
            name: "Discord",
            link: "https://discord.gg",
            services: [
                "Chat",
                "Voice",
                "Video",
            ]
        }
    ]

    return (
        <div
            id="technologies"
            className="py-20"
        >
            <h1
                className="sm:text-xxl text-5xl font-GilroyBold text-center mb-20"
            >
                Technologies we <span className="text-primary">rely</span> on
            </h1>
            <div
                className="mb-20"
            >
                <div className={classNames(
                    technologies.length > 2 ? "sm:grid-cols-3" : "sm:grid-cols-2",
                    "grid grid-cols-1 gap-4 sm:gap-10"
                )}
                >

                    {
                        technologies.map((item: any, index: number) => {
                            return (
                                <a
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div
                                        className="group relative col-span-1 py-2 border-primary border-8 flex justify-center cursor-pointer transition-all duration-200 ease-in-out"
                                    >
                                        <div
                                            className="h-32 w-52 relative m-auto"
                                        >
                                            <ExportedImage
                                                className="pointer-events-none"
                                                src={item.image}
                                                alt={item.name}
                                                objectFit="contain"
                                                layout="fill"
                                            />
                                        </div>
                                        <div
                                            className="font-GilroyBold text-3xl w-full sm:opacity-0 absolute bottom-0 left-0 bg-primary py-1 px-2 group-hover:opacity-100 sm:translate-y-5 sm:h-0 group-hover:translate-y-0 group-hover:h-auto transition-all duration-200 ease-in-out"
                                        >
                                            {item.name}
                                        </div>
                                    </div>
                                </a>
                            )
                        })
                    }


                </div>
            </div>
            <h1
                className="sm:text-7xl text-5xl font-GilroyBold text-center mb-20"
            >
                Providers we use for our services
            </h1>
            <div
                className="grid sm:grid-cols-3 grid-cols-1 gap-4 sm:gap-10"
            >
                {
                    providers.map((item: any, index: number) => {
                        return (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative border-4 border-white p-4 min-h-52"
                            >
                                <div
                                    className="absolute top-5 right-5"
                                >
                                    <LinkIcon width={25} height={25} color="white" />
                                </div>
                                <h1
                                    className="text-center text-2xl font-GilroyBold mb-5"
                                >
                                    {item.name}
                                </h1>
                                <div
                                    className=" text-left text-lg font-GilroyRegular"
                                >
                                    {item.services.map((service: string, index: number) => {
                                        return (
                                            <li
                                                key={index}
                                                className=""
                                            >
                                                {service}

                                                {index !== item.services.length - 1 && (
                                                    <span>
                                                        ,
                                                    </span>
                                                )}

                                            </li>
                                        )
                                    })}

                                </div>
                            </a>
                        )
                    })

                }
            </div>
        </div>
    )
}