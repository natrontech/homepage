import { MegaphoneIcon } from "../lib/Icons";

export const ServiceDescriptionContent = () => {
  return (
    <div className="text-lg">
      <strong>Natron</strong> is a start-up based in <strong>Bern</strong>,
      Switzerland that specializes in building and optimizing Kubernetes cloud
      infrastructure. As experts in the Cloud Native Computing Foundation (CNCF)
      and software development, we are equipped to support developers in
      migrating legacy software to <strong>cloud-enabled</strong> Kubernetes
      applications. Our dynamic and goal-oriented project management approach
      ensures that we deliver a final solution that meets our clients needs.
      <br />
      <br />
      Let <strong>Natron</strong> help you navigate the complex world of cloud
      computing and achieve your business objectives.
      <br />
      <br />
      <hr className="border-2" />
      <div className="text-center mt-5 mb-5 font-Medium text-2xl border-white">
        Roughly summarized, <strong>Natron</strong> offers the{" "}
        <strong>complete</strong> knowledge and engineering stack around the
        cloud and especially <strong>Kubernetes</strong>.
      </div>
      <hr className="border-2" />
      <br />
      <a href="mailto:info@natron.io">
        <MegaphoneIcon width={25} height={25} color="white" /> Feel free to
        contact us anytime!
      </a>
    </div>
  );
};

export enum ContentType {
  Title,
  ContentShort,
  ContentLong,
}

export const ServiceConsulting = (type: ContentType) => {
  switch (type) {
    case ContentType.Title:
      return "Consulting";
    case ContentType.ContentShort:
      return "We help you to build and design your application with the right tools and architecture.";
    default:
      return null;
  }
};

export const ServiceProjectManagement = (type: ContentType) => {
  switch (type) {
    case ContentType.Title:
      return "Project Management";
    case ContentType.ContentShort:
      return "We setup your cloud infrastructure the right way. You can focus on the development of your application.";
    default:
      return null;
  }
};

export const ServiceManagedServices = (type: ContentType) => {
  switch (type) {
    case ContentType.Title:
      return "Managed Services";
    case ContentType.ContentShort:
      return "We manage your Kubernetes and cloud infrastructure, freeing you to focus on growing your business with confidence.";
    default:
      return null;
  }
};
