import ExportedImage from "next-image-export-optimizer"
import { classNames } from "../../../lib/design"
import { LinkIcon, ListIcon } from "../../../lib/Icons"

export default function Technologies() {
    const technologies = [
        {
            name: "ArgoCD",
            link: "https://argoproj.github.io/cd/",
            image: "/images/technologies/argocd.png"
        },
        {
            name: "Cert-Manager",
            link: "https://cert-manager.io",
            image: "/images/technologies/certmanager.png"
        },
        {
            name: "FluxCD",
            link: "https://fluxcd.io",
            image: "/images/technologies/fluxcd.png"
        }, {
            name: "Grafana",
            link: "https://grafana.com",
            image: "/images/technologies/grafana.png"
        },
        {
            name: "Kubernetes",
            link: "https://kubernetes.io",
            image: "/images/technologies/kubernetes.png"
        },
        {
            name: "Longhorn",
            link: "https://longhorn.io",
            image: "/images/technologies/longhorn.png"
        },
        {
            name: "MetalLB",
            link: "https://metallb.universe.tf",
            image: "/images/technologies/metallb.png"
        },
        {
            name: "Nginx Ingress",
            link: "https://www.nginx.com/products/nginx-controller",
            image: "/images/technologies/nginx.png"
        },
        {
            name: "Prometheus",
            link: "https://prometheus.io",
            image: "/images/technologies/prometheus.png"
        },
        {
            name: "RKE2",
            link: "https://docs.rke2.io",
            image: "/images/technologies/rke2.png"
        },
        {
            name: "Teleport",
            link: "https://goteleport.com",
            image: "/images/technologies/teleport.png"
        },
        {
            name: "vCluster",
            link: "https://vcluster.com",
            image: "/images/technologies/vcluster.png"
        },
        {
            name: "Velero",
            link: "https://velero.io",
            image: "/images/technologies/velero.png"
        },
        {
            name: "Golang",
            link: "https://golang.org",
            image: "/images/technologies/golang.png"
        },
        {
            name: "NextJS",
            link: "https://nextjs.org",
            image: "/images/technologies/nextjs.png"
        },
    ]

    const providers = [
        {
            name: "Google",
            link: "https://cloud.google.com/",
            services: [
                "Google Workspace",
                "Google Cloud Platform",
                "Mail Service",
                "Firebase",
            ],
            country: "USA, europe-west6",
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
            ],
            country: "USA",
        },
        {
            name: "Bexio",
            link: "https://www.bexio.ch/",
            services: [
                "Accounting",
                "Invoicing",
                "Payment",
                "CRM",
            ],
            country: "Switzerland",
        },
        {
            name: "Cloudflare",
            link: "https://www.cloudflare.com/",
            services: [
                "DNS",
                "ACME DNS Challenge",
            ],
            country: "USA",
        },
        {
            name: "Hostpoint",
            link: "https://www.hostpoint.ch/",
            services: [
                "Domains",
            ],
            country: "Switzerland",
        },
        {
            name: "Notion",
            link: "https://www.notion.so/",
            services: [
                "Document Management",
                "Task Management",
                "Project Management",
            ],
            country: "USA",
        },
        {
            name: "Figma",
            link: "https://www.figma.com/",
            services: [
                "Design",
                "Prototyping",
                "Wireframing",
                "UI/UX",
            ],
            country: "USA",
        },
        {
            name: "Discord",
            link: "https://discord.gg",
            services: [
                "Chat",
                "Voice",
                "Video",
            ],
            country: "USA",
        }
    ]

    return (
        <div
            id="technologies"
            className="py-20"
        >
            <h1
                className="lg:text-xxl sm:text-8xl text-5xl font-GilroyBold text-center mb-20"
            >
                Technologies we <span className="text-primary">rely</span> on
            </h1>
            <div
                className="mb-5"
            >
                <div className={classNames(
                    technologies.length % 2 == 1 ? "lg:grid-cols-3 sm:grid-cols-1" : "lg:grid-cols-2 sm:grid-cols-2",
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
                                        className="group relative col-span-1 py-10 border-primary border-8 flex justify-center cursor-pointer transition-all duration-200 ease-in-out"
                                    >
                                        <div
                                            className="h-20 w-52 relative m-auto"
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
                                            className="font-GilroyBold text-3xl w-full sm:w-2/3 sm:opacity-0 group-hover:w-full group-hover:opacity-100 absolute bottom-0 left-0 bg-primary sm:pt-2 pt-1 -mb-2 sm:mb-0 px-4 group-hover:translate-y-0 transition-all duration-200 ease-in-out"
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
            <h2
                className="sm:text-xl text-xl m-auto font-GilroyBold text-center mb-20"
            >
                ...and many more...
            </h2>
            <h1
                className="sm:text-6xl text-5xl font-GilroyBold text-center mb-2"
            >
                Providers <span className="text-primary">we</span> use for our services
            </h1>
            <p
                className="text-lg mb-20 text-center text-gray-300"
            >
                #transparency
            </p>
            <div
                className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-10"
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
                                    className="absolute bottom-2 right-2 font-GilroyLight text-sm"
                                >
                                    &#40;{item.country}&#41;
                                </div>
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
                                                className="mb-2 list-none"
                                            >
                                                <ListIcon width={25} height={25} color="white" />
                                                &nbsp;
                                                {service}
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