import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}> <MenuRoundedIcon className='links'/> </IconButton>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)} >
      <div className='drawer-link'>
        <NavLink> Home </NavLink>
        <NavLink> Compare </NavLink>
        <NavLink> Watchlist </NavLink>
        <button className='dashboard'> Dashboard </button>
      </div>
      </Drawer>
    </div>
  );
}
