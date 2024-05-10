import * as React from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));



export default function ListTask({ items ,setItems }) {
  const [dense, setDense] = React.useState(false);
  
  function generate(items) {

    return items.map((item, index) => (
      <ListItem
        key={index}
        secondaryAction={
          <div>
          <IconButton edge="end" aria-label="edit">

          <ModeEditIcon onClick={()=>{items[index]={}}}/>
          </IconButton>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon onClick={()=>{
              const newItems= items;
              newItems.splice(index, 1);
              console.log(newItems);
              setItems([...newItems]);
            }}/>
          </IconButton>
          </div>
        }
      >
        <ListItemText
          primary={item.name}
          secondary={item.value}
        />
      </ListItem>
    ));
  }
  return (
    <Grid item xs={12} md={6}>
      <Demo>
        <List dense={dense}>
          {generate(items)}
        </List>
      </Demo>
    </Grid>
  );
}
