import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Index.module.scss";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function Portfolio() {
  const navigate = useNavigate()


  return <div className='timeline'>
    <IamTech />
    <GlobalX />

    <div className="timeline-block">
      <div className='time'>
        <span>Sept 2020 - Oct 2023</span>
        <a href="https://github.com/gamedevalice" target="_blank">GameDevAlice</a>
        <span>3D Game Dev</span>
      </div>
      <div className="divider">
        <div className="entry-dot"></div>
      </div>
      <div className="description">
        <div>
          <a href="/ironverse" target="_blank">Ironverse</a>
        </div>
        Have built lots of proprietary prototypes, the link above is the only open-source we created using WASM.
        <br></br>
        Programming languages: Rust, Javascript
        <br></br>
        Tools: Bevy Engine, WASM, Cargo, PostgreSQL, WGSL, Tokio, Multithreading, Game Physics, Voxel, Shader
      </div>
    </div>

    <div className="timeline-block">
      <div className='time'>
        <span>April 2017 - Sept 2020</span>
        <a href="https://www.katanatechworks.com/" target="_blank">Katana Techworks Inc.</a>
        <span>Web Dev</span>
      </div>
      <div className="divider">
        <div className="entry-dot"></div>
      </div>
      <div className="description">
        <div>
          <a href="https://musesquare.com/" target="_blank">Muse Square</a>
          , <a href="https://www.pbdionisio.com/shop/" target="_blank">PB Dionisio</a>
          , <a href="https://tccinc.com/" target="_blank">TCC Inc.</a>
        </div>
        I learned a lot here about web development.
        <br></br>
        Programming languages: PHP, Javascript
        <br></br>
        Tools: MySQL/MariaDB, Wordpress, Magento 2, Postman, Laravel, Git, Cypress, Visual Studio Code, Ubuntu, Windows 7/10, GitExtension, Google Analytics
      </div>
    </div>

    <div className="timeline-block">
      <div className='time'>
        <span>July 2016 - March 2017</span>
        <a href="https://www.hilsoftinc.com/" target="_blank">Hilsoft Inc.</a>
        <span>Web Dev</span>
      </div>
      <div className="divider">
        <div className="entry-dot"></div>
      </div>
      <div className="description">
        We worked with CBTL and CWC.
        <br></br>
        Programming languages: Java
        <br></br>
        Tools: JEJB, Struts, MySQL, JSP, iReport, Apache Ant
      </div>
    </div>

    <div className="timeline-block">
      <div className='time'>
        <span>Sept 2014 - July 2016</span>
        <a href="https://ph.indeed.com/cmp/Indigo-Entertainment" target="_blank">Indigo.Entertainment Phils. Inc.</a>
        <span>Web Dev</span>
      </div>
      <div className="divider">
        <div className="entry-dot"></div>
      </div>
      <div className="description">
        <div>
          <a href="https://www.numuki.com/game/tmnt-deck-d-out/" target="_blank">TMNT Deckd Out</a>
          , <a href="https://www.boomerangtv.co.uk/games/mr-bean-skidding" target="_blank">Mr. Bean Skidding</a>
          , <a href="http://www.qgames.org/game/alvin-and-the-chipmunks-taking-center-stage.html" target="_blank">Alvin and the Chipmunks</a>
          , <a href="https://www.numuki.com/game/nick-dance-machine/" target="_blank">Nick Dance Machine</a>
          , <a href="https://www.numuki.com/game/fop-wishing-101/" target="_blank">Fairly Odd Parents</a>
          , <a href="https://www.numuki.com/game/pgbc-game-lad-blitz/" target="_blank">PGBC Game Lad Blitz</a>
        </div>
        I started my career as a Game Developer, we worked for Cartoon Network and Nickelodeon.
        <br></br>
        Programming languages: Haxe, Java
        <br></br>
        Tools: Flash, Flambe, OpenFl, Mercurial, FlashDevelop 5
      </div>
    </div>

    <div className="timeline-block">
    </div>
  </div>;
}

