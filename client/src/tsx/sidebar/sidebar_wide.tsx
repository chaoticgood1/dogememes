import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList() {
  // const [dense, setDense] = React.useState(false);
  // const [secondary, setSecondary] = React.useState(false);

  return (
    <Box sx={{
      display: { xs: 'none', lg: 'block'}, 
      flexGrow: 1, 
      minWidth: 350
    }}>
      <Demo>
        <List>
          {generate(
            <ListItem>
              <ListItemText
                primary="Single-line item"
              />
            </ListItem>,
          )}
        </List>
      </Demo>
    </Box>
  );
}