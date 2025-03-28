import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Switch from "../../Common/MIUI components/Switch"

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div className='drawer'>
      <IconButton onClick={() => setOpen(true)}> <MenuRoundedIcon className='links'/> </IconButton>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)} >
      <div className='drawer-link'>
        <p> Theme Switcher <Switch /> </p>
        <Link to="/" > Home </Link>
        <Link to="/compare" > Compare </Link>
        <Link to="/WatchList" > Watchlist </Link>
        <Button text={"DashBoard"} outlined={false}/>
      </div>
      </Drawer>
    </div>
  );
}
