import React, {useContext} from 'react';
import Switch from '@mui/material/Switch';
import {ThemeSwitcher} from '../../../Context/ThemeSwitcherContext'

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicSwitches() {
  const {toggle, setToggle} = useContext(ThemeSwitcher); 

  function handleToggle() { 
    console.log(toggle);
    setToggle(prevState => !prevState);

    document.documentElement.style.setProperty("--black", toggle ? "#111" : "#f3f3f3");
      
    document.documentElement.style.setProperty("--white", toggle ? "#f3f3f3" : "#111");
  }

  return (
    <div>
      <Switch checked={!toggle} onClick={handleToggle}/>
    </div>
  );
}
