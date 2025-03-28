import React, {useState} from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicSwitches() {
  const [toggle, setToggle] = useState(JSON.parse(sessionStorage.getItem("themeSwitcher")));
  function handleToggle() { 
    console.log(toggle);
    setToggle(prevState => !prevState);

    sessionStorage.setItem("themeSwitcher", JSON.stringify(toggle));

    document.documentElement.style.setProperty("--black", toggle ? "#111" : "#f3f3f3");
      
    document.documentElement.style.setProperty("--white", toggle ? "#f3f3f3" : "#111");
  }

  return (
    <div>
      <Switch checked={toggle} onClick={handleToggle}/>
    </div>
  );
}