function IamTech() {
  const projects = [
    "Kingfisher", "HorseRace", "MegaPerya", "Atlas"
  ]
  const summaries = [
    "Online betting boat race",
    "Online betting horse race",
    "Online betting for color game",
    "Created an EKYC prototype to validate players",
  ]
  const backend = [
    "NodeJS", "Fastify", "Uecs", "SigePay", "MySQL", "SQLite", "PostgreSQL",
  ]
  const common = [
    "Typescript", "Jest", "Supertest"
  ]
  const frontend = [
    "ReactJS", "Mui", "Uecs", "Zustand", "Phaser"
  ]
  return (
    <Box className={styles.timeline}>
      <Box>
        <Typography>July 2024 - Dec 2024</Typography>
        <Typography>IamTech</Typography>
        <Typography>CTO</Typography>
      </Box>
      <Box className={styles.divider}>
        <Box className={styles.entryDot}></Box>
      </Box>
      <Box className={styles.description}>
        <Box sx={{ display: "flex"}}>
          <List sx={{paddingRight: "30px"}}>
            <Typography>
              Projects:
            </Typography>
            {projects.map((tech, index) => (
              <ListItem key={index} sx={{ padding: "0px", height: "20px" }}>
                <ListItemIcon sx={{ minWidth: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "10px" }} color="primary" />
                </ListItemIcon>
                <ListItemText primary={tech} />
              </ListItem>
            ))}
          </List>

          <List>
            <Typography>
              Summaries:
            </Typography>
            {summaries.map((tech, index) => (
              <ListItem key={index} sx={{ padding: "0px", height: "20px" }}>
                <ListItemText primary={tech} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box sx={{ display: "flex"}}>
          <List className={styles.list}>
            <Typography>
              Common:
            </Typography>
            {common.map((tech, index) => (
              <ListItem key={index} sx={{ padding: "0px", height: "20px" }}>
                <ListItemIcon sx={{ minWidth: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "10px" }} color="primary" />
                </ListItemIcon>
                <ListItemText primary={tech} />
              </ListItem>
            ))}
          </List>
          <List className={styles.list}>
            <Typography>
              Backend:
            </Typography>
            {backend.map((tech, index) => (
              <ListItem key={index} sx={{ padding: "0px", height: "20px" }}>
                <ListItemIcon sx={{ minWidth: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "10px" }} color="primary" />
                </ListItemIcon>
                <ListItemText primary={tech} />
              </ListItem>
            ))}
          </List>
          <List className={styles.list}>
            <Typography>
              Frontend:
            </Typography>
            {frontend.map((tech, index) => (
              <ListItem key={index} sx={{ padding: "0px", height: "20px" }}>
                <ListItemIcon sx={{ minWidth: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "10px" }} color="primary" />
                </ListItemIcon>
                <ListItemText primary={tech} />
              </ListItem>
            ))}
          </List>
        </Box>
        
      </Box>
    </Box>
  )
}

function GlobalX() {
  return (
    <div className="timeline-block">
      <div className='time'>
        <span>March 2024 - July 2024</span>
        <a href="https://globalx.com.ph/" target="_blank">GlobalX PH</a>
        <span>Full Stack Web/Game Developer</span>
      </div>
      <div className="divider">
        <div className="entry-dot"></div>
      </div>
      <div className="description">
        <div>
          <div>
            <a href="https://dev.karera.live/" target="_blank">Karera</a>
          </div>
          - I was the lead developer of online betting Zodiac Race, focused on game and analytics

          Their website is not up and the game, because last thing I heard is they are struggling on something.
        </div>
        <br></br>
        Programming languages: Typescript
        <br></br>
        Tools: NodeJS, Fastify, ws WebSocket, ReactJS, MUI, Zustand, PlayWright, Jest, Grafana
        Game Engine: Phaser, uecs
      </div>
    </div>
  )
}

