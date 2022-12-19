import { MegaphoneIcon } from "../lib/Icons"

export const ServiceDescriptionContent = () => {
    return (
        <div
            className="text-lg"
        >
            <strong>Natron</strong> is a start-up based in <strong>Bern</strong>, Switzerland that specializes in building and optimizing Kubernetes cloud infrastructure. 
            As experts in the Cloud Native Computing Foundation (CNCF) and software development, we are equipped to support developers in migrating legacy software to <strong>cloud-enabled</strong> Kubernetes applications. 
            Our dynamic and goal-oriented project management approach ensures that we deliver a final solution that meets our clients needs.<br/><br/>
            Let <strong>Natron</strong> help you navigate the complex world of cloud computing and achieve your business objectives.
            <br /><br />
            <hr
                className="border-2"
            />
            <div
                className="text-center mt-5 mb-5 font-Medium text-2xl border-white"
            >
                Roughly summarized, <strong>Natron</strong> offers the <strong>complete</strong> knowledge and engineering stack around the cloud and especially <strong>Kubernetes</strong>.
            </div>
            <hr
                className="border-2"
            />
            <br />
            <a href="mailto:info@natron.io"><MegaphoneIcon width={25} height={25} color="white" /> Feel free to contact us anytime!</a>
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
            At <strong>Natron</strong>, we are passionate about helping businesses navigate the complex world of IT infrastructure. 
            Our team specializes in designing, building, and automating stable systems using Kubernetes, with a focus on cloud native computing and the principles of the <strong>Cloud Native Computing Foundation (CNCF)</strong>.
            <br/><br/>
            Our main Kubernetes provider is <strong>Google Kubernetes Engine (GKE)</strong>, a highly available and cost-effective service that can run in the region of your choice (default: <strong>Europe-West6 in Zurich</strong>). 
            To ensure optimal performance on this platform, we follow the principles of the <strong>12 Factor App Manifesto</strong> in the design and development of cloud native applications, focusing on scalability, robustness, fault tolerance, and self-healing.
            <br/><br/>
            In addition to building cloud-based IT infrastructures, <strong>Natron</strong> is also equipped to design and build on-premises Kubernetes infrastructure. 
            No matter where you choose to host your IT systems, our team is dedicated to providing ongoing maintenance and lifecycle management to ensure that they are stable and secure for your applications.
            <br/><br/>
            At <strong>Natron</strong>, we are committed to providing the highest quality service and support to help your business thrive. 
            Contact us today to learn more about how we can help you achieve your IT goals.
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
            <strong>Containers</strong> have become a popular topic in the tech industry, and for good reason - they are an essential tool for bringing applications to the cloud. 
            At <strong>Natron</strong>, we understand the importance of properly containerizing your application, and we prioritize security considerations to minimize potential attack vectors.
            <br/><br/>
            Once your application has been packaged in a container, our team can assist with implementing <strong>CI/CD pipelines</strong> to automate the development process. 
            The possibilities are endless when it comes to automating and streamlining your workflow. 
            <br/><br/>
            Contact us to learn more about how we can help you take advantage of the benefits of containerization and CI/CD.
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
            return "We help you to build and design your application with the right tools and architecture."
        case ContentType.ContentLong:
            return `
            As a developer, it can be challenging to make the right <strong>software architecture</strong> decisions when working in the cloud, especially on Kubernetes. 
            At <strong>Natron</strong>, we understand the importance of planning and developing cloud-ready, cloud-native applications in order to fully leverage the capabilities of the platform.
            <br/><br/>
            To assist with this process, we recommend following the <strong>Twelve-Factor</strong> App method <strong>(https://12factor.net)</strong>. 
            This method has been proven to help developers create applications that are well-suited for the cloud. 
            We also offer guidance and support for developers looking to migrate their legacy applications to the cloud using this method.
            <br/><br/>
            Migrating to the cloud is often a question of <strong>investment</strong>, and there are different approaches that may make sense depending on the specific circumstances. 
            For example, it may be beneficial to migrate an app to Kubernetes first and then gradually refactor it into individual <strong>microservices</strong>. 
            At <strong>Natron</strong>, we are here to help you make informed decisions and set the right goals for your <strong>migration journey</strong>. 
            <br/><br/>
            With our expertise and support, you can confidently navigate the transition to the cloud, because it is no longer a future prospect, but a reality that you can take advantage of <strong>today</strong>.
            `
        default:
            return null
    }
}