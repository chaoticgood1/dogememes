import React from 'react';
import styles from "./Index.module.scss";
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

type Props = {
  period: string,
  company: Map<string, string>,
  position: string,
  projects: Map<string, string>,
  summaries: string[],
  common: string[],
  backend: string[],
  frontend: string[],
};

const Descriptions: React.FC<Props> = ({
  period, 
  company,
  position, 
  projects, 
  summaries, 
  common, 
  backend, 
  frontend
}) => {
  return (
    <Box className={styles.timeline}>
      <Company period={period} company={company} position={position} />
      
      <Box className={styles.divider}>
        <Box className={styles.entryDot}></Box>
      </Box>
      <Box className={styles.description}>
        <Box sx={{ display: "flex"}}>
          <Projects projects={projects} />

          <List>
            <Typography>
              Summary:
            </Typography>
            {summaries.map((tech, index) => (
              <ListItem key={index} sx={{ padding: "0px", }}>
                <ListItemText primary={`${tech}`} sx={{ margin: "0px", pl: 2}}/>
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
              <ListItem key={index} sx={{ padding: "0px", }}>
                <ListItemIcon sx={{ minWidth: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "10px" }} color="primary" />
                </ListItemIcon>
                <ListItemText primary={tech} sx={{ margin: "0px", }}/>
              </ListItem>
            ))}
          </List>
          <List className={styles.list}>
            <Typography>
              Backend:
            </Typography>
            {backend.map((tech, index) => (
              <ListItem key={index} sx={{ padding: "0px", }}>
                <ListItemIcon sx={{ minWidth: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "10px" }} color="primary" />
                </ListItemIcon>
                <ListItemText primary={tech} sx={{ margin: "0px", }}/>
              </ListItem>
            ))}
          </List>
          <List className={styles.list}>
            <Typography>
              Frontend:
            </Typography>
            {frontend.map((tech, index) => (
              <ListItem key={index} sx={{ padding: "0px", }}>
                <ListItemIcon sx={{ minWidth: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "10px" }} color="primary" />
                </ListItemIcon>
                <ListItemText primary={tech} sx={{ margin: "0px", }} />
              </ListItem>
            ))}
          </List>
        </Box>
        
      </Box>
    </Box>
  )
}

type CompanyProps = {
  period: string,
  company: Map<string, string>,
  position: string
}

const Company: React.FC<CompanyProps> = ({ period, company, position }) => {
  return (
    <Box>
      <Typography>{period}</Typography>
      {Array.from(company).map(([key, value], index) => (
        <Box key={index}>
          {value === "" ? (
            <Typography>{key}</Typography>
          ) : (
            <a href={value} target="_blank">{key}</a>
          )}
        </Box>
      ))}
      
      <Typography>{position}</Typography>
    </Box>
  )
}


type ProjectsProps = {
  projects: Map<string, string>
}

const Projects: React.FC<ProjectsProps> = ({projects}) => {
  return (
    <List sx={{width: "210px", minWidth: "210px"}}>
      <Typography>
        Projects:
      </Typography>
      {Array.from(projects).map(([key, value], index) => (
        <ListItem key={index} sx={{ padding: "0px", }}>
          <ListItemIcon sx={{ minWidth: "20px" }}>
            <FiberManualRecordIcon sx={{ fontSize: "10px" }} color="primary" />
          </ListItemIcon>
          {value === "" ? (
            <ListItemText primary={key} sx={{ margin: "0px", }}/>
          ) : (
            <a href={value} target="_blank">{key}</a>
          )}
        </ListItem>
      ))}
    </List>
  )
}

export default Descriptions;