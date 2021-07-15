import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import ButtonRipple from './components/button-ripple/ButtonRipple.component';
import ClickAwayListener from './components/click-away-listener/ClickAwayListener.component';
import DropDownExample from './components/drop-down/DropDown.example';
import Popper from './components/popper/Popper.component';




function App() {

  const [anchorEl,setAnchorEl] = useState<HTMLButtonElement|null>(null);

  return (
    <div className="D(f) Ai(c) Fxd(c) Mt(10rem)">
        <DropDownExample/>
    </div>
  );
}

export default App;
