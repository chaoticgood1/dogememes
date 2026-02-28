<script lang="ts">
  import Introduction from "./Introduction.svelte";
  import Experience from "./Experience.svelte";
  import Education from "./Education.svelte";
  import Skills from "./Skills.svelte";
  import PersonalProjects from "./PersonalProjects.svelte";
  import Gallery from "./Gallery.svelte";
  import Button1 from "$lib/components/Button1.svelte";

  const portfolioContent: any = {
    introduction: {
      name: "Monico A. Colete",
      occupation: "",
      description: "I always think the universe is a simulation running on a computer.",
      avatar: "avatar.jpeg",
      socials: {
        xSocialLink: "https://x.com/MonicoColete",
        email: "mailto:colete_nico@yahoo.com",
        linkedInSocialLink: "https://www.linkedin.com/in/monico-colete-1b22691a3",
        github: "https://github.com/chaoticgood1",
        portfolio: "https://dogememes.org/portfolio",
      },
    },
    experiences: [
      {
        company: "GlobalX Digital Corporation",
        role: "Chief Technology Officer",
        duration: "July 2025 – Nov 2025",
        image: "",
        links: {
          "Karera Demo": "https://youtu.be/rwNaCZgrcGc",
        },
        logo: {
          "node.js.png": "Node.js",
          "fastify.png": "Fastify",
          "postgresql.png": "PostgreSQL",
          "drizzleorm.png": "Drizzle ORM",
          "nginx.png": "Nginx",
          "reactjs.png": "ReactJS",
          "materialui.png": "Material UI",
          "zustand.png": "Zustand",
          "cursorai.png": "Cursor AI",
          "vitest.png": "Vitest",
          "playwright.png": "Playwright",
          "grafana.png": "Grafana",
          "grafanak6.png": "Grafanak6",
          "docker.png": "Docker",
          "aws.png": "AWS",
          "github.png": "Github Actions",
        },
        description: "Led 8 developers to create a testable and scalable PAGCOR compliant iGaming system."
      },
      {
        company: "Playasia",
        role: "Backend Developer",
        duration: "March 2025 – July 2025",
        image: "playasia.jpeg",
        logo: {
          "rust.png": "Rust",
          "postgresql.png": "PostgreSQL",
          "keycloak.png": "Keycloak",
          "cursorai.png": "Cursor AI",
          "docker.png": "Docker",
          "hurl.dev.png": "Hurl.dev",
          "bruno.png": "Bruno",
        },
        description: "Created API for mobile app to be integrated with their e-commerce system.",
      },
      {
        company: "FYB Technologies",
        role: "Senior Game Developer",
        duration: "May 2025 – July 2025",
        image: "fyb.jpeg",
        links: {
          "Slot Game Prototype": "https://dogememes.org/game/",
        },
        logo: {
          "typescript.png": "Typescript",
          "phaser.png": "Phaser",
          "node.js.png": "Node.js",
          "cursorai.png": "Cursor AI",
          "vitest.png": "Vitest",
        },
        description: "Created slot games using Phaser and consulted on the system design.",
      },
      {
        company: "Confidential",
        role: "Senior Software Engineer",
        duration: "Jul 2024 – Dec 2024",
        image: "",
        logo: {
          "node.js.png": "Node.js",
          "fastify.png": "Fastify",
          "swagger.png": "Swagger",
          "mysql.png": "MySQL",
          "sqlite.png": "SQLite",
          "postgresql.png": "PostgreSQL",
          "nginx.png": "Nginx",
          "apache.png": "Apache",
          "reactjs.png": "ReactJS",
          "materialui.png": "Material UI",
          "zustand.png": "Zustand",
          "jest.png": "Jest",
          "": "SuperTest",
          "phaser.png": "Phaser",
          "sigepay.png": "SigePay",
        },
        description: "Further developed online betting system, added eKYC to improve scalability. Led a team of 5 developers, working on 4 different projects.",
      },
      {
        company: "GlobalX Digital Corporation",
        role: "Full Stack Developer",
        duration: "Mar 2024 – Jul 2024",
        image: "",
        logo: {
          "typescript.png": "Typescript",
          "node.js.png": "Node.js",
          "fastify.png": "Fastify",
          "mysql.png": "MySQL",
          "nginx.png": "Nginx",
          "apache.png": "Apache",
          "reactjs.png": "ReactJS",
          "materialui.png": "Material UI",
          "zustand.png": "Zustand",
          "jest.png": "Jest",
          "playwright.png": "Playwright",
          "phaser.png": "Phaser",
        },
        description: "Kick started online betting system, implemented custom games, payment processing and real-time analytics.",
      },
      {
        company: "GameDevAlice",
        role: "Full Stack/3D Game Developer",
        duration: "Sep 2020 – Oct 2023",
        image: "gamedevalice.png",
        logo: {
          "rust.png": "Rust",
          "javascript.png": "Javascript",
          "bevyengine.png": "Bevy Engine",
          "postgresql.png": "PostgreSQL",
          "wasm.png": "WASM",
          "": "Voxel",
          "": "Triplanar Mapping",
          "wgsl.png": "WGSL",
        },
        description: "Developed a peer to peer prorietary voxel game engine, optimized for compression and decompression of data.",
      },
      {
        company: "KatanatechWorks Inc.",
        role: "Full Stack Developer",
        duration: "Apr 2017 – Sep 2020",
        image: "katana.jpeg",
        links: {
          "PB Dionisio Website": "https://www.pbdionisio.com/shop/",
          "TCC Website": "https://tccinc.com/",
        },
        logo: {
          "php.png": "PHP",
          "javascript.png": "Javascript",
          "csharp.png": "C#",
          "wordpress.png": "WordPress",
          "magento.png": "Magento 2",
          "apache.png": "Apache",
        },
        description: "Handled several clients developing and maintaining e-commerce websites.",
      },
      {
        company: "Hilsoft Inc.",
        role: "Java Developer",
        duration: "Jul 2016 – Mar 2017",
        image: "hilsoft.jpeg",
        logo: {
          "java.png": "Java",
          "javascript.png": "Javascript",
          "": "Enterprise JavaBeans",
          "struts.png": "Apache Struts",
          "apacheant.png": "Apache Ant",
          "jaspersoft.png": "JasperReports"
        },
        description: "Assign in Research and development to start developing new ERP system.",
      },
      {
        company: "Indigo.Entertainment Phils. Inc.",
        role: "Game Developer",
        duration: "Sep 2014 – Jul 2016",
        image: "indigo.jpeg",
        links: {
          "TMNT Deck'd Out": "https://www.numuki.com/game/tmnt-deck-d-out",
          "Mr. Bean Skidding": "https://plays.org/mr-bean-bean-skidding/",
          "Alvin and the Chipmunks": "https://www.qgames.org/game/alvin-and-the-chipmunks-taking-center-stage.html",
          "Nick Dance Machine": "https://www.numuki.com/game/nick-dance-machine",
          "Fairly Odd Parents": "https://www.numuki.com/game/fop-wishing-101",
          "PGBC Game Lad Blitz": "https://www.numuki.com/game/pgbc-game-lad-blitz/"
        },
        logo: {
          "haxe.png": "Haxe",
          "java.png": "Java",
          "": "Flambe",
          "openfl.png": "OpenFL",
          "android.png": "Android Development",
        },
        description: "Created several 2D games for Nickelodeon and Cartoon network",
      },
    ],
    education: {
      image: "",
      school: "",
      degree: "",
      graduationYear: "",
    },
    skills: [],
    projects: [
      {
        name: "Portfolio",
        technology: "",
        description: "Links to professional and personal projects are all on my portfolio website.",
        image: "",
        link: "https://dogememes.org/portfolio",
      },
    ],
    gallery: [
      {
        image: "seattle1.jpg",
        text: "Show your hometown!",
      },
      {
        image: "seattle2.jpg",
        text: "My office.",
      },
      {
        component: Button1,
        text: "You can even show off components!",
      },
    ],
  };
</script>

<div
  class="overflow-x-hidden bg-background flex flex-col justify-center items-center relative"
>
  <div
    class="w-full max-w-[680px] flex flex-col my-24 lg:px-0 px-5 mb-[100px] sm:mb-[200px]"
  >
    <Introduction data={portfolioContent.introduction} />
    <Experience data={portfolioContent.experiences} />
    <!-- <Education data={portfolioContent.education} />
    <Skills data={portfolioContent.skills} />
    <div
      class="w-full h-[1px] bg-gradient-to-r from-zinc-900 to-zinc-900 via-zinc-800 my-12 mb-16"
    ></div>
    <div class="mb-4 flex flex-col items-center">
      <div class="text-3xl text-primary font-bold">My Work</div>
      <div class="text-faint font-thin mt-1">
        Collected across various projects.
      </div>
    </div>
    <PersonalProjects data={portfolioContent.projects} /> -->
  </div>
  <div
    class="bg-gradient-to-b from-background to-background-secondary bg-background h-[200px] w-full"
  ></div>
</div>
