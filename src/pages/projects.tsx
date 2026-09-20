import ProjectCard from "../components/project-card";
import "./projects.css";

const projects = [
  {
    image: "https://picsum.photos/id/100/600/400",
    title: "Project 1",
    description:
      "Occaecat ex occaecat ullamco laborum est aliquip ipsum dolor ullamco est fugiat amet.",
  },
  {
    image: "https://picsum.photos/id/200/600/400",
    title: "Project 2",
    description:
      "Elit aute sit nisi velit id nulla. Deserunt quis ullamco nostrud cillum. Consequat voluptate aute enim magna nostrud.",
  },
  {
    image: "https://picsum.photos/id/300/600/400",
    title: "Project 3",
    description:
      "Ex enim do amet ullamco qui nisi est consectetur eiusmod deserunt. Minim duis veniam aliqua ipsum dolore laboris officia occaecat enim id sunt aute anim esse in. Anim ex laborum dolor cupidatat sint tempor aliquip. Exercitation voluptate culpa consectetur magna duis amet exercitation.",
  },
  {
    image: "https://picsum.photos/id/400/600/400",
    title: "Project 4",
    description:
      "Eiusmod irure ipsum ad occaecat reprehenderit aute duis sint mollit. Dolore do sit voluptate reprehenderit qui laborum excepteur incididunt dolore duis commodo commodo. Laborum excepteur ipsum consequat ea.",
  },
  {
    image: "https://picsum.photos/id/500/600/400",
    title: "Project 5",
    description:
      "Eiusmod irure ipsum ad occaecat reprehenderit aute duis sint mollit. Dolore do sit voluptate reprehenderit qui laborum excepteur incididunt dolore duis commodo commodo. Laborum excepteur ipsum consequat ea.",
  },
  {
    image: "https://picsum.photos/id/600/600/400",
    title: "Project 6",
    description:
      "Eiusmod irure ipsum ad occaecat reprehenderit aute duis sint mollit. Dolore do sit voluptate reprehenderit qui laborum excepteur incididunt dolore duis commodo commodo. Laborum excepteur ipsum consequat ea.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <div className="container">
        <h1>Projects</h1>
        <p>
          Consequat magna minim enim consectetur ut commodo ea esse dolore qui
          tempor. Commodo voluptate ad cupidatat aute aute irure laboris. Elit
          sit eiusmod et qui. Eu ut exercitation officia quis pariatur sit sunt.
          Sint mollit fugiat qui irure nisi magna irure. Quis ex cupidatat duis
          in cupidatat officia anim tempor ad do excepteur cupidatat deserunt.
          Consectetur et dolore veniam quis anim nisi enim elit excepteur non.
          Sit et exercitation in quis nisi sint id et culpa. Mollit in
          reprehenderit ex velit dolor Lorem irure excepteur magna officia elit
          ut eiusmod nisi.
        </p>
        <div className="project-cards">
          {projects.map((project, idx) => {
            return (
              <ProjectCard
                key={idx}
                image={project.image}
                title={project.title}
                description={project.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
