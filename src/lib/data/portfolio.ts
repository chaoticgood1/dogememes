export interface PortfolioItem {
  name: string;
  link: string;
  /** What I did on the project, shown as a label under the name. */
  role?: string;
  description?: string;
  image?: string;
  tech?: string;
}

/**
 * Sites and games that are live on the web.
 *
 * Descriptions are contribution-first on purpose: the screenshot already says
 * what the site looks like, so the copy should say what I built there.
 *
 * Card images live in `static/previews/` and are refreshed with
 * `npm run portfolio:images`. Missing images are not fatal: the card falls
 * back to a gradient tile with the site initial.
 */
export const portfolio: PortfolioItem[] = [
  {
    name: "Sikat Tech",
    link: "https://www.sikat.com/",
    role: "Senior Software Engineer",
    description:
      "Kickstarted the accounting-based business platform: set up the CI, cloud infrastructure and led the first developer team.",
    image: "/previews/sikat-tech.png",
  },
  {
    name: "MegaPerya",
    link: "https://megaperya.com",
    role: "Technical Lead",
    description:
      "Led the team that kickstarted the PAGCOR-licensed iGaming platform end to end.",
    image: "",
  },
  {
    name: "Muse Square",
    link: "https://musesquare.com",
    role: "Senior Software Engineer",
    description:
      "Built the operational memory platform that measures what drives sales and reuses what worked.",
    image: "/previews/musesquare.png",
  },
  {
    name: "King of Defenders 2",
    link: "https://kingofdefenders2.com/",
    role: "3D Game Developer",
    description:
      "Built the 3D world, rendering pipeline and combat loop for the King of Defenders sequel.",
    image: "/previews/king-of-defenders-2.png",
    tech: "ThreeJS",
  },
  {
    name: "PB Dionisio",
    link: "https://www.pbdionisio.com/shop/",
    role: "Senior Software Engineer",
    description:
      "Built and maintained the storefront, catalogue and checkout on Magento 2.",
    image: "/previews/pb-dionisio.png",
    tech: "Magento 2",
  },
  {
    name: "TCC Website",
    link: "https://tccinc.com/",
    role: "Web Developer",
    description:
      "Built and maintained the corporate site, page templates and content workflow on WordPress.",
    image: "/previews/tcc-website.png",
    tech: "WordPress",
  },
  {
    name: "TMNT Deck'd Out",
    link: "https://www.numuki.com/game/tmnt-deck-d-out",
    role: "Game Developer",
    description:
      "Implemented the card battle logic, turn flow and HUD for the Nickelodeon card battler.",
    image: "/previews/tmnt-deckd-out.png",
    tech: "Haxe",
  },
  {
    name: "Mr. Bean Skidding",
    link: "https://plays.org/mr-bean-bean-skidding/",
    role: "Game Developer",
    description:
      "Implemented the driving mechanics, collision tuning and scoring for the Mr. Bean racer.",
    image: "/previews/mr-bean-skidding.png",
    tech: "Haxe",
  },
  {
    name: "Alvin and the Chipmunks",
    link: "https://www.qgames.org/game/alvin-and-the-chipmunks-taking-center-stage.html",
    role: "Game Developer",
    description:
      "Implemented the music gameplay, animation sync and scoring for the Chipmunks title.",
    image: "/previews/alvin-and-the-chipmunks.png",
    tech: "Haxe",
  },
  {
    name: "Nick Dance Machine",
    link: "https://www.numuki.com/game/nick-dance-machine",
    role: "Game Developer",
    description:
      "Built the input timing, combo scoring and character animation for the dance game.",
    image: "/previews/nick-dance-machine.png",
    tech: "Haxe",
  },
  {
    name: "Fairly Odd Parents",
    link: "https://www.numuki.com/game/fop-wishing-101",
    role: "Game Developer",
    description:
      "Implemented the wish-based mini-games and reward flow for the Nickelodeon title.",
    image: "/previews/fairly-odd-parents.png",
    tech: "Haxe",
  },
  {
    name: "PGBC Game Lad Blitz",
    link: "https://www.numuki.com/game/pgbc-game-lad-blitz/",
    role: "Game Developer",
    description:
      "Implemented the arcade loop, progression and UI for the casual Nickelodeon game.",
    image: "/previews/pgbc-game-lad-blitz.png",
    tech: "Haxe",
  },
  {
    name: "Slot Game Prototype",
    link: "https://dogememes.org/game/",
    role: "Senior Game Developer",
    description:
      "Built the reel engine, win evaluation and Phaser front end for the prototype.",
    image: "/previews/slot-game-prototype.png",
    tech: "Phaser",
  },
];

/**
 * The three cards shown on the homepage. Curated by name so reordering the list
 * above never silently changes the strip, and so the initial view is all real
 * screenshots instead of fallback tiles.
 */
export const featuredPortfolio: PortfolioItem[] = [
  "Sikat Tech",
  "King of Defenders 2",
  "Muse Square",
]
  .map((name) => portfolio.find((item) => item.name === name))
  .filter((item): item is PortfolioItem => item !== undefined);
