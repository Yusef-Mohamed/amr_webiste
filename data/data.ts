import {
  ICareer,
  ICaseStudy,
  IProcess,
  IProduct,
  IProject,
} from "@/types/types";
export const products: IProduct[] = [
  {
    description:
      "This is a highly detailed 3D model of a modern chair. It's perfect for interior renderings and VR applications. The model has been meticulously crafted to ensure it captures the essence of modern design, making it a great addition to any digital environment.",
    id: "1",
    image: ["/projects/projectOneImage.png", "/projects/projectOneImage.png"],
    logo: "/projects/projectOneLogo.svg",
    title: "3D Model",
    linkLabel: "View Project",
    link: "/",
  },
  {
    description:
      "This expansive 3D landscape depicts realistic mountain terrain. It's perfect for game environments, providing a vast and visually stunning backdrop for any adventure. The level of detail in the terrain adds a layer of realism that will immerse players in the game world.",
    id: "2",
    logo: "/projects/projectOneLogo.svg",
    image: ["/projects/projectOneImage.png", "/projects/projectOneImage.png"],
    title: "3D Landscape",
  },
  {
    description:
      "This is a fully rigged and animated 3D character model. It's ready for use in films and video games. The model has been expertly crafted and animated, providing a character that moves and reacts in a lifelike manner. This is a great asset for any project requiring a character model.",
    id: "3",
    logo: "/projects/projectOneLogo.svg",
    image: ["/projects/projectOneImage.png", "/projects/projectOneImage.png"],
    title: "Animated 3D",
  },
  {
    description:
      "This is a photorealistic 3D visualization of an urban apartment. It's ideal for presentations and marketing. The visualization captures the modern urban aesthetic, with a focus on clean lines and minimalist design. This is a great tool for showcasing property and interior design concepts.",
    id: "4",
    logo: "/projects/projectOneLogo.svg",
    image: ["/projects/projectOneImage.png", "/projects/projectOneImage.png"],
    title: "3D Architectural",
  },
  {
    description:
      "This is a printable 3D model of a geometric necklace. It showcases intricate design suitable for fashion accessories. The model captures the beauty of geometric design, resulting in a piece of jewelry that is both modern and timeless. This is a great example of how 3D printing can be used in the fashion industry.",
    id: "5",
    logo: "/projects/projectOneLogo.svg",
    image: ["/projects/projectOneImage.png", "/projects/projectOneImage.png"],
    title: "3D Printed Jewelry",
  },
  {
    description:
      "This is an immersive VR experience that simulates a spacewalk. It comes complete with interactive 3D elements and stunning visuals. The experience is designed to be as realistic as possible, providing users with the sensation of walking in space. This is a great tool for education, entertainment, or training purposes.",
    id: "6",
    logo: "/projects/projectOneLogo.svg",
    image: ["/projects/projectOneImage.png", "/projects/projectOneImage.png"],
    title: "Virtual Reality Experience",
  },
];
export const projects: IProject[] = [
  {
    description: "This is a project description",
    id: "1",
    image: ["/projects/projectOneImage.png", "/projects/projectOneImage.png"],
    title: "Project 1",
    linkLabel: "View Project",
    link: "/",
  },
  {
    description: "This is a project description",
    id: "1",
    image: ["/projects/projectOneImage.png", "/projects/projectOneImage.png"],
    title: "Project 1",
  },
  {
    description: "This is a project description",
    id: "1",
    image: ["/projects/projectOneImage.png", "/projects/projectOneImage.png"],
    title: "Project 1",
  },
];
export const processList: IProcess[] = [
  {
    title: "Project Initiation",
    steps: [
      "Project Kickoff",
      "Project Charter",
      "Project Plan",
      "Project Team",
    ],
  },
  {
    title: "Project Initiation",
    steps: [
      "Project Kickoff",
      "Project Charter",
      "Project Plan",
      "Project Team",
    ],
  },
  {
    title: "Project Initiation",
    steps: [
      "Project Kickoff",
      "Project Charter",
      "Project Plan",
      "Project Team",
    ],
  },
  {
    title: "Project Initiation",
    steps: [
      "Project Kickoff",
      "Project Charter",
      "Project Plan",
      "Project Team",
    ],
  },
  {
    title: "Project Initiation",
    steps: [
      "Project Kickoff",
      "Project Charter",
      "Project Plan",
      "Project Team",
    ],
  },
  {
    title: "Project Initiation",
    steps: [
      "Project Kickoff",
      "Project Charter",
      "Project Plan",
      "Project Team",
    ],
  },
];
export const careerPath: ICareer[] = [
  {
    company: "MTN Nigeria",
    position: "Senior Product Designer",
    date: "Nov 2021- Present",
  },
  {
    company: "MTN Nigeria",
    position: "Senior Product Designer",
    date: "Nov 2021- Present",
  },
  {
    company: "MTN Nigeria",
    position: "Senior Product Designer",
    date: "Nov 2021- Present",
  },
  {
    company: "MTN Nigeria",
    position: "Senior Product Designer",
    date: "Nov 2021- Present",
  },
];
export const caseStudies: ICaseStudy[] = [
  {
    image: "/projects/projectOneImage.png",
    title: "Project 1",
  },
  {
    image: "/projects/projectOneImage.png",
    title: "Project 1",
  },
];
export const companyImageSlider: string[] = [
  "/projects/projectOneImage.png",
  "/projects/projectOneImage.png",
  "/projects/projectOneImage.png",
  "/projects/projectOneImage.png",
];
