export interface PortfolioItem {
  name: string;
  link: string;
  description?: string;
  image?: string;
  tech?: string;
}

/**
 * Sites and games that are live on the web.
 *
 * Card images live in `static/previews/` and are refreshed with
 * `npm run portfolio:images`. Missing images are not fatal: the card falls
 * back to a gradient tile with the site initial.
 */
export const portfolio: PortfolioItem[] = [
  {
    name: "MegaPerya",
    link: "https://megaperya.com",
    description: "PAGCOR licensed online entertainment and gaming site.",
    // The site redirect-loops for headless browsers, so there is no automated
    // screenshot. Drop a manual capture at /previews/megaperya.png to use one.
    image: "",
  },
  {
    name: "Muse Square",
    link: "https://musesquare.com",
    description:
      "Operational memory platform that measures what drives sales and reuses what worked.",
    image: "/previews/musesquare.png",
  },
  {
    name: "King of Defenders 2",
    link: "https://kingofdefenders2.com/",
    description:
      "3D sequel of King of Defenders, built with ThreeJS and Node.js.",
    image: "/previews/king-of-defenders-2.png",
    tech: "ThreeJS",
  },
  {
    name: "PB Dionisio",
    link: "https://www.pbdionisio.com/shop/",
    description: "E-commerce storefront built and maintained on Magento 2.",
    image: "/previews/pb-dionisio.png",
    tech: "Magento 2",
  },
  {
    name: "TCC Website",
    link: "https://tccinc.com/",
    description: "Corporate website built and maintained on WordPress.",
    image: "/previews/tcc-website.png",
    tech: "WordPress",
  },
  {
    name: "TMNT Deck'd Out",
    link: "https://www.numuki.com/game/tmnt-deck-d-out",
    description: "2D browser game built for Nickelodeon.",
    image: "/previews/tmnt-deckd-out.png",
    tech: "Haxe",
  },
  {
    name: "Mr. Bean Skidding",
    link: "https://plays.org/mr-bean-bean-skidding/",
    description: "2D browser game built for the Mr. Bean franchise.",
    image: "/previews/mr-bean-skidding.png",
    tech: "Haxe",
  },
  {
    name: "Alvin and the Chipmunks",
    link: "https://www.qgames.org/game/alvin-and-the-chipmunks-taking-center-stage.html",
    description: "2D browser game built for Cartoon Network.",
    image: "/previews/alvin-and-the-chipmunks.png",
    tech: "Haxe",
  },
  {
    name: "Nick Dance Machine",
    link: "https://www.numuki.com/game/nick-dance-machine",
    description: "Rhythm browser game built for Nickelodeon.",
    image: "/previews/nick-dance-machine.png",
    tech: "Haxe",
  },
  {
    name: "Fairly Odd Parents",
    link: "https://www.numuki.com/game/fop-wishing-101",
    description: "2D browser game built for Nickelodeon.",
    image: "/previews/fairly-odd-parents.png",
    tech: "Haxe",
  },
  {
    name: "PGBC Game Lad Blitz",
    link: "https://www.numuki.com/game/pgbc-game-lad-blitz/",
    description: "Casual browser game built for Nickelodeon.",
    image: "/previews/pgbc-game-lad-blitz.png",
    tech: "Haxe",
  },
  {
    name: "Slot Game Prototype",
    link: "https://dogememes.org/game/",
    description: "Slot game prototype built with Phaser and TypeScript.",
    image: "/previews/slot-game-prototype.png",
    tech: "Phaser",
  },
];

/**
 * The short strip shown on the homepage. Deliberately mixed: a 3D game, an
 * e-commerce build, and a corporate site, so the range reads at a glance.
 */
export const featuredPortfolio = portfolio.slice(0, 3);
