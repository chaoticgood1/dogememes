import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Index.module.scss";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Descriptions from './descriptions';

export default function Portfolio() {
  const navigate = useNavigate()


  return <div className='timeline'>
    <IamTech />
    <GlobalX />
    <GameDevAlice />
    <Katanatechworks />
    <Hilsoft />
    <Indigo />
  </div>;
}

const IamTech: React.FC = () => {
  const period = "July 2024 - Dec 2024"
  const company = new Map([["IamTech", ""]])
  const position = "CTO"
  const projects = new Map([
    ["Kingfisher", ""], 
    ["HorseRace", ""], 
    ["MegaPerya", ""], 
    ["Atlas", ""], 
  ])
  
  const summaries = [
    "Online betting boat race",
    "Online betting horse race",
    "Online betting for color game",
    "Created an EKYC prototype to validate players",
  ]
  const common = [
    "Typescript", "Jest", "Supertest"
  ]
  const backend = [
    "NodeJS", "Fastify", "Uecs", "SigePay", "MySQL", "SQLite", "PostgreSQL",
  ]
  const frontend = [
    "ReactJS", "Mui", "Uecs", "Zustand", "Phaser"
  ]
  return (
    <Descriptions
      period={period}
      company={company}
      position={position}
      projects={projects}
      summaries={summaries}
      common={common}
      backend={backend}
      frontend={frontend}
    />
  )
}

const GlobalX: React.FC = () => {
  const period = "March 2024 - July 2024"
  const company = new Map([["GlobalX PH", "http://globalx.com.ph/"]])
  const position = "Fullstack Web and Game Developer"
  const projects = new Map([
    ["Karera", "https://dev.karera.live/"],
  ])
  
  const summaries = [
    "Developed system from scratch, focused on Zodiac Race",
  ]
  const common = [
    "Typescript", "Jest", "Grafana"
  ]
  const backend = [
    "NodeJS", "Fastify", "Uecs", "MySQL", "SQLite",
  ]
  const frontend = [
    "ReactJS", "Mui", "Uecs", "Zustand", "Phaser", "PlayWright"
  ]
  return (
    <Descriptions
      period={period}
      company={company}
      position={position}
      projects={projects}
      summaries={summaries}
      common={common}
      backend={backend}
      frontend={frontend}
    />
  )
}

const GameDevAlice: React.FC = () => {
  const period = "Sept 2020 - Oct 2023"
  const company = new Map([["GameDevAlice", "https://github.com/gamedevalice"]])
  const position = "3D Game Developer"
  const projects = new Map([
    ["Ironverse", "/ironverse"],
  ])
  
  const summaries = [
    "Have built lots of proprietary prototypes, the link above is the only open-source we created using WASM.",
  ]
  const common = [
    "Rust", "Javascript", "Bevy Engine", "Tokio", "Voxel", "Shader", "Multi-threading"
  ]
  const backend = [
    "Cargo", "PostgreSQL", "Game Physics", "MySQL", "SQLite",
  ]
  const frontend = [
    "WGSL", "WASM", "Web Worker"
  ]
  return (
    <Descriptions
      period={period}
      company={company}
      position={position}
      projects={projects}
      summaries={summaries}
      common={common}
      backend={backend}
      frontend={frontend}
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
  
  const summaries = [
    "I learned a lot here about web development.",
  ]
  const common = [
    "Javascript", "Wordpress", "Magento 2", "Postman", "Laravel", 
  ]
  const backend = [
    "PHP", "MySQL/MariaDB"
  ]
  const frontend = [
    "Cypress", "Google Analytics"
  ]
  return (
    <Descriptions
      period={period}
      company={company}
      position={position}
      projects={projects}
      summaries={summaries}
      common={common}
      backend={backend}
      frontend={frontend}
    />
  )
}

const Hilsoft: React.FC = () => {
  const period = "July 2016 - March 2017"
  const company = new Map([["Hilsoft Inc.", "https://www.hilsoftinc.com/"]])
  const position = "Java Developer"
  const projects = new Map([
    ["ERP System", ""],
  ])
  
  const summaries = [
    "Part of team developed ERP system development for CBTL and CWC",
  ]
  const common = [
    "Java"
  ]
  const backend = [
    "JEJB", "Struts", "MySQL", "Apache Ant"
  ]
  const frontend = [
    "HTML", "Jaspersoft", "iReport"
  ]
  return (
    <Descriptions
      period={period}
      company={company}
      position={position}
      projects={projects}
      summaries={summaries}
      common={common}
      backend={backend}
      frontend={frontend}
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
  
  const summaries = [
    "I started my career as a Game Developer, we worked for Cartoon Network and Nickelodeon.",
  ]
  const common = [
    "Haxe", "Flambe", "Mercurial", "Android"
  ]
  const backend = ["Java"]
  const frontend = [
    "HTML", "Flash", "OpenFL"
  ]
  return (
    <Descriptions
      period={period}
      company={company}
      position={position}
      projects={projects}
      summaries={summaries}
      common={common}
      backend={backend}
      frontend={frontend}
    />
  )
}

