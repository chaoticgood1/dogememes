import React from 'react';
import styles from "./Index.module.scss";
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CircleIcon from '@mui/icons-material/Circle';

type Props = {
  period: string,
  company: Map<string, string>,
  position: string,
  projects: Map<string, string>,
  summary: string,
  languages: string[],
  backend: string[],
  frontend: string[],
  others: string[],
};

const Descriptions: React.FC<Props> = ({
  period, 
  company,
  position, 
  projects,
  summary, 
  languages, 
  backend, 
  frontend,
  others
}) => {
  return (
    <Box className={styles.timeline}>
      <Company period={period} company={company} position={position} />
      
      <Box className={styles.divider}>
        <Box className={styles.entryDot}></Box>
      </Box>
      <Box className={styles.description}>
        <Box className={styles.row}>
          <Typography className={styles.rowDesc}>
            Projects: 
          </Typography>
          <Box>
          {Array.from(projects).map(([key, value], index) => (
            <Box key={index}>
              {value === "" ? (
                <Typography>
                  <CircleIcon className={styles.bullet} color="primary" />
                  {key}
                </Typography>
              ) : (
                <Box>
                  <CircleIcon className={styles.bullet} color="primary" />
                  <a href={value} target="_blank">{key}</a>
                </Box>
                
              )}
            </Box>
          ))}
          </Box>
        </Box>

        <Box className={styles.row}>
          <Typography className={styles.rowDesc}>
            Summary: 
          </Typography>
          <Typography>
            {summary}
          </Typography>
        </Box>

        <Box className={styles.row}>
          <Typography className={styles.rowDesc}>
            Programming Language:
          </Typography>
          <Box>
            {languages.map((key) => (
              <Typography>
                <CircleIcon className={styles.bullet} color="primary" />
                {key}
              </Typography>
            ))}
          </Box>
        </Box>

        <Box className={styles.row}>
          <Typography className={styles.rowDesc}>
            Backend:
          </Typography>
          <Typography>
            {backend.join(", ")}
          </Typography>
        </Box>

        <Box className={styles.row}>
          <Typography className={styles.rowDesc}>
            Frontend:
          </Typography>
          <Typography>
            {frontend.join(", ")}
          </Typography>
        </Box>

        <Box className={styles.row}>
          <Typography className={styles.rowDesc}>
            Others:
          </Typography>
          <Typography>
            {others.join(", ")}
          </Typography>
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
    <Box className={styles.company}>
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
  projects: string[]
}

const Projects: React.FC<ProjectsProps> = ({projects}) => {
  return (
    <Box className={styles.projects}>
      <Typography>
        Projects:
      </Typography>
      <Typography>
        <CircleIcon className={styles.bullet} color="primary" />
        {projects.join(', ')}
      </Typography>
    </Box>
  )
}

export default Descriptions;