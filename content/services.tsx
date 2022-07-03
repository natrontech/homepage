import { MegaphoneIcon } from "../lib/Icons"

export const ServiceDescriptionContent = () => {
    return (
        <div>
            Natron helps build and optimize Kubernetes cloud infrastructure.
            The start-up from <strong>Bern</strong> (Switzerland) deals with all edge topics in the area of the Cloud Native Computing Foundation. In addition, migration projects from legacy software to cloud-enabled Kubernetes applications are carried out and supported.With a lot of know-how in software development, Natron supports developers in this process. Dynamic and goal-oriented project management ultimately leads to a final solution.
            <br /><br />
            Roughly summarized, Natron offers the <strong>complete</strong> knowledge and engineering stack around the cloud and especially <strong>Kubernetes</strong>.
            <br/><br/>
            <MegaphoneIcon width={25} height={25} color="white" /> Feel free to contact us anytime!
        </div>
    )
}

export enum ContentType {
    Title,
    ContentShort,
    ContentLong
}

export const ServiceCloudReadyContent = (type: ContentType) => {
    switch (type) {
        case ContentType.Title:
            return "Cloud setup"
        case ContentType.ContentShort:
            return "We setup your cloud infrastructure the right way. You can focus on the development of your application."
        case ContentType.ContentLong:
            return `
            We design, build and automate stable IT infrastructures based on Kubernetes and support the maintenance and lifecycle management of existing environments.
            Our services are based on the principles of the Cloud Native Computing Foundation. 
            This enables us to provide a stable and secure environment for your application.<br/><br/>
            The main Kubernetes provider is Google Kubernetes Engine (GKE).
            Google developed Kubernetes, a platform for containerized applications, and GKE is the managed service that provides a highly available, high-performance, and cost-effective container hosting environment.
            In addition, GKE can run in the region of your choice.<br /> (Default: <strong>europe-west6</strong> -> Zurich)
            <br /><br />
            For the application to perform on this platform, it must be "cloud ready".
            We base the design and development of cloud native applications on the 12 Factor App Manifesto. Points such as scalability, robustness, fault tolerance and self-healing are central to this.
`
        default:
            return null
    }
}

export const ServiceContainerizationContent = (type: ContentType) => {
    switch (type) {
        case ContentType.Title:
            return "Container"
        case ContentType.ContentShort:
            return "We help you to containerize your legacy application and deploy it to the cloud. Join the movement!"
        case ContentType.ContentLong:
            return `
            We use Docker for containerization.
            Docker is a platform for developers to build, ship, and run software containers.
            It is a containerization engine that runs on top of Linux, and is used to create containers that can run on any platform.
            It is a lightweight, portable, and open-source software containerization engine.
            `
        default:
            return null
    }
}

export const SoftwareEngineeringContent = (type: ContentType) => {
    switch (type) {
        case ContentType.Title:
            return "Software Engineering"
        case ContentType.ContentShort:
            return "We helpt you to build and design your application with the right tools and architecture."
        case ContentType.ContentLong:
            return `
            In the cloud and especially on Kubernetes, it is difficult to make the right software architecture decisions as a developer. 
            Everything has to be planned and developed <strong>cloud ready / cloud native</strong> so that the full potential of the platform can be exploited.<br/><br/>
            Here, it is recommended to choose the <strong>Twelve-Factor App</strong> path (<a href="https://12factor.net" target="_blank">https://12factor.net</a>). 
            This method helps immensely in the development of an application for the cloud. 
            Natron also advises and helps developers to migrate their application slowly from legacy to the cloud on the basis of this method. <br/><br/>
            It is always a question of investment how this migration is done. 
            Sometimes it makes sense to migrate apps that are not yet cloud-ready to Kubernetes and later to outsource individual parts of the application to individual micro-services. Here, the right sensitivity and the correct goal setting are crucial for success. 
            Natron is there to help you with all these issues and support you along the way, because the cloud is no longer the future but reality.
            `
        default:
            return null
    }
}