import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Link } from "react-router-dom";
import { ListItemText } from '@mui/material';

const paths = {
  'Home': '/', 
  'Portfolio': '/portfolio', 
  'About': '/about'
};

export default function InteractiveList() {
  return (
    <Box sx={{
      display: { xs: 'none', lg: 'block'}, 
      flexGrow: 1, 
      minWidth: 300,
      maxWidth: 300,
      paddingTop: 0,
      borderRight: '1px solid white',
      height: '100vh',
      marginRight: 5,
    }}>
      <List sx={{
        padding: 0,
      }}>
        {Object.entries(paths).map(([key, value]) => (
          <ListItem key={key} disablePadding>
            <ListItemButton
              key={key}
              component={Link}
              to={value}
            >
              <ListItemText>
                {key}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}