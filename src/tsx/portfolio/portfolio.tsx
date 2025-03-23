import React from 'react';
import Descriptions from './descriptions';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export default function Portfolio() {

  return <div className='timeline'>
    <BodyHeader />
    <PlayAsia />
    <Confidential />
    <GlobalX />
    <GameDevAlice />
    <Katanatechworks />
    <Hilsoft />
    <Indigo />
  </div>;
}

const BodyHeader: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", paddingBottom: "20px"}}>
      <Box sx={{ display: "flex", margin: "auto" }}>
        <Typography sx={{ paddingRight: "10px"}}>
          Github:
        </Typography>
        <a href="https://github.com/chaoticgood1" target="_blank">Link</a>
      </Box>
    </Box>
    
  )
}


const PlayAsia: React.FC = () => {
  const period = "March 2025 - Present"
  const company = new Map([["PlayAsia", ""]])
  const position = "Backend Developer"
  const projects = new Map([
    ["", ""],
  ])
  
  const summary = "Developing a super secret mobile app for gamer community :)"
  const languages = ["Rust"]
  const backend = [
    "Poem", "PostgreSQL", "Keycloak"
  ]
  const frontend = [""]
  const others = ["Docker", "Hurl.dev", "Bruno"]
  return (
    <Descriptions
      period={period}
      company={company}
      position={position}
      projects={projects}
      summary={summary}
      languages={languages}
      backend={backend}
      frontend={frontend}
      others={others}
    />
  )
}


const Confidential: React.FC = () => {
  const period = "July 2024 - Dec 2024"
  const company = new Map([["Confidential", ""]])
  const position = "Senior Software Engineer"
  const projects = new Map([
    ["Kingfisher", "https://kingfisher777.com/"],
    ["HorseRace", "https://goldenace67.com/"],
    ["MegaPerya", ""],
    ["Atlas", ""],
  ])
  
  const summary = "Mobile first application, lead team of 5 developers handling 4 projects, first three projects are online betting system using SigePay as payment system"
  const languages = ["Typescript", "Python"]
  const backend = [
    "NodeJS", "Fastify", "FastAPI", "Swagger", "MySQL", "SQLite", "PostgreSQL",
    "Nginx", "Apache"
  ]
  const frontend = ["ReactJS", "Material UI", "Zustand"]
  const others = ["Jest", "SuperTest", "Phaser", "Uecs", "SigePay"]
  return (
    <Descriptions
      period={period}
      company={company}
      position={position}
      projects={projects}
      summary={summary}
      languages={languages}
      backend={backend}
      frontend={frontend}
      others={others}
    />
  )
}

const GlobalX: React.FC = () => {
  const period = "March 2024 - July 2024"
  const company = new Map([["GlobalX PH", "http://globalx.com.ph/"]])
  const position = "Fullstack Web and Game Developer"
  const projects = new Map([["Karera", "https://karera.live/"]])
  
  const summary = "Mobile first application, developed an online betting system from scratch, with custom game Zodiac Race"
  const languages = ["Typescript"]
  const backend = ["NodeJS", "Fastify", "Uecs", "MySQL", "SQLite", "Nginx", "Apache"]
  const frontend = ["ReactJS", "Mui", "Zustand"]
  const others = ["Jest", "Grafana", "PlayWright", "Phaser", "Uecs"]
  return (
    <Descriptions
      period={period}
      company={company}
      position={position}
      projects={projects}
      summary={summary}
      languages={languages}
      backend={backend}
      frontend={frontend}
      others={others}
    />
  )
}

const GameDevAlice: React.FC = () => {
  const period = "Sept 2020 - Oct 2023"
  const company = new Map([["GameDevAlice", "https://github.com/gamedevalice"]])
  const position = "3D Game Developer"
  const projects = new Map([["Ironverse", "/ironverse"]])
  
  const summary = "Have built lots of proprietary prototypes, the link above is the only open-source we created using WASM."
  const languages = ["Rust", "Javascript"]
  const backend = [
    "Bevy Engine", "Cargo", "Tokio", "PostgreSQL", "Game Physics", "MySQL", "SQLite",
  ]
  const frontend = ["WGSL", "WASM", "Web Worker"]
  const others = ["Voxel", "Shader", "Multi-threading"]
  return (
    <Descriptions
      period={period}
      company={company}
      position={position}
      projects={projects}
      summary={summary}
      languages={languages}
      backend={backend}
      frontend={frontend}
      others={others}
    />
  )
}

const Katanatechworks: React.FC = () => {
  const period = "April 2017 - Sept 2020"
  const company = new Map([["Katana Techworks Inc.", "https://www.katanatechworks.com/"]])
  const position = "Web Developer"
  const projects = new Map([
    ["Muse Square", "https://musesquare.com/"],
    ["PB Dionisio", "https://www.pbdionisio.com/shop/"],
    ["TCC Inc.", "https://tccinc.com/"],
  ])
  
  const summary = "I learned a lot here about web development."
  const languages = ["Javascript", "PHP", "C#"]
  const backend = ["MySQL/MariaDB"]
  const frontend = ["Cypress", "Google Analytics"]
  const others = ["Wordpress", "Magento 2", "Postman", "Laravel", ]
  return (
    <Descriptions
      period={period}
      company={company}
      position={position}
      projects={projects}
      summary={summary}
      languages={languages}
      backend={backend}
      frontend={frontend}
      others={others}
    />
  )
}

const Hilsoft: React.FC = () => {
  const period = "July 2016 - March 2017"
  const company = new Map([["Hilsoft Inc.", "https://www.hilsoftinc.com/"]])
  const position = "Java Developer"
  const projects = new Map([["ERP System", ""]])
  
  const summary = "Part of team developed ERP system development for CBTL and CWC"
  const languages = ["Java"]
  const backend = ["JEJB", "Struts", "MySQL", "Apache Ant"]
  const frontend = ["HTML", "CSS"]
  const others = ["Jaspersoft", "iReport"]
  return (
    <Descriptions
      period={period}
      company={company}
      position={position}
      projects={projects}
      summary={summary}
      languages={languages}
      backend={backend}
      frontend={frontend}
      others={others}
    />
  )
}

const Indigo: React.FC = () => {
  const period = "Sept 2014 - July 2016"
  const company = new Map([
    ["Indigo.Entertainment Phils. Inc.", "https://ph.indeed.com/cmp/Indigo-Entertainment"]
  ])
  const position = "Game Developer"
  const projects = new Map([
    ["TMNT Deckd Out", "https://www.numuki.com/game/tmnt-deck-d-out/"],
    ["Mr. Bean Skidding", "https://www.boomerangtv.co.uk/games/mr-bean-skidding"],
    ["Alvin and the Chipmunks", "http://www.qgames.org/game/alvin-and-the-chipmunks-taking-center-stage.html"],
    ["Nick Dance Machine", "https://www.numuki.com/game/nick-dance-machine/"],
    ["Fairly Odd Parents", "https://www.numuki.com/game/fop-wishing-101/"],
    ["PGBC Game Lad Blitz", "https://www.numuki.com/game/pgbc-game-lad-blitz/"],
  ])
  
  const summary = "I started my career as a Game Developer, we worked for Cartoon Network and Nickelodeon."
  const languages = ["Haxe", "Java"]
  const backend = ["Flambe", "OpenFL"]
  const frontend = ["HTML", "CSS", "Flash"]
  const others = ["Mercurial", "Git", "Android"]
  return (
    <Descriptions
      period={period}
      company={company}
      position={position}
      projects={projects}
      summary={summary}
      languages={languages}
      backend={backend}
      frontend={frontend}
      others={others}
    />
  )
}

