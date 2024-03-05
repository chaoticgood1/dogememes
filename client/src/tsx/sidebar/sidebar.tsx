import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import { Link } from "react-router-dom";
import { ListItemText } from '@mui/material';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function SideBar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  
  const paths = {
    'Home': '/', 
    'Portfolio': '/portfolio', 
    'About': '/about'
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ 
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {Object.entries(paths).map(([key, value]) => (
          <ListItem key={key} disablePadding>
            {/* <ListItemButton>
              
              <Link to={value}>{key}</Link>
            </ListItemButton> */}
            <ListItemButton
              key={key}
              component={Link}
              to={value}
            >
              <ListItemText sx={{
                color: "#FFFFFF"
              }}>
                {key}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button 
            onClick={toggleDrawer(anchor, true)}
            id="show_drawer_1"
          >{anchor}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{
              sx: {
                top: {
                  xs: 65,
                  sm: 73,
                },
                backgroundColor: "#242424",
              }
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}