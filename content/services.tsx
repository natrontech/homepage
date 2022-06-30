export const ServiceDescriptionContent = () => {
    return (
        <div>
            Natron helps build and optimize Kubernetes cloud infrastructure.
            The start-up from Bern (Switzerland) deals with all edge topics in the area of the Cloud Native Computing Foundation.
            In addition, migration projects from legacy software to cloud-enabled Kubernetes applications are carried out and supported.
            With a lot of know-how in software development, Natron supports developers in this process.
            Dynamic and goal-oriented project management ultimately leads to a final solution.
            <br />
            <br />
            Everything is always solved with a DevOps approach, so that the customer can focus only on the development of his application.
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
            return "Cloud ready"
        case ContentType.ContentShort:
            return "We setup your cloud infrastructure the right way. You can focus on the development of your application."
        case ContentType.ContentLong:
            return `
            We design, build and automate stable IT infrastructures based on Kubernetes and support the maintenance and lifecycle management of existing environments.
            Our services are based on the principles of the Cloud Native Computing Foundation. 
            This enables us to provide a stable and secure environment for your application.<br/><br/>
            The main Kubernetes provider is Google Kubernetes Engine (GKE).
            Google developed Kubernetes, a platform for containerized applications, and GKE is the managed service that provides a highly available, high-performance, and cost-effective container hosting environment.
            In addition, GKE can run in the region of your choice. (Default: europe-west6 -> Zurich)
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
            return "Containerization"
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
            return "We help you to build and optimize your infrastructure. We provide a complete software development lifecycle."
        case ContentType.ContentLong:
            return `
            We provide a complete software development lifecycle.
            We build and optimize your infrastructure.
            We build and optimize your application.
            We support your application.
            We support your infrastructure.
            We support your cloud infrastructure.
            We support your cloud native application.
            `
        default:
            return null
    }
}