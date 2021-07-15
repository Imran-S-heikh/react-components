import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import Backdrop from './components/backdrop/Backdrop.component';
import ButtonRipple from './components/button-ripple/ButtonRipple.component';
import Fade from './components/fade/Fade.component';



function App() {

  const [state,setState] = useState(true);

  return (
    <div className="D(f) Ai(c) Fxd(c) Mt(10rem)">
      <ButtonRipple onClick={()=>setState(!state)} >Toggle State</ButtonRipple>

      <div className="">
        <Fade
          open={state}
        >
          <div className="W(15rem) H(15rem) Bgc(red) Mt(10rem)"></div>
        </Fade>
      </div>
    </div>
  );
}

export default App;
